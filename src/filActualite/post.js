import React ,{useEffect} from 'react'
import Post1 from './post1'
import Post2 from './post2'
import Post3 from './post3'
import Post4 from './Post4'
import { Link ,useHistory} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {getSuggestedUsers} from '../Redux/Actions/dataAction'


export default function Post() {
;    //console.log(User.credentials.credentials.username)
   
    return (
        <div className=''>
            <Post1 />

            <div className='grid grid-col-3 md:grid-cols-5 pt-20 pl-12 pr-12 h-screen'>
                <div className=' h-0 md:h-auto md:w-full shadow-inner col-span-0 invisible md:visible'>
                    <Post2 />
                </div>
                <div className='col-span-1 md:col-span-3 bg-white shadow-2xl'>
                    <Post3 />
                </div>
                <div className=' h-0 md:h-auto md:w-full shadow-inner invisible md:visible '>
                    <Post4 />
                </div>
            </div>
        </div>
    )
}
