import { info } from 'firebase-functions/lib/logger'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { sendRequest } from '../Redux/Actions/userActions'
import { getOnlineUsers } from '../Redux/Actions/userActions'
import { getSuggestedUsers } from '../Redux/Actions/dataAction'
import PersonAddSharpIcon from '@material-ui/icons/PersonAddSharp'
import { AiOutlineCheck  } from "react-icons/ai"
import { AiOutlineClose } from "react-icons/ai"
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

export default function AffichInvit() {
    const [open, setOpen] = React.useState(false)
    const infos =useSelector((state)=>state.infos)
    

    const handleClick = () => {
        setOpen((prev) => !prev)
    }

    const handleClickAway = () => {
        setOpen(false)
    }
    
    let invitNumber=0;
    console.log(infos.notif)
    for(let i=0;i<infos.notif.length;i++){
        if(infos.notif[i].type=="follow"&& infos.notif[i].read==false){
            invitNumber++
        }
    }

   
    return (
       <ClickAwayListener onClickAway={handleClickAway}>
       <div>
           <button type='button' onClick={handleClick} className=' '>
           {infos.notif.length>0?<span className='bg-red-500 origin-top-right absolute right-35 z-40 rounded-full text-sm md:text-base h-4 md:h-5 w-4 md:w-5 flex items-center justify-center '>
                    {invitNumber}
                 </span>:null}
               <a className=' '>
               <AiOutlineUsergroupAdd className=' cursor-pointer  text-gray-100 h-6 w-6 md:h-10 md:w-10 transform hover:-translate-y-1 hover:scale-110 focus:outline-none'  />
               </a>
           </button>

           {open ? (
               <div className='  origin-top-right absolute right-20 mt-2 w-auto py-1 ring-1 ring-black ring-opacity-5 bg-white shadow-lg rounded-lg'>
               <div className=' flex flex-col '>
               <div className='grid grid-cols-1  '>
                  
               {infos.invitations.length >0 ? infos.invitations.map((invit) => {
                   
                return(<div className=' grid grid-cols-5 justify-center p-2 border-t-2 border-b-2' >
                    <div className=' col-span-1 ' > 
                        <img
                            className=' w-10 h-10 rounded-full object-cover pr-0 '
                            src='https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                            alt='avatar'
                        />
                        
                        <h4 className="text-gray-500"><Link to={{ pathname:` /invitation` }}  role='menuitem'>{invit.Owner}</Link></h4>
                    </div> 
                    <div className=' col-span-2 w-10 h-10' > 
                       
                    </div>    
                    {/* <div className=' col-span-1' >
                        <AiOutlineCheck className=' cursor-pointer w-6 h-6 hover:h-10 hover:w-10 text-green-800 transform hover:-translate-y-1 hover:scale-110 '/>
                    </div>
                    <div className=' col-span-1' >
                        <AiOutlineClose  className=' cursor-pointer w-6 h-6 hover:h-10 hover:w-10 text-red-800 transform hover:-translate-y-1 hover:scale-110 '/>
                    </div> */}
            </div>)
                   
               }):null}
   
                           
                            ) 
                   
               </div>
           </div>
           </div>
           ) : null}
       </div>
   </ClickAwayListener>   
    )
}
