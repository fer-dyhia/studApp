import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../Redux/Actions/postAction'
import { getFollowers, getNotifications,getInvitations} from '../Redux/Actions/userActions'

import Publication from './publication'

export default function Thread() {
    const data = useSelector((state) => state.data)
    const User = useSelector((state) => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        let user = { username: User.credentials.username }
        console.log(user.username)

        getPosts(dispatch, user)
        getNotifications(dispatch,user)
        getInvitations(dispatch,user)
        getFollowers(dispatch,user)
    }, [])

    return (
        <div className=''>
            <ul>
                {data.posts.length > 0
                    ? data.posts.map((post) => {
                          return <Publication post={post} key={post.postId} />
                      })
                    : null}
            </ul>
        </div>
    )
}
