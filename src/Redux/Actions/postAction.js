import { GET_POST, SUBMIT_POST, DELETE_POST, SUBMIT_COMMENT, COMMENT_POST, LIKE_POST } from '../types'
import axios from 'axios'

export const getPosts = (dispatch, user) => {
    console.log(user)
    axios
        .post(`/data/getAllPosts`, user)
        .then((res) => {
            dispatch({ type: GET_POST, payload: res.data })
        })
        .catch((err) => console.log(err))
}

export const submitPost = (post, user, dispatch) => {
    const Post = {
        username: user.credentials.username,

        body: post.body,
        image: post.image != '' ? post.image : '',
    }
    axios
        .post('/data/postUserPost', Post)
        .then((res) => {
            dispatch({ type: SUBMIT_POST, payload: res.data })
        })
        .catch((err) => console.log(err))
}

export const suppPost = (dispatch, postId) => {
    const post={postId:postId}
    axios
        .post(`/data/suppUserPost`,post)
        .then((res) => {
            console.log("yes monsieur")
            dispatch({ type: DELETE_POST, payload: postId})
        })
        .catch((err) => console.log(err))
}

export const commentOnPost = (dispatch, comment) => {
    let postId = comment.postId
    let User = {
        body: comment.body,
        username: comment.username,
        userImage: 'no',
    }
    console.log(User)
    axios
        .post(`/data/commentOnPost/${postId}`, User)
        .then((res) => {
            dispatch({ type: SUBMIT_COMMENT, payload: res.data })
        })
        .catch((err) => console.log(err))
}
export const LikeOnPost = (dispatch, like) => {
    let postId = like.postId
    let newLike = {
        username: like.username,
        userImage: 'no',
    }
    console.log(newLike)
    console.log(postId)
    axios
        .post(`/data/likePostUser/${postId}`, newLike)
        .then((res) => {
            dispatch({ type: LIKE_POST, payload: res.data })
        })
        .catch((err) => console.log(err))}

export const getCommentOnPost = (dispatch, post) => {
    let id = { postId: post }
    axios
        .post('./data/getCommentOnPost', id)
        .then((res) => {
            let comments = res.data
            dispatch({ type: COMMENT_POST, payload: { comments, post } })
        })
        .catch((e) => {
            console.log(e)
        })
}
