const functions = require('firebase-functions')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

//CORS request

app.use(
    cors({
        origin: true,
    })
)

const {
    signUp,
    signIn,
    FollowUser,
    unFollow,
    getfollowingUsers,
    forgotPassword,
    getSuggestedUsers,
    acceptFollowRequest,
    declineFollowRequest,
    getFollowRequest,
    getfollowers,
    getOnlineUsers,
    updateProfile,
} = require('./Handlers/users')

const { sendMessage, MessageUser, ReadMsg } = require("./Handlers/messages");

const {
    NotifLikeData,
    getUserDetails,
    postUserPost,
    suppUserPost,
    getUserPosts,
    getUserPost,
    commentOnPost,
    getAuthenticatedUser,
    getAllPosts,
    getCommentOnPost,
    uploadImage,
    deleteImage,
    likePostUser,
    uploadProfileImage,
} = require('./Handlers/data')

var port = process.env.PORT || 5000

// API endpoints

app.post('/users/signUp', signUp)
app.post('/users/updateProfile/:username', updateProfile)

// app.post('/users/signIn', signIn)
//app.post('/users/forgotPassword', forgotPassword)

// app.post('/users/signGoogle', signGoogle)
app.post('/users/FollowUser', FollowUser)
app.post('/users/getFollowRequests', getFollowRequest)
app.post('/users/acceptFollowRequest', acceptFollowRequest)
app.post('/users/declineFollowRequest', declineFollowRequest)
app.post('/users/unFollow', unFollow) //en cours
app.post('/users/getfollowers', getfollowers)
app.post('/users/getOnlineUsers', getOnlineUsers)
app.post('/users/getSuggestedUsers', getSuggestedUsers)
app.get('/likePostUser', likePostUser)
app.get('/users/getUserDetails/:username', getUserDetails)

app.post("/users/sendMessage", sendMessage);
app.post("/users/MessageUser", MessageUser);
app.post("/users/ReadMsg", ReadMsg);


app.post('/data/getUserPosts', getUserPosts)
app.post('/data/getCommentOnPost', getCommentOnPost)
app.post('/data/getAllPosts', getAllPosts)
app.post('/data/commentOnPost/:postId', commentOnPost)
app.post('/data/likePostUser/:postId', likePostUser)
app.post('/data/getAuthenticatedUser', getAuthenticatedUser)

app.get('/data/getUserPost/:postId', getUserPost)
app.post('/data/postUserPost', postUserPost)
app.post('/data/suppUserPost', suppUserPost)

app.post('/uploadImage', uploadImage)
app.post('/uploadProfileImage/:username', uploadProfileImage)
app.post('/deleteImage', deleteImage)

exports.app = functions.https.onRequest(app)

// exports.createNotificationOnLike = functions
//   .firestore.document('userPosts/{postId}/likes/{id}')
//   .onCreate((snapshot,context) => {
//       console.log("uesss")
//     return db
//       .doc(`/userPosts/${context.params.postId}`)
//       .get()
//       .then((doc) => {
//         if (
//           doc.exists &&
//           doc.data().username !== snapshot.data().username
//         ) {
//           return db.doc(`/notifications/${snapshot.id}`).set({
//             createdAt: new Date().toISOString(),
//             recipient: doc.data().username,
//             sender: snapshot.data().username,
//             type: 'like',
//             read: false,
//             postId: doc.id
//           }).then(() => {
//               console.log("notif")
//           })
//         }
//       })
//       .catch((err) => console.error("erro chef",err));
//   });
// exports.deleteNotificationOnUnLike = functions
//   .region('europe-west1')
//   .firestore.document('userPosts/{postId}/likes/{id}')
//   .onDelete((snapshot) => {
//     return db
//       .doc(`/notifications/${snapshot.id}`)
//       .delete()
//       .catch((err) => {
//         console.error(err);
//         return;
//       });
//   });
// exports.createNotificationOnComment = functions
//   .region('europe-west1')
//   .firestore.document('userPosts/{postId}/comments/{id}}')
//   .onCreate((snapshot,context) => {
//     return db
//       .doc(`/userPosts/${snapshot.data().postId}`)
//       .get()
//       .then((doc) => {
//         if (
//           doc.exists &&
//           doc.data().username !== snapshot.data().username
//         ) {
//           return db.doc(`/notifications/${snapshot.id}`).set({
//             createdAt: new Date().toISOString(),
//             recipient: doc.data().username,
//             sender: snapshot.data().username,
//             type: 'comment',
//             read: false,
//             postId: doc.id
//           });
//         }
//       })
//       .catch((err) => {
//         console.error(err);
//         return;
//       });
//   });

// exports.onUserImageChange = functions
//   .region('europe-west1')
//   .firestore.document('/Users/{username}')
//   .onUpdate((change) => {
//     if (change.before.data().imageUrl !== change.after.data().imageUrl) {
//       console.log('image has changed');
//       const batch = db.batch();
//       return db
//         .collection('userPosts')
//         .where('username', '==', change.before.data().username)
//         .get()
//         .then((data) => {
//           data.forEach((doc) => {
//             const post = db.doc(`/userPosts/${doc.id}`);
//             batch.update(post, { imageUrl: change.after.data().imageUrl });
//           });
//           return batch.commit();
//         });
//     } else return true;
//   });

// exports.onPostDelete = functions
//   .region('europe-west1')
//   .firestore.document('/userPosts/{postId}')
//   .onDelete((snapshot, context) => {
//     const postId = context.params.postId;
//     const batch = db.batch();
//     return db.collection('userPosts').doc(context.params.postId)
//       .collection('comments')
//       .where('postId', '==', postId)
//       .get()
//       .then((data) => {
//         data.forEach((doc) => {
//           batch.delete(db.doc(`/comments/${doc.id}`));
//         });
//         return db.collection('userPosts').doc(context.params.postId)
//           .collection('likes')
//           .where('postId', '==', postId)
//           .get();
//       })
//       .then((data) => {
//         data.forEach((doc) => {
//           batch.delete(db.doc(`/likes/${doc.id}`));
//         });
//         return db
//           .collection('notifications')
//           .where('oostId', '==', postId)
//           .get();
//       })
//       .then((data) => {
//         data.forEach((doc) => {
//           batch.delete(db.doc(`/notifications/${doc.id}`));
//         });
//         return batch.commit();
//       })
//       .catch((err) => console.error(err));
//   });