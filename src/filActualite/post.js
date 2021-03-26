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
                <div className='bg-gray-50 border-r-2 border-gray-300 h-0 md:h-auto md:w-full col-span-0 invisible md:visible'>
                    <Post2 />
                </div>
                <div className='col-span-1 md:col-span-3 bg-gray-50'>
                    <Post3 />
                </div>
                <div className='bg-gray-50 border-l-2 border-gray-300 h-0 md:h-auto md:w-full invisible md:visible '>
                    <Post4 />
                </div>
            </div>
        </div>
    )
}
