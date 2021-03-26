import { UPLOADING_IMAGE, UPLOADING_IMAGE_SUCESS, DELETE_IMAGE, SUGGEST_USERS, SET_SELECTED_USER,LOAD_MESSAGES,
    LOAD_SUCESS_MESSAGE,
    LOAD_CONVERSATIONS,
    LOAD_CONVERSATIONS_SUCESS,
    MESSAGE_UPDATE,
    CLEAR_ERRORS, } from '../types'
import axios from 'axios'
const { fire } = require("../../init");

export const UploadImagePost = (dispatch, image) => {
    dispatch({ type: UPLOADING_IMAGE })
    axios
        .post('/uploadImage', image)
        .then((res) => {
            console.log(res.data)
            dispatch({ type: UPLOADING_IMAGE_SUCESS, payload: res.data })
        })
        .catch((err) => console.log(err))
}

export const DeleteImagePost = (dispatch) => {
    axios
        .post('/deleteImage')
        .then(() => {
            dispatch({ type: DELETE_IMAGE })
        })
        .catch((err) => console.log(err))
}

export const getSuggestedUsers = (dispatch, user) => {
    console.log('test')
    axios.post('/users/getSuggestedUsers', user).then((res) => {
        console.log(res.data)
        dispatch({ type: SUGGEST_USERS, payload: res.data })
    })
}

export const getUserDetails = (dispatch, username) => {
    console.log(username.username)
    axios.get(`/users/getUserDetails/${username.username}`).then((res) => {
        console.log("yess")
        dispatch({ type: SET_SELECTED_USER, payload: res.data })
    })
}

export const getRealtimeMessages = (dispatch, userId) => {
    dispatch({ type: LOAD_MESSAGES });
    let convId = userId;
    const unsubscribe = fire
      .firestore()
      .collection("Conversations")
      .doc(convId)
      .collection("messages")
      .orderBy("creatAt", "asc")
      .onSnapshot((snapshot) => {
        let msg = [];
        snapshot.forEach((doc) => {
          if (doc.type != "modified") {
            msg.push(doc.data());
          }
        });
        dispatch({ type: LOAD_SUCESS_MESSAGE, payload: msg });
      });
    return unsubscribe;
  };
  export const getConversations = (dispatch, userId) => {
    const user = userId;
    console.log(user);
    dispatch({ type: LOAD_CONVERSATIONS });
    fire
      .firestore()
      .collection("Conversations")
      .where("Users", "array-contains", user)
      .orderBy("LastUpdate", "desc")
      .onSnapshot((snap) => {
        console.log("changement");
        let conversations = [];
        snap.docChanges().forEach((doc) => {
          console.log(doc.doc.data());
          conversations.push(doc.doc.data());
        });
        dispatch({ type: LOAD_CONVERSATIONS_SUCESS, payload: conversations });
      });
  };
  
  export const MessageUser = (dispatch, Message) => {
    axios
      .post("/users/MessageUser", Message)
      .then((res) => {
        dispatch({ type: MESSAGE_UPDATE });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  
  export const ReadMsg = (dispatch, convId) => {
    console.log("yes");
    axios
      .post("/users/ReadMsg", convId)
      .then(() => {
        dispatch({ type: CLEAR_ERRORS });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  export const SendMessage=(dispatch,conv) => {
      axios.post("/users/sendMessage",conv).then(() => {
          dispatch({type:MESSAGE_UPDATE})
      }).catch((e) => {
          console.log(e)
      })
  }

  export const updateProfileImage=(history,username,image)=>{
      axios.post(`/uploadProfileImage/${username}`,image).then((res) => {
        history.push({
            pathname: `/profilUser/${username}`,
            state: { username: username }
        })
      }) }

  