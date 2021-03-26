const { admin, db } = require('../Util/admin')
const { uuid } = require('uuidv4')

exports.NotifLikeData = (req, res) => {
    let userData = {}
    db.doc(`/users/${req.user.username}`)
        .get()
        .then((doc) => {
            if (doc.exists) {
                userData.credentials = doc.data()
                return db.collection('likes').where('username', '==', req.user.username).get()
            }
        })
        /*.then((data) => {
        userData.likes = [];
        data.forEach((doc) => {
          userData.likes.push(doc.data());
        });
        return db
          .collection("notifications")
          .where("recipient", "==", req.user.handle)
          .orderBy("createdAt", "desc")
          .limit(10)
          .get();
      })
      .then((data) => {
        userData.notifications = [];
        data.forEach((doc) => {
          userData.notifications.push({
            recipient: doc.data().recipient,
            sender: doc.data().sender,
            createdAt: doc.data().createdAt,
            screamId: doc.data().screamId,
            type: doc.data().type,
            read: doc.data().read,
            notificationId: doc.id,
          });
        });
        return res.json(userData);
      })*/
        .catch((err) => {
            console.error(err)
            return res.status(500).json({ error: err.code })
        })
}
exports.getAuthenticatedUser = (req, res) => {
    let userData = {}
    console.log(req.body.uid)

    db.collection('Users')
        .where('uid', '==', req.body.uid)
        .get()
        .then((snapshot) => {
            console.log(snapshot.size)
            if (snapshot.size > 0) {
                snapshot.forEach((doc) => {
                    userData.credentials = doc.data()
                })
            }
            console.log(userData)
            return res.json(userData)
        })
        .catch((err) => {
            console.error(err)
            return res.status(500).json({ error: err.code })
        })
}

exports.getUserDetails = (req, res) => {
    let userData = {}
    console.log(req.params.username)

    db.collection('Users')
        .doc(req.params.username)
        .get()
        .then((doc) => {
            console.log(doc.data())
            if (doc.exists) {
                userData.user = {
                   ...doc.data()
                }
                return db
                    .collection('userPosts')
                    .where('username', '==', req.params.username)
                    .orderBy('createdAt')
                    .get()
                    .then((data) => {
                        userData.posts = []
                        data.forEach((doc) => {
                            userData.posts.push({
                                body: doc.data().body,
                                createdAt: doc.data().createdAt,
                                username: doc.data().username,
                                //userImage: doc.data().userImage,
                                likeCount: doc.data().likeCount,
                                commentCount: doc.data().commentCount,
                                postId: doc.id,
                            })
                        })
                        return res.json(userData)
                    })
            } else {
                return res.status(404).json({ errror: 'User not found' })
            }
        })
        .catch((err) => {
            console.error(err)
            return res.status(500).json({ error: err.code })
        })
}

//////GetPost
exports.getUserPost = (req, res) => {
    let postData = {}
    db.doc(`/userPosts/${req.params.postId}`)
        .get()
        .then((doc) => {
            // if (!doc.exists) {
            //     return res.status(404).json({ error: 'post not found' })
            // }
            postData = doc.data()
            postData.postId = doc.id
            return doc.ref.collection('comments').get()
        })
        .then((data) => {
            postData.comments = []
            data.forEach((doc) => {
                postData.comments.push(doc.data())
            })
            return res.json(postData)
        })
        .catch((err) => {
            console.error(err)
            res.status(500).json({ error: err.code })
        })
}

//////PostPost
exports.postUserPost = (req, res) => {
    const newPost = {
        username: req.body.username,
        body: req.body.body,
        createdAt: new Date().toISOString(),
        likeCount: 0,
        commentCount: 0,
        imageUrl: req.body.image != '' ? req.body.image : '',
    }
    db.collection('userPosts')
        .add(newPost)
        .then((doc) => {
            newPost.postId = doc.id
            db.collection('userPosts')
                .doc(doc.id)
                .set(newPost)
                .then(() => {
                    const newP = { ...newPost, comments: [], likes: [] }
                    res.status(200).send(newP)
                })
                .catch((e) => {
                    res.status(500).json({ error: 'error' })
                })
        })
        .catch((e) => {
            res.status(500).send(e)
        })
}

