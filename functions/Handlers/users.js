const { admin, db } = require('../Util/admin')
const { fire,auth } = require('../../src/init')

exports.signUp = (req, res) => {
    console.log(req.body)
    let signUpinfo = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        displayName:req.body.username,
        username: req.body.username,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
    }
    console.log(signUpinfo.email)

    db.collection('Users')
        .doc(signUpinfo.username)
        .get()
        .then((user) => {
            if (user.exists) {
                return res.status(500).json({ general: 'username already taken' })
            } else {
                return auth
                    .createUserWithEmailAndPassword(signUpinfo.email, signUpinfo.password)
                    .then((data) => {
                        let userId = data.user.uid
                        // data.sendEmailVerification()
                        //.auth().sendPasswordResetEmail(email)
                        let newUser = {
                            FirstName: signUpinfo.firstname,
                            LastName: signUpinfo.lastname,
                            creatAt: new Date().toISOString(),
                            Email: signUpinfo.email,
                            imageUrl:"https://firebasestorage.googleapis.com/v0/b/studup-dc5db.appspot.com/o/profile.png?alt=media&token=51a55cfd-bc1f-4a07-bc7d-cfc230334cd3",
                            isonline: false,
                            uid: userId,
                            displayName:signUpinfo.displayName,
                            username: signUpinfo.username,
                        }
                        db.collection('Users').doc(signUpinfo.username).set(newUser)
                        return res.status(200).json({ utilisateur: 'profile crée avec succés' })
                    })
                    .catch((e) => {
                        console.error(e)
                        res.status(500).send(e)
                    })
            }
        })
        .catch((e) => {
            console.log(e)
            res.status(500).json({ error: 'error while fetching' })
        })
}
exports.updateProfile=(req,res) => {
   console.log(req.params.username)
    const update={
        displayName:req.body.displayName,
        bio:req.body.bio,
        adresse:req.body.adresse,
        univer:req.body.univer,
        tel:req.body.tel
    }
    db.doc(`/Users/${req.params.username}`).update(
        {
            displayName:req.body.displayName,
            bio:req.body.bio,
            adresse:req.body.adresse,
            univer:req.body.univer,
            tel:req.body.tel
        }
    ).then(() => { 
        res.status(200).json({succes:"succés"})
    }).catch((e) => {
        console.log(e)
        res.status(500).json({error:"error"})
    })
}

// exports.signIn = (req, res) => {
//     const userInfo = {
//         email: req.body.email,
//         password: req.body.password,
//     }

//     auth.signInWithEmailAndPassword(userInfo.email, userInfo.password)
//         .then((data) => {
//             let currentToken = data.user.getIdToken()
//             return currentToken
//         })
//         .then((Token) => {
//             const idToken = Token
//             console.log('bien joué ')
//             res.status(200).send(idToken)
//         })
//         .catch((e) => {
//             console.error(e)
//             return res.status(500).json({ general: 'wrong password or email' })
//         })
// }

exports.FollowUser = (req, res) => {
    console.log('yesss')
    let FollowRequest = {
        Owner: req.body.owner,
        AccountName: req.body.destination,
        date: new Date().toISOString(),
    }
    db.collection('followRequest')
        .where('Owner', '==', FollowRequest.Owner)
        .where('AccountName', 'in', [FollowRequest.AccountName, FollowRequest.AccountName])
        .get()
        .then((doc) => {
            if (doc.size > 0) {
                res.status(500).json({ error: 'request already sent' })
            } else {
                db.collection('followRequest')
                    .add(FollowRequest)
                    .then((doc) => {
                        console.log(doc.id)
                        return res.status(200).json({ success: ' following request sent' })
                    })
                    .catch((e) => {
                        console.error(e)
                        return res.status(500).json({ error: 'something went wrong' })
                    })
            }
        })
        .catch((e) => {
            console.error(e)
            return res.status(500).json({ error: 'something went wrong' })
        })
}

