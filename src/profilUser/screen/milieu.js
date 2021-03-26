import React, { Component } from 'react'
import Publication from '../../filActualite/publication'
import Search from '../buttons/search'
import profilepic from '../../img/me.jpg'

const milieu = (props) => {
    console.log(props.post)
    return (
        <div className='w-full flex flex-col h-full'>
            <ul>
                {props.post.length > 0
                    ? props.post.map((post) => {
                          return <Publication post={post} key={post.postId} />
                      })
                    : null}
            </ul>
        </div>
    )
}

export default milieu