////SuppPost
exports.suppUserPost = (req, res) => {
    const postId = req.body.postId
    db.collection('userPosts')
        .doc(postId)
        .get()
        .then((doc) => {
            if (doc.exists) {
                doc.ref
                    .delete()
                    .then(() => {
                        res.status(200).json({ yes: 'post supprimé' })
                    })
                    .catch((e) => {
                        res.status(500)
                    })
            } else {
                res.status(500).json({ erreur: "le post n'existe plus" })
            }
        })
        .catch((e) => {
            res.status(500).send(e)
        })
}

exports.getUserPosts = (req, res) => {
    let UserId = req.body.username
    let userPosts = []
    db.collection('userPosts')
        .where('username', '==', UserId)
        .get()
        .then((snapshot) => {
            if (snapshot.size > 0) {
                snapshot.forEach((doc) => {
                    userPosts.push(doc.data())
                })
                return res.status(200).send(userPosts)
            } else {
                return res.status(200).json({ vide: 'pas de posts' })
            }
        })
}

// recup les posts
exports.getAllPosts = (req, res) => {
    let UserId = req.body.username
    console.log(UserId)
    let AllPosts = []

    db.collection('userPosts')
        .where('username', '==', UserId)
        .get()
        .then((snapshot) => {
            if (snapshot.size > 0) {
                snapshot.forEach((doc) => {
                    let post
                    post = doc.data()
                    post.comments = []

                    AllPosts.push(post)
                })
            }
        })
        .catch((e) => {
            console.log(e)
        })
    db.collection('follows')
        .where('follow', '==', UserId)
        .get()
        .then((snapshot) => {
            if (snapshot.size > 0) {
                snapshot.forEach((doc) => {
                    const followed = doc.data().followed
                    db.collection('userPosts')
                        .where('username', '==', followed)
                        .orderBy('createdAt', 'asc')
                        .get()
                        .then((snap) => {
                            if (snap.size > 0) {
                                snap.forEach((snapshot) => {
                                    let Post = snapshot.data()
                                    Post.comments = []
                                    AllPosts.push(Post)
                                })

                                AllPosts.sort(function (a, b) {
                                    var dtA = new Date(a['createdAt']),
                                        dtB = new Date(b['createdAt'])
                                    return dtB.getTime() - dtA.getTime()
                                })

                                return res.status(200).send(AllPosts)
                            } else {
                                return res.status(200).send(AllPosts)
                            }
                        })
                        .catch((e) => {
                            res.status(500)
                        })
                })
            } else {
                return res.status(201).send(AllPosts)
            }
        })
        .catch((e) => {
            res.send(e)
        })
}

//commentaire dun post
exports.commentOnPost = (req, res) => {
    const newComment = {
        body: req.body.body,
        creatAt: new Date().toISOString(),
        postId: req.params.postId,
        username: req.body.username,
        userImage: req.body.userImage,
    }
    console.log(newComment)

    db.doc(`/userPosts/${req.params.postId}`)
        .get()
        .then((doc) => {
            if (!doc.exists) {
                return res.status(404).json({ error: 'post inexistant' })
            }
            return doc.ref.update({ commentCount: doc.data().commentCount + 1 })
        })
        .then(() => {
            return db.doc(`/userPosts/${req.params.postId}`).collection('comments').add(newComment)
        })
        .then(() => {
            res.json(newComment)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({ error: 'Something went wrong' })
        })
}

exports.getCommentOnPost = (req, res) => {
    const postId = req.body.postId
    console.log(postId)
    const comments = []
    db.collection('userPosts')
        .doc(postId)
        .collection('comments')
        .get()
        .then((snap) => {
            if (snap.size > 0) {
                snap.forEach((doc) => {
                    comments.push(doc.data())
                })
                res.status(200).send(comments)
            } else {
                res.status(400).json({ error: 'no comments found' })
            }
        })
}

