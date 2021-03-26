const { admin, db } = require("./admin");

exports.isAuth = (req, res, next) => {
  let idToken;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer ')
  ) {
    idToken = req.headers.authorization.split('Bearer ')[1];
    console.log(idToken)
  } else {
    console.error('No token found');
    return res.status(403).json({ error: 'Unauthorized' });
  }
  admin
    .auth()
    .verifyIdToken(idToken)
    .then((data) => {
      //req.user = data;
      console.log ("yes");

      const snap= db
        .collection("Users")
        .where("uid", "==", req.user.uid)
        .limit(1)
        .get();
        console.log(snap)
    }).catch((e) => {
      console.log(e)
    })
    /*.then((user) => {
      console.log("je ne comprends pas")
      console.log(user.docs[0].data())
      req.user.username = user.docs[0].data().username;
      
      return next();
    })
    .catch((e) => {
      console.log("merde")
      res.status(500).send(e);
    });*/
};
