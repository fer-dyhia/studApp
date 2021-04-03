import { info } from 'firebase-functions/lib/logger'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendRequest } from '../Redux/Actions/userActions'
import { getOnlineUsers } from '../Redux/Actions/userActions'
import { getSuggestedUsers } from '../Redux/Actions/dataAction'
import PersonAddSharpIcon from '@material-ui/icons/PersonAddSharp'

export default function Post4() {
    const infos = useSelector((state) => state.infos)
    const User = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const follow = (destination) => {
        console.log(destination)
        const req = {
            owner: User.credentials.username,
            destination: destination,
        }
        sendRequest(dispatch, req)
    }
    console.log(infos)

    useEffect(() => {
        let user = { username: User.credentials.username }
        console.log(user.username)
        getOnlineUsers(dispatch, user)
        getSuggestedUsers(dispatch, user)
    }, [])
    
   
    return (
        <div className='h-full w-full rounded-lg'>
        {/* début partie en ligne */}
        <div className=' pb-2'>
                    <p className='  flex text-right p-4  border-r-4  font-semibold text-sm text-gray-800 flex-auto '>
                        Amis en ligne
                        <ensSharpIcon  className=' text-green-800 ' size={15} /></p>
        </div>
        <div className='grid grid-cols-1'>
             {typeof(User.OnlineUsers)!="undefined" && User.OnlineUsers!=[]? User.OnlineUsers.map((user) => {
             return(<div>
                         <div class=' grid grid-cols-3 justify-center p-4'>
                        <img
                            class='w-10 h-10 rounded-full object-cover'
                            src={user.imageUrl}
                            alt='Profile image'
                        />
                       
                         </div>
                        <div className=' flex justify-center items-center pl-2 text-gray-900'>
                        <h2>{user.username}</h2>
                        <span class=' inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full'></span>
                        </div>
                    </div>)
                    }):null}
         </div>
         {/* fin partie amies en ligne  */}
         {/* début partie suggestion  */}
    <div>                  
        <div  className=' flex relative  '>
            <h1 className='border-r-4 p-4  font-semibold text-sm text-gray-800 flex-auto my-1'>
                Vous connaissez peut être ?</h1>
        </div>  
        <div className=' flex flex-col '>
            <div className='grid grid-cols-1  '>
                {infos.suggestedUsers!=[]?
                infos.suggestedUsers.map( (user) => {
                return(

                        <div className=' grid grid-cols-5 justify-center p-2 border-t-2 border-b-2' >
                                <div className=' col-span-1 ' > 
                                    <img
                                        className=' w-10 h-10 rounded-full object-cover pr-0 '
                                        src={user.imageUrl}
                                        alt='avatar'
                                    />
                                </div> 
                                <div className=' col-span-3 w-10 h-10' > 

                                    <h2 className='pt-1 pl-4 text-sm text-gray-900'>{user.username}</h2>
                                </div>    
                                <div className=' col-span-1'onClick={()=> follow(user.username)} >
                                    <PersonAddSharpIcon  className=' cursor-pointer w-12 h-12 hover:h-16 hover:w-16 text-blue-800 transform hover:-translate-y-1 hover:scale-110 '/>

                                </div>
                        </div>
                         ) } )
                 :null}
            </div>
        </div>
    </div>
    {/* fin partie suggetion  */}
</div>

)
}