exports.uploadImage = (req, res) => {
    const BusBoy = require('busboy')
    const path = require('path')
    const os = require('os')
    const fs = require('fs')

    const busboy = new BusBoy({ headers: req.headers })

    let imageToBeUploaded = {}
    let imageFileName
    // String for image token
    console.log(uuid())
    let generatedToken = uuid()

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
        //console.log(fieldname, file, filename, encoding, mimetype);
        if (mimetype !== 'image/jpeg' && mimetype !== 'image/png') {
            return res.status(400).json({ error: 'Wrong file type submitted' })
        }
        // my.image.png => ['my', 'image', 'png']
        const imageExtension = filename.split('.')[filename.split('.').length - 1]
        // 32756238461724837.png
        imageFileName = `${Math.round(Math.random() * 1000000000000).toString()}.${imageExtension}`
        const filepath = path.join(os.tmpdir(), imageFileName)
        imageToBeUploaded = { filepath, mimetype }
        file.pipe(fs.createWriteStream(filepath))
    })
    busboy.on('finish', () => {
        admin
            .storage()
            .bucket()
            .upload(imageToBeUploaded.filepath, {
                resumable: false,
                metadata: {
                    metadata: {
                        contentType: imageToBeUploaded.mimetype,
                        //Generate token to be appended to imageUrl
                        firebaseStorageDownloadTokens: generatedToken,
                    },
                },
            })
            .then(() => {
                // Append token to url
                const imageUrl = `https://firebasestorage.googleapis.com/v0/b/studup-dc5db.appspot.com/o/${imageFileName}?alt=media&token=${generatedToken}`
                return res.status(200).send(imageUrl)
            })
            .catch((err) => {
                console.error(err)
                return res.status(500).json({ error: 'something went wrong' })
            })
    })
    busboy.end(req.rawBody)
}

exports.uploadProfileImage = (req, res) => {
    console.log(req.params.username)
    const BusBoy = require('busboy')
    const path = require('path')
    const os = require('os')
    const fs = require('fs')

    const busboy = new BusBoy({ headers: req.headers })

    let imageToBeUploaded = {}
    let imageFileName
    // String for image token
    console.log(uuid())
    let generatedToken = uuid()

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
        //console.log(fieldname, file, filename, encoding, mimetype);
        if (mimetype !== 'image/jpeg' && mimetype !== 'image/png') {
            return res.status(400).json({ error: 'Wrong file type submitted' })
        }
        // my.image.png => ['my', 'image', 'png']
        const imageExtension = filename.split('.')[filename.split('.').length - 1]
        // 32756238461724837.png
        imageFileName = `${Math.round(Math.random() * 1000000000000).toString()}.${imageExtension}`
        const filepath = path.join(os.tmpdir(), imageFileName)
        imageToBeUploaded = { filepath, mimetype }
        file.pipe(fs.createWriteStream(filepath))
    })
    busboy.on('finish', () => {
        admin
            .storage()
            .bucket()
            .upload(imageToBeUploaded.filepath, {
                resumable: false,
                metadata: {
                    metadata: {
                        contentType: imageToBeUploaded.mimetype,
                        //Generate token to be appended to imageUrl
                        firebaseStorageDownloadTokens: generatedToken,
                    },
                },
            })
            .then(() => {
                // Append token to url
                const imageUrl = `https://firebasestorage.googleapis.com/v0/b/bddsocialnetwork.appspot.com/o/${imageFileName}?alt=media&token=${generatedToken}`
               console.log(req.params
                .username)
                return db.collection("Users").doc(req.params.username).update({ imageUrl:imageUrl });
                
            }).then(() => {
                res.status(200).json({succes:"image updated succesfully"})
            })
            .catch((err) => {
                console.error(err)
                return res.status(500).json({ error: 'something went wrong' })
            })
    })
    busboy.end(req.rawBody)
}


exports.deleteImage = (req, res) => {
    let imageUrl = req.body.imageUrl
    let imageRef = admin.storage().bucket()
    imageRef
        .delete()
        .file(imageUrl)
        .then(() => {
            return res.status(200).Json({ succes: 'ouiiiii' })
        })
        .catch((error) => {
            return res.status(500)
        })
}

exports.likePostUser = (req, res) => {
    const newlike = db.collection('userPosts').doc(req.params.postId).collection('likes').where('username', '==', req.body.username).limit(1)

    const post = db.doc(`/userPosts/${req.params.postId}`)

    let postData
    console.log('working')

    post.get()
        .then((doc) => {
            if (doc.exists) {
                postData = doc.data()
                postData.postId = doc.id
                return newlike.get()
            } else {
                return res.status(404).json({ error: 'post not found' })
            }
        })
        .then((data) => {
            if (data.empty) {
                let newLike = {
                    postId: req.params.postId,
                    username: req.body.username,
                    creatAt: new Date().toISOString(),
                }
                return db
                    .collection('userPosts')
                    .doc(req.params.postId)
                    .collection('likes')
                    .add(newLike)
                    .then((doc) => {
                        newLike.likeId = doc.id
                        postData.likeCount++
                        return post.update({ likeCount: postData.likeCount })
                    })
                    .then(() => {
                        return res.json(newLike)
                    })
            } else {
                return res.status(400).json({ error: 'post already liked' })
            }
        })
        .catch((err) => {
            console.error(err)
            res.status(500).json({ error: err.code })
        })
}
