import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, FORGOT_PASSWORD, LOADING_USER, LOGOUT_USER, SET_UNAUTHENTICATED } from '../types'
import axios from 'axios'
import { getPosts } from './postAction'
import { getOnlineUsers } from './userActions'
import { getSuggestedUsers } from './dataAction'
const { fire } = require('../../init')

export const LoginWithGoogle = () => {
    var provider = new fire.auth.GoogleAuthProvider()
    provider.addScope('email')
    provider.addScope('profile')
    fire.firestore()
        .collection('Users')
        .where('Email', '==', 'sevenzhunter@gmail.com')
        .get()
        .then((snapshot) => {
            console.log(snapshot.size)
            console.log(snapshot)
        })
        .catch((e) => {
            console.log(e)
        })
    fire.auth()
        .signInWithPopup(provider)
        .then((result) => {
            console.log('hello')
            var user = result.user
            var accessToken = result.credential.accessToken
            const name = user.displayName.split(' ')

            const username = name[0].concat(name[1])

            fire.firestore()
                .collection('Users')
                .where('Email', '==', 'sevenzhunter@gmail.com')
                .get()
                .then((snapshot) => {
                    console.log(snapshot.size)
                    const newuser = {
                        userId: user.uid,
                        email: user.email,
                        firestname: name[0],
                        lastname: name[1],
                        username: username,
                        createdAt: new Date().toISOString(),
                        imageUrl: null,
                        bio: null,
                        website: null,
                        location: user.hometown,
                    }
                    if (snapshot.size > 0) {
                        snapshot.forEach((doc) => {
                            const id = doc.id
                            fire.firestore().collection('Users').doc(id).update(newuser)
                        })
                    } else {
                        fire.firestore().collection('Users').doc(username).set(newuser)
                    }
                })
                .then(() => {
                    return accessToken
                })
                .catch((error) => {
                    var errorCode = error.code
                    var errorMessage = error.message
                    var email = error.email
                    var credential = error.credential
                    return error
                })
        })
}

export const signUpUser = (userData, history, dispatch) => {
    dispatch({ type: LOADING_UI })
    axios
        .post('/users/signUp', userData)
        .then((res) => {
            dispatch({ type: CLEAR_ERRORS })
            history.push('/signin')
        })
        .catch((err) => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data,
            })
        })
}

export const loginUser = (userData, history, dispatch) => {
    fire.auth()
        .signInWithEmailAndPassword(userData.email, userData.password)
        .then((data) => {
            fire.firestore()
                .collection('Users')
                .where('uid', '==', data.user.uid)
                .limit(1)
                .get()
                .then((doc) => {
                    doc.forEach((snap) => {
                        snap.ref.update({ isonline: true })
                    })
                })
                .catch((e) => {
                    console.log(e)
                })

            const uid = { uid: data.user.uid }
            console.log(uid)
            dispatch({ type: LOADING_USER })
            axios
                .post('/data/getAuthenticatedUser', uid)
                .then((res) => {
                    console.log('yes')
                    const User = res.data
                    console.log(User)
                    dispatch({
                        type: SET_USER,
                        payload: User,
                    })
                    let user = { username: User.credentials.username }
                    getPosts(dispatch, user)
                    getOnlineUsers(dispatch, user)
                    getSuggestedUsers(dispatch, user)
                })
                .catch((err) => console.log(err))

            history.push('./filActualite')
        })
        .catch((e) => {
            console.error(e)
            dispatch({ type: SET_ERRORS, payload: e.data })
        })
}

// export const loginGoogle = (data) => (dispatch) => {
//     axios
//         .post('/signGoogle', data)
//         .then((res) => {
//             // setAuthorizationHeader(res.data.token);
//             dispatch({ type: CLEAR_ERRORS })
//         })
//         .catch((err) => {
//             dispatch({
//                 type: SET_ERRORS,
//                 payload: err.response.data,
//             })
//         })
// }

// export const  getUserData =  (dispatch,data) => {
//     console.log(data)

//     const uid={id:data}
//     console.log(uid)
//     dispatch({ type: LOADING_USER })
//     axios
//       .post('/data/getAuthenticatedUser',uid)
//       .then((res) => {

//         dispatch({
//           type: SET_USER,
//           payload: res.data
//         });
//         localStorage.setItem("User",JSON.stringify(res.data))
//       })
//       .catch((err) => console.log(err));
//       return;
// };

export const forgotPassword = (userData, history, dispatch) => {
    dispatch({ type: FORGOT_PASSWORD })
    axios
        .post('/users/forgotPassword', userData)
        .then((res) => {
            console.log('yes')
            dispatch({ type: CLEAR_ERRORS })
            // history.push('/')
        })
        .catch((err) => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data,
            })
        })
}
export const GetAuthUser=(dispatch,uid)=>{
    axios
         .post('/data/getAuthenticatedUser', uid)
                .then((res) => {
                    console.log('yes')
                    const User = res.data
                    console.log(User)
                    dispatch({
                        type: SET_USER,
                        payload: User,
                    })}).catch((e) => {
                        console.log(e)
                    })

}
export const updateProfile=(dispatch,history,username,profileDate) => {
    axios.post(`/users/updateProfile/${username}`,profileDate).then((res) => {
        history.push({
            pathname: `/profilUser/${username}`,
            state: { username: username }
        })
    }).catch((e) => {
        console.log(e)
    })
}