exports.acceptFollowRequest = (req, res) => {
    const request = {
        requestId: req.body.requestId,
        Owner: req.body.Owner,
        AccountName: req.body.destination,
    }
    console.log(request)
    db.collection('followRequest')
        .doc(request.requestId)
        .get()
        .then((doc) => {
            if (doc.exists) {
                db.collection('followRequest')
                    .doc(request.requestId)
                    .delete()
                    .then(() => {
                        console.log('yessyess')
                        db.collection('follows').add({
                            follow: request.Owner,
                            followed: request.AccountName,
                            dateFollow: new Date().toISOString(),
                        })
                        console.log('yesss')
                        res.status(200).json({ accepted: 'invitation accepted ' })
                    })
                    .catch((e) => {
                        res.status(500).json({ error: 'something wrong' })
                    })
            } else {
                res.status(501).json({ error: 'request doesnt exist' })
            }
        })
        .catch((e) => {
            res.status(500).json({ error: 'something wrong 1' })
        })
}

exports.declineFollowRequest = (req, res) => {
    const request = {
        requestId: req.body.requestId,
    }
    db.collection('followRequest')
        .doc(request.requestId)
        .get()
        .then((doc) => {
            if (doc.exists) {
                doc.ref
                    .delete()
                    .then(() => {
                        res.status(200).json({ accepted: 'invitation declined ' })
                    })
                    .catch((e) => {
                        res.status(500).json({ error: 'something wrong' })
                    })
            } else {
                res.status(501).json({ error: 'request doesnt exist' })
            }
        })
        .catch((e) => {
            res.status(500).json({ error: 'something wrong 1' })
        })
}

exports.unFollow = (req, res) => {
    let follower = req.body.follower
    let following = req.body.following

    db.collection('follows')
        .where('following', '==', follower)
        .where('followed', 'in', [following, following])
        .get()
        .then((doc) => {
            doc.forEach((element) => {
                element.ref.delete()
            })
            return res.status(200).json({ sucess: 'unfollowed succesfuly' })
        })
        .catch((e) => {
            return res.status(500).json({ error: 'something wrong happened' })
        })
}

exports.getSuggestedUsers = (req, res) => {
    let username = req.body.username

    console.log('helloooooo', req.body)

    db.collection('follows')
        .where('follow', '==', username)
        .get()
        .then((snap) => {
            if (snap.size > 0) {
                let followers = [username]
                snap.forEach((doc) => {
                    followers.push(doc.data().followed)
                })
                db.collection('Users')
                    .where('username', 'not-in', followers)
                    .limit(10)
                    .get()
                    .then((snapshot) => {
                        if (snapshot.size > 0) {
                            let suggested = []
                            snapshot.forEach((user) => {
                                suggested.push(user.data().username)
                            })
                            console.log(suggested)
                            db.collection('followRequest')
                                .where('Owner', '==', username)
                                .where('AccountName', 'in', suggested)
                                .get()
                                .then((snapshot) => {
                                    console.log(snapshot.size)
                                    if (snapshot.size > 0) {
                                        let nonSuggest = [username]
                                        snapshot.forEach((doc) => {
                                            nonSuggest.push(doc.data().AccountName)
                                        })
                                        console.log('yessssss')
                                        db.collection('Users')
                                            .where('username', 'not-in', nonSuggest)
                                            .get()
                                            .then((snapp) => {
                                                console.log(snapp.size)
                                                if (snapp.size > 0) {
                                                    console.log('momo')
                                                    let suggestedUsers = []
                                                    snapp.forEach((doc) => {
                                                        suggestedUsers.push(doc.data())
                                                    })
                                                    return res.status(200).send(suggestedUsers)
                                                } else {
                                                    console.log('youpipipi')
                                                    return res.status(201).json({ error: 'pas de suggestion' })
                                                }
                                            })
                                            .catch((e) => {
                                                console.log(e)
                                            })
                                    } else {
                                        res.status(200).send(suggested)
                                    }
                                })
                                .catch((e) => {
                                    res.status(500).send(e)
                                })
                        } else {
                            res.status(200).json({ error: 'pas de suggestion' })
                        }
                    })
                    .catch((e) => {
                        console.log('here1')
                        res.status(500).send(e)
                    })
            } else {
                console.log(username)
                db.collection('followRequest')
                    .where('Owner', '==', username)
                    .get()
                    .then((snapshot) => {
                        console.log(snapshot.size)
                        if (snapshot.size > 0) {
                            let nonSuggest = [username]
                            snapshot.forEach((doc) => {
                                nonSuggest.push(doc.data().AccountName)
                            })
                            db.collection('Users')
                                .where('username', 'not-in', nonSuggest)
                                .limit(10)
                                .get()
                                .then((snapp) => {
                                    if (snapp.size > 0) {
                                        let suggestedUsers = []
                                        snapp.forEach((doc) => {
                                            suggestedUsers.push(doc.data())
                                        })
                                        return res.status(200).send(suggestedUsers)
                                    }
                                })
                                .catch((e) => {
                                    console.log('here2')
                                    res.status(500).send(e)
                                })
                        } else {
                            db.collection('Users')
                                .where('username', '!=', username)
                                .limit(10)
                                .get()
                                .then((snapp) => {
                                    if (snapp.size > 0) {
                                        let suggestedUsers = []
                                        snapp.forEach((doc) => {
                                            suggestedUsers.push(doc.data())
                                        })
                                        return res.status(200).send(suggestedUsers)
                                    }
                                })
                        }
                    })
            }
        })
}

