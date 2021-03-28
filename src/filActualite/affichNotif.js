import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { render} from 'react-dom'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { MdNotifications } from 'react-icons/md'
import { IoChatboxEllipses} from 'react-icons/io5'
import { AiFillHeart } from 'react-icons/ai'
import moment from 'moment'
moment().format()

export default function AffichNotif(props) {
    const [open, setOpen] = React.useState(false)
    const infos =useSelector((state)=>state.infos)
    

    const handleClick = () => {
        setOpen((prev) => !prev)
    }

    const handleClickAway = () => {
        setOpen(false)
    }
   
    let notifNumber=0;
    console.log(infos.notif)
    for(let i=0;i<infos.notif.length;i++){
       console.log(infos.notif[i].read==false) 
        if(infos.notif[i].read==false && infos.notif[i].type != "follow"){
            notifNumber++
        }
    }
    console.log(notifNumber)

    
    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div>
                <button type='button' onClick={handleClick} className=' '>
                    {notifNumber>0?<span className='bg-red-500 origin-top-right absolute right-35 z-40 rounded-full text-sm md:text-base h-4 md:h-5 w-4 md:w-5 flex items-center justify-center '>
                    {notifNumber}
                 </span>:null}
                
                    <a className=' '>
                        <MdNotifications className='text-3xl text-gray-100 h-6 w-6 md:h-10 md:w-10 transform hover:-translate-y-1 hover:scale-110 focus:outline-none'  />
                    </a>
                   
                </button>

                {open ? (
                   <div className='  origin-top-right absolute right-5 mt-2 w-auto py-1  ring-1 ring-black ring-opacity-5 bg-white shadow-lg rounded-lg'>
                   <div className=' flex flex-col '>
                   <div className='grid grid-cols-1  '>
                       
                       
                        <div>
                            {
                                infos.notif.length>0 ? infos.notif.map((notif) => {
                                   return (
                                    <div className=' grid grid-cols-5 justify-center p-2 border-t-2 border-b-2' >
                                    <div className=' col-span-1 ' > 
                                        <img
                                            className=' w-10 h-10 rounded-full object-cover pr-0 '
                                            src=''
                                            alt='avatar'
                                        />
                                    </div> 
                                    <div className=' col-span-3 w-auto h-10' > 

                                        <h2 className='pt-1 pl-4 text-sm text-gray-900'>{notif.type=="comment"?<span>A commenté une de vos publications</span>:notif.type!="follow"?<span>A Aimé une de vos publications</span>:null} </h2>

                                    </div>
                                    <div className=' col-span-1' >
                                        <IoChatboxEllipses  className=' cursor-pointer w-6 h-6 hover:h-10 hover:w-10 text-gray-800 transform hover:-translate-y-1 hover:scale-110 '/>
                                    </div>
                            </div>
                                   ) 
                                })
                           :null }
                         </div>      
            
                   </div>
               </div>
               </div>
                ) : null}
            </div>
        </ClickAwayListener>
    )
}
