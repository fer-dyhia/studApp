//const { ref } = require("firebase-functions/lib/providers/database");
const { admin, db } = require("../Util/admin");

exports.sendMessage = (req, res) => {
  const conv1 = [req.body.accountName2, req.body.accountName1].join(" ");
  const conv2 = [req.body.accountName1, req.body.accountName2].join(" ");
  const message = req.body.message;

  db.collection("Conversations")
    .where("convId", "in", [conv1, conv2])
    .limit(1)
    .get()
    .then((snapshot) => {
      let docId = "";
      if (snapshot.size > 0) {
        snapshot.forEach((doc) => {
          docId = doc.id;
        });
        db.collection("Conversations")
          .doc(docId)
          .collection("messages")
          .add({
            sourceName: req.body.accountName1,
            creatAt: new Date().toISOString(),
            body: message,
            seen: false,
          })
          .then(() => {
            db.collection("Conversations")
              .doc(docId)
              .update({
                LastMsg: {
                  sourceName: req.body.accountName1,
                  creatAt: new Date().toISOString(),
                  body: message,
                  seen: false,
                },
                LastUpdate: new Date().toISOString(),
              });
            res.status(200).json({ success: " message envoyé" });
          });
      } else {
        const ConvInfo = {
          convId: conv1,
          Users: [req.body.accountName1, req.body.accountName2],
          //Images:[req.body.imageUrl1,req.body.imageUrl2] ,
          LastMsg: {
            sourceName: req.body.accountName1,
            creatAt: new Date().toISOString(),
            body: message,
            seen: false,
          },

          creatAt: new Date().toDateString(),
          LastUpdate: new Date().toISOString(),
        };

        db.collection("Conversations")
          .doc(conv1)
          .set(ConvInfo)
          .then(() => {
            db.collection("Conversations")
              .doc(conv1)
              .collection("messages")
              .add({
                sourceName: req.body.accountName1,
                creatAt: new Date().toISOString(),
                body: message,
                seen: false,
                //imageUrl:req.body.imageUrl
              })
              .then(() => {
                res.status(200).json({ success: " message envoyé" });
              });
          })
          .catch((e) => {
            res.status(500).send("something wrong");
          });
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

exports.getConversations = (req, res) => {
  let conversations = [];
  db.collection("Conversations")
    .where("Users", "array-contains", req.body.username)
    .get()
    .then((snap) => {
      if (snap.size > 0) {
        snap.forEach((doc) => {
          conversations.push(doc.data());
        });
        return res.status(200).send(conversations);
      } else {
        return res.status(201).json({ general: "pas de conversations" });
      }
    })
    .catch((e) => {
      res.status(500).send(e);
    });
};

exports.MessageUser = (req, res) => {
  const convId = req.body.convId;
  const message = {
    body: req.body.body,
    sourceName: req.body.sourceName,
    imageUrl: req.body.imageUrl,
    creatAt: new Date().toISOString(),
    seen: false,
  };
  db.collection("Conversations")
    .doc(convId)
    .collection("messages")
    .add(message)
    .then((doc) => {
      db.collection("Conversations")
        .doc(convId)
        .update({
          LastMsg: {
            sourceName: req.body.sourceName,
            creatAt: new Date().toISOString(),
            body: req.body.body,
            seen: false,
          },
          LastUpdate: new Date().toISOString(),
        })
        .then(() => {
          res.status(200).json({ general: "message envoyé" });
        });
    })
    .catch((e) => {
      res.status(500).json({ error: "something went wrong" });
    });
};

exports.ReadMsg = (req, res) => {
  const convId = req.body.convId;
  const username = req.body.username;
  db.collection("Conversations")
    .doc(convId)
    .collection("messages")
    .where("sourceName", "!=", username)
    .get()
    .then((doc) => {
      if (doc.size > 0) {
        doc.forEach((snap) => {
          snap.ref.update({ seen: true });
        });
        db.collection("Conversations")
          .doc(convId)
          .get()
          .then((doc) => {
            if (doc.data().LastMsg.sourceName != username) {
              doc.ref.update({ "LastMsg.seen": true });
            }
            res.status(200).json({ succes: "message lu" });
          });
      }
    })
    .catch((e) => {
      res.status(500).send(e);
    });
};

