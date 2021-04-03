import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { commentOnPost } from '../Redux/Actions/postAction'
import {Link} from 'react-router-dom'

export default function Comments(props) {
    const [body, setBody] = useState('')
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    const postId = props.postId
    const comments=props.comments
   

    function onCreateComment(e) {
        e.preventDefault()
        const comment = {
            username:user.credentials.username,
            body,
            postId,
        }
        if(body!=''){
            commentOnPost(dispatch, comment)
            setBody('')

        }
       
    }

    return (
        <div>
            <div className='md:mx-auto w-full h-auto  rounded'>
            <div className=' w-full '>
            <form> 
                 <input
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                    type='text'
                    className='block w-full text-sm rounded-md mx-auto'
                    placeholder='commenter .'
                    id='comment_content'
                />

                <button onClick={onCreateComment} className=''>   </button>
                </form>
                </div>
            </div>
            <div />
            {typeof(comments) != "undefined"?
            
            
            comments.map((comment) => {
                return (
                    <div id='task-comments' className='  mx-auto  border-2 border-gray-200 shadow rounded'>
                        <div className='bg-white rounded-lg   flex flex-col justify-center items-center md:items-start  w-full  '>
                            <div className='flex flex-row justify-center mr-2'>
                                <img
                                    alt='avatar'
                                    width='48'
                                    height='48'
                                    className='rounded-full w-6 h-6 mr-4 shadow-lg '
                                    src='https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png'
                                />
                                <h3 className='text-blue-600 font-semibold text-l text-center md:text-left '><Link to={{ pathname: `/profilUser/${user.credentials.uid}`, state: { username:user.credentials.username} }}  role='menuitem'>
                            @{comment.username}
                        </Link></h3>
                            </div>

                            <p className='text-gray-900 text-l pl-12 py-2 md:text-left '>{comment.body}.</p>
                        </div>
                    </div>
                )
            })
        :null}
        </div>
    )
}
