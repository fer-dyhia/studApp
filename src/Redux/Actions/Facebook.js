// const firebase = require("firebase");
// const admin = require("firebase-admin");
// const provider = new firebase.auth.FacebookAuthProvider();
// provider.setCustomParameters({
//   display: "popup",
// });

// export const signInFacebook = (history, setAuthorizationHeader) => {
//   return firebase.auth.signInWithPopup(provider).then((result) => {
//     var user = result.user;
//     var accessToken = result.credential.accessToken;
//     const name = user.displayName.split("");
//     const username = name[0].concat(name[1]);
//     admin.firestore
//       .collection("Users")
//       .where("Email","==",user.email)
//       .get()
//       .then((snapshot) => {
//         const newuser = {
//           userId: user.uid,
//           email: user.email,
//           firestname: name[0],
//           lastname: name[1],
//           username: username,
//           createdAt: new Date().toISOString(),
//           imageUrl: null,
//           bio: null,
//           website: null,
//           location: user.hometown,
//         };
//         if (snapshot.size>0) {
//           admin.firestore.collection("Users").update(newuser);
//         } else {
//           admin.firestore.collection("Users").doc(username).set(newuser);
//         }
//       })
//       .then(() => {
//         return accessToken;
//       })
//       .catch((error) => {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         var email = error.email;
//         var credential = error.credential;
//         return error;
//       });
//   });
// };