exports.getFollowRequest = (req, res) => {
    const username = req.body.username
    db.collection('followRequest')
        .where('AccountName', '==', username)
        .get()
        .then((snap) => {
            if (snap.size > 0) {
                let requests = []
                snap.forEach((request) => {
                    const reqId = request.id
                    const req = {
                        ...request.data(),
                        requestId: reqId,
                    }
                    requests.push(req)
                })
                res.status(200).send(requests)
            } else {
                res.status(500).json({ general: 'no requests found' })
            }
        })
}

exports.getfollowers = (req, res) => {
    let username = req.body.username
    db.collection('follows')
        .where('followed', '==', username)
        .get()
        .then((data) => {
            if (data.size > 0) {
                let followers = []
                data.forEach((doc) => {
                    followers.push(doc.data().follow)
                })
                db.collection('Users')
                    .where('username', 'in', followers)
                    .get()
                    .then((snapshot) => {
                        let followersData = []
                        snapshot.forEach((user) => {
                            followersData.push(user.data())
                        })
                        return res.status(200).send(followersData)
                    })
                    .catch((e) => {
                        res.status(500).send(e)
                    })
            } else {
                res.status(201).json({ error: 'pas de followers' })
            }
        })
        .catch((e) => {
            res.status(500).send(e)
        })
}
exports.getOnlineUsers = (req, res) => {
    console.log(req.body.username)
    const username = req.body.username
    db.collection('follows')
        .where('follow', '==', username)
        .get()
        .then((snap) => {
            if (snap.size > 0) {
                let following = []
                snap.forEach((follow) => {
                    following.push(follow.data().followed)
                })
                fire.firestore()
                    .collection('Users')
                    .where('username', 'in', following)
                    .where('isonline', '==', true)
                    .get()
                    .then((snapshot) => {
                        if (snapshot.size > 0) {
                            let onlineFriends = []
                            snapshot.forEach((users) => {
                                let friend = { username: users.data().username, imageUrl: users.data().imageUrl }
                                onlineFriends.push(friend)
                                console.log(onlineFriends)
                                res.status(200).send(onlineFriends)
                            })
                        } else {
                            res.status(500).json({ nousers: 'no users found' })
                        }
                    })
                    .catch((e) => {
                        console.log(e)
                    })
            }
        })
}
