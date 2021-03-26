import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../Redux/Actions/postAction'

import Publication from './publication'

export default function Thread() {
    const data = useSelector((state) => state.data)
    const User = useSelector((state) => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        let user = { username: User.credentials.username }
        console.log(user.username)

        getPosts(dispatch, user)
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
