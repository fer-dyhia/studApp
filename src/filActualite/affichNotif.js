import { info } from 'firebase-functions/lib/logger'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendRequest } from '../Redux/Actions/userActions'
import { getOnlineUsers } from '../Redux/Actions/userActions'
import { getSuggestedUsers } from '../Redux/Actions/dataAction'
import PersonAddSharpIcon from '@material-ui/icons/PersonAddSharp'
import { AiOutlineCheck  } from "react-icons/ai"
import { AiOutlineClose } from "react-icons/ai"
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { MdNotifications } from 'react-icons/md'
import { IoChatboxEllipses} from 'react-icons/io5'
import { AiFillHeart } from 'react-icons/ai'
import moment from 'moment'
moment().format()
export default function AffichNotif(props) {
    const [open, setOpen] = React.useState(false)

    const handleClick = () => {
        setOpen((prev) => !prev)
    }

    const handleClickAway = () => {
        setOpen(false)
    }
    const infos = useSelector((state) => state.infos)
    const User = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const follow = (destination) => {
        const req = {
            owner: User.credentials.username,
            destination: destination,
        }
        sendRequest(dispatch, req)
    }
    

    useEffect(() => {
        let user = { username: User.credentials.username }
        console.log(user.username)
        getOnlineUsers(dispatch, user)
        getSuggestedUsers(dispatch, user)
    }, [])
    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div>
                <button type='button' onClick={handleClick} className=' '>
                <span className='bg-red-500 origin-top-right absolute right-35 z-40 rounded-full text-sm md:text-base h-4 md:h-5 w-4 md:w-5 flex items-center justify-center '> 0 </span>
                    <a className=' '>
                        <MdNotifications className='text-3xl text-gray-100 h-6 w-6 md:h-10 md:w-10 transform hover:-translate-y-1 hover:scale-110'  />
                    </a>
                   
                </button>

                {open ? (
                   <div className='  origin-top-right absolute right-5 mt-2 w-auto py-1 bg-gray-100 ring-1 ring-black ring-opacity-5 bg-white shadow-lg rounded-lg'>
                   <div className=' flex flex-col '>
                   <div className='grid grid-cols-1  '>
                       {infos.suggestedUsers!=[]?
                       infos.suggestedUsers.map( (user) => {
                       return(
                        <div>
                               <div className=' grid grid-cols-5 justify-center p-2 border-t-2 border-b-2' >
                                       <div className=' col-span-1 ' > 
                                           <img
                                               className=' w-10 h-10 rounded-full object-cover pr-0 '
                                               src='https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                                               alt='avatar'
                                           />
                                       </div> 
                                       <div className=' col-span-3 w-auto h-10' > 

                                           <h2 className='pt-1 pl-4 text-sm text-gray-900'>a commenté </h2>

                                       </div>
                                       <div className=' col-span-1'onClick={()=> follow(user.username)} >
                                           <IoChatboxEllipses  className=' cursor-pointer w-6 h-6 hover:h-10 hover:w-10 text-gray-800 transform hover:-translate-y-1 hover:scale-110 '/>
                                       </div>
                               </div>
                               <div className=' grid grid-cols-5 justify-center p-2 border-t-2 border-b-2' >
                                       <div className=' col-span-1 ' > 
                                           <img
                                               className=' w-10 h-10 rounded-full object-cover pr-0 '
                                               src='https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                                               alt='avatar'
                                           />
                                       </div> 
                                       <div className=' col-span-3 w-auto h-10' > 
 
                                           <h2 className='pt-1 pl-4 text-sm text-gray-900'>a aimé</h2>
                                       </div>    
                                       <div className=' col-span-1'onClick={()=> follow(user.username)} >
                                           < AiFillHeart className=' cursor-pointer w-6 h-6 hover:h-10 hover:w-10 text-red-800 transform hover:-translate-y-1 hover:scale-110 '/>
                                       </div>

                               </div>
                         </div>      
                                ) } )
                        :null}
                   </div>
               </div>
               </div>
                ) : null}
            </div>
        </ClickAwayListener>
    )
}
