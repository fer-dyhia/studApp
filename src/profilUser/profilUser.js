import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from './screen/header.js'
import Milieu from './screen/milieu'
import Gauche from './screen/gauche'
import Coverimg from '../img/nature.jpg'
import { getUserDetails } from '../Redux/Actions/dataAction.js'
import { getFollowers } from '../Redux/Actions/userActions'
import { GetAuthUser } from '../Redux/Actions/authUser'
import Post1 from '../filActualite/post1.js'
export default function ProfilUser(props) {
    

    const dispatch = useDispatch()
    const infos = useSelector((state) => state.infos)
    const User = useSelector((state) => state.user)
    
    useEffect(() => {   
        let user={username:props.location.state.username}
          getUserDetails(dispatch,user)
    }
          ,[window.location])
    return (
        
        <div className=''>
        {infos.selectedUser!=null?

    <div className=' w-full h-screen'>
    <Post1/>
        <div>
            <Header cover={Coverimg}
             img={infos.selectedUser.user.imageUrl}
              name={infos.selectedUser.user.displayName} />

            <div className='grid grid-col-3 md:grid-cols-3 gap-5  mx-auto container max-w-6xl p-4 h-screen'>
                <div className='h-0 md:h-auto md:w-full col-span-1  shadow-inner  invisible md:visible'>
                    <Gauche info={infos.selectedUser.user} followers={infos.selectedUser.followers} />
                </div>
                
                <div className='col-span-1 md:col-span-2 shadow-2xl flex items-centre justify-center w-full'>
                <Milieu post={infos.selectedUser.posts} />
                </div>
            </div>
        </div>
    </div>
         :null}
       
    </div>
    )
}
