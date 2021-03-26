const firebase = require("firebase");
const config = {
  apiKey: "AIzaSyBd00KOjkNayZ6GwVQh13rmVFrooKwmeMc",
  authDomain: "socialapp-c6ffe.firebaseapp.com",
  projectId: "socialapp-c6ffe",
  storageBucket: "socialapp-c6ffe.appspot.com",
  messagingSenderId: "897208819467",
  appId: "1:897208819467:web:e1afc07267c8d8804acc0e",
  measurementId: "G-DFTKTT4V4X"
};
const fire = firebase.default.initializeApp(config);
const auth = firebase.default.auth();

module.exports = { fire, auth };
