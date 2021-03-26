import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFollowers } from '../Redux/Actions/userActions'
import f2 from '../../img/friend2.jpg'
import Addfriend from '../buttons/newfriends'
import Friend from './friend'

const Friends = () => {
    const data = useSelector((state) => state.data)
    const User = useSelector((state) => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        let user = { username: User.credentials.username }

        getFollowers(dispatch, user)
    }, [])
    console.log(User.followers)
    return (
        <div className='flex justify-center items-center antialiased font-sans bg-gray-200 h-full min-h-screen max-h-full no-scrollbar p-4'>
            <div className='bg-white w-full md:max-w-4xl rounded-lg shadow-lg scrollbar'>
                <div className='h-12 flex justify-between items-center border-b border-gray-200 m-4'>
                    <p className='mx-auto mb-6 text-2xl font-bold text-gray-700'>Liste d'amis</p>
                </div>
                <div className='px-6'>
                    <ul>
                        {User.followers.length > 0
                            ? User.followers.map((follower) => {
                                  return <Friend img={f2} nom={follower.username} follower={follower} />
                              })
                            : null}
                    </ul>
                    {/* <Friend nom='Lva Chir' img={f2} dateaj='Ajouté depuis Mars 2021' /> */}
                </div>
                <Addfriend />
            </div>
        </div>
    )
}
export default Friends
