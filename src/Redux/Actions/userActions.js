import {
    DECLINE_REQUEST,
    SEND_FOLLOW_REQUEST,
    ACCEPT_FOLLOW_REQUEST,
    SET_ONLINE_USERS,
    NO_ONLINE_USERS,
    SET_FOLLOWER,
    UNFOLLOW_USER,
    SET_NOTIFICATIONS,
    SET_FOLLOW_REQUESTS,
    SET_FOLLOWERS,
    MARK_NOTIFICATIONS_READ,
    SET_INVITATIONS
} from '../types'
import axios from 'axios'
import { InfoOutlined } from '@material-ui/icons'
const { fire } = require('../../init')

export const sendRequest = (dispatch, req) => {
    let request = {
        owner: req.owner,
        destination: req.destination,
    }
    axios.post('https://europe-west1-socialapp-c6ffe.cloudfunctions.net/app/users/FollowUser', request).then((res) => {
        dispatch({ type: SEND_FOLLOW_REQUEST, payload: req.destination })
    })
}

export const acceptRequest = (dispatch, req) => {
    let request = {
        requestId: req.requestId,
        Owner: req.Owner,
        destination: req.AccountName,
    }
    console.log(req.Owner)
    axios
        .post('https://europe-west1-socialapp-c6ffe.cloudfunctions.net/app/users/acceptFollowRequest', request)
        .then(() => {
            dispatch({ type: ACCEPT_FOLLOW_REQUEST, payload: request.Owner })
        })
        .catch((e) => {
            console.log(e)
        })
}
export const declineRequest = (dispatch, req) => {
    console.log(req)
    let request = {
        requestId: req,
    }
    console.log(request)
    axios
        .post('https://europe-west1-socialapp-c6ffe.cloudfunctions.net/app/users/declineFollowRequest', request)
        .then(() => {
            dispatch({ type: DECLINE_REQUEST })
        })
        .catch((e) => {
            console.log(e)
        })
}

export const getFollowRequest = (dispatch, user) => {
    const username = { username: user }
    axios
        .post('https://europe-west1-socialapp-c6ffe.cloudfunctions.net/app/users/getFollowRequests', username)
        .then((res) => {
            dispatch({ type: SET_FOLLOW_REQUESTS, payload: res.data })
        })
        .catch((e) => {
            console.log(e)
        })
}

export const getOnlineUsers = (dispatch, user) => {
    axios
        .post('https://europe-west1-socialapp-c6ffe.cloudfunctions.net/app/users/getOnlineUsers', user)
        .then((res) => {
            dispatch({ type: SET_ONLINE_USERS, payload: res.data })
        })
        .catch((e) => {
            dispatch({ type: NO_ONLINE_USERS })
            console.log(e)
        })
}

export const getFollowers = (dispatch, user) => {
    axios.post('https://europe-west1-socialapp-c6ffe.cloudfunctions.net/app/users/getfollowers', user).then((res) => {
        dispatch({ type: SET_FOLLOWERS, payload: res.data })
    })
}

export const getNotifications=(dispatch,user) => {
    console.log(user)
    fire.firestore().collection("notifications").where("recipient","==",user.username).orderBy("createdAt","desc").onSnapshot((snapshot) => {
        let notifications=[]
        snapshot.forEach((notif) => {
            notifications.push(notif.data())
        })
        dispatch({type:SET_NOTIFICATIONS,payload:notifications})
    })
}
export const markNotificationsRead = (dispatch,info)=>{
    axios
      .post('https://europe-west1-socialapp-c6ffe.cloudfunctions.net/app/users/markNotificationsRead',info)
      .then(() => {
          console.log("yess")
        dispatch({
          type: MARK_NOTIFICATIONS_READ
        });
      })
      .catch((err) => console.log(err));
  };

export const getInvitations=(dispatch,user) => {
    console.log(user)
    fire.firestore().collection("followRequest").where("AccountName","==",user.username).orderBy("date","desc").onSnapshot((snapshot) => {
        let invitations=[]
        snapshot.forEach((invit) => {
           invitations.push(invit.data())
        })
        dispatch({type:SET_INVITATIONS,payload:invitations})

    })
}
