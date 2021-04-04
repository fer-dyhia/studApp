import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from './screen/header.js'
import Milieu from './screen/milieu'
import Gauche from './screen/gauche'
import Coverimg from '../img/nature.jpg'
import { getUserDetails } from '../Redux/Actions/dataAction.js'
import { getFollowers } from '../Redux/Actions/userActions'
import { GetAuthUser } from '../Redux/Actions/authUser'

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
        
        <div className='bg-gray-200 '>
            {infos.selectedUser!=null?
            <div>
                <Header cover={Coverimg} img={infos.selectedUser.user.imageUrl} username={infos.selectedUser.user.username} name={infos.selectedUser.user.displayName} />

<div className='grid grid-cols-3 '>
    <div className='bg-white'>
        <Gauche info={infos.selectedUser.user} followers={infos.selectedUser.followers} />
    </div>
    
    <div className='col-span-2'>
    <Milieu post={infos.selectedUser.posts} />
    </div>
</div>
            </div>
             :null}
           
        </div>
    )
}
