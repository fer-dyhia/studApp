import {
    DECLINE_REQUEST,
    SEND_FOLLOW_REQUEST,
    ACCEPT_FOLLOW_REQUEST,
    SET_ONLINE_USERS,
    NO_ONLINE_USERS,
    SET_FOLLOWER,
    UNFOLLOW_USER,
    SET_FOLLOW_REQUESTS,
    SET_FOLLOWERS,
} from '../types'
import axios from 'axios'
const { fire } = require('../../init')

export const sendRequest = (dispatch, req) => {
    let request = {
        owner: req.owner,
        destination: req.destination,
    }
    axios.post('/users/FollowUser', request).then((res) => {
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
        .post('/users/acceptFollowRequest', request)
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
        .post('/users/declineFollowRequest', request)
        .then((res) => {
            dispatch({ type: DECLINE_REQUEST })
        })
        .catch((e) => {
            console.log(e)
        })
}

export const getFollowRequest = (dispatch, user) => {
    const username = { username: user }
    axios
        .post('/users/getFollowRequests', username)
        .then((res) => {
            dispatch({ type: SET_FOLLOW_REQUESTS, payload: res.data })
        })
        .catch((e) => {
            console.log(e)
        })
}

export const getOnlineUsers = (dispatch, user) => {
    axios
        .post('/users/getOnlineUsers', user)
        .then((res) => {
            dispatch({ type: SET_ONLINE_USERS, payload: res.data })
        })
        .catch((e) => {
            dispatch({ type: NO_ONLINE_USERS })
            console.log(e)
        })
}

export const getFollowers = (dispatch, user) => {
    axios.post('/users/getfollowers', user).then((res) => {
        dispatch({ type: SET_FOLLOWERS, payload: res.data })
    })
}


