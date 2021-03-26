import React, { Component } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Infos from '../components/infos'
import Friend from '../components/friend'

import f2 from '../../img/friend2.jpg'
import f3 from '../../img/friend3.jpg'
import f4 from '../../img/friend4.jpg'
import { Link } from 'react-router-dom'
const dayjs = require('dayjs')


const Gauche = (props) => {
   


    const userData = useSelector((state) => state.user)
    return (
        <div class='flex flex-col   text-gray-700 shadow-lg bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0'>
            <div class='flex justify-center items-center antialiased font-sans h-full max-h-full no-scrollbar p-4'>
                <div class='bg-white w-full md:max-w-4xl rounded-lg shadow-lg scrollbar'>
                    <div class='h-12 flex justify-between items-center border-b border-gray-200 m-4'>
                        <p class='mx-auto mb-6 text-xl font-bold text-gray-700'>Description</p>
                    </div>
                    <div className='pl-3 pr-3 pb-3'>{props.info.bio}</div>
                </div>
            </div>

            <div class='flex justify-center items-center h-full  no-scrollbar p-4   bg-white w-full md:max-w-4xl rounded-lg shadow-lg scrollbar'>
                <p>Date de creation {dayjs(props.info.creatAt).format('DD/MM/YYYY')} </p>
            </div>

            <div class='flex justify-center items-center h-full  no-scrollbar p-4 w-full'>
                <div class='bg-white w-full md:max-w-4xl rounded-lg shadow-lg scrollbar'>
                    <Infos information={props.info.Email} />
                </div>
            </div>

            <div class='flex justify-center items-center h-full max-h-full no-scrollbar p-4'>
                <div class='bg-white w-full md:max-w-4xl rounded-lg shadow-lg scrollbar'>
                    <Link to={'/friends'}>
                        <div class='h-12 flex justify-between items-center border-b border-gray-200 m-4'>
                            <p class='mx-auto mb-6 text-xl font-bold text-gray-700'>Amis</p>
                        </div>
                    </Link>
                    <div class='px-1'>
                        {typeof(userData.followers)!="undefined"? userData.followers.length>0 ?userData.followers.map((follower) => {
                            <Friend nom={follower.username} img={follower.imageUrl} />
                        }) 
                         :<div>No followers</div>:null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gauche
