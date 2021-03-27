// header
import React, { useEffect, useState } from 'react'

import { AiFillMessage } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import ClickAway from './clickAway'
import { MdPages } from 'react-icons/md'
import { FaUsers } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import AffichInvit from './affichInvit'
import AffichNotif from './affichNotif'
import { Link } from 'react-router-dom'
import { Divider } from '@material-ui/core'

import logo from '../img/logo2.png'
import logor from '../img/logo5.png'

export default function Post1() {
    const User = useSelector((state) => state.user)
    //console.log(User.credentials)
    return (
        <div className='fixed z-50 w-full md:w-full bg-gray-800 shadow-xl border-b-2 border-gray-200 '>
            {(User.loading != null) | true ? (
                <div className='flex flex-row  '>
                    <div className=' flex items-center w-9/12'>
                        <div className='w-0 md:w-1/5 pl-0 md:pl-2 pt-0 md:pt-2  invisible md:visible  cursor-pointer '>
                                <img src={logo} alt='logo'/>
                        </div>
                        <div className='md:w-0 w-1/5 md:pl-0 pl-1 md:pt-0 pt-0 md:h-0 visible md:invisible cursor-pointer  '>
                                <img src={logor} alt='logo'/>
                        </div>
            
                                <div className='pt-1 relative text-gray-800 pl-2 pr-2 md:pl-8 md:pr-8'>
                                    <input className=' border-2 border-gray-400 focus:bg-white bg-gray-50 w-36 md:w-96 h-8 md:h-10 rounded-full ' type='search' name='search' placeholder='Recherche' />
                                    <button type='submit'>
                                        <BiSearch className=' absolute md:mt-4 mt-3 mr-4 md:mr-10 right-0 top-0  '> </BiSearch>
                                    </button>
                                </div>
                  
                    </div>

                    <div className=' flex flex-row space-x-3 justify-center items-center text-gray-100   '>
                        <div className= 'visible md:invisible '>
                            <Link to='/pages'>
                                <MdPages className=' text-gray-100 h-6 w-6 transform hover:-translate-y-1 hover:scale-110 focus:outline-none' />
                            </Link>
                        </div>
                        <div>
                            <Link to='/club' className= 'visible md:invisible '>
                                <FaUsers className=' text-gray-100 h-6 w-6 transform hover:-translate-y-1 hover:scale-110 focus:outline-none'  />
                            </Link>
                        </div>
                        <div>
                            <Link to='/messagerie'>
                                <AiFillMessage className=' text-gray-100 h-6 w-6 md:h-10 md:w-10 transform hover:-translate-y-1 hover:scale-110 focus:outline-none'  />
                            </Link>
                        </div>

                        <div>
                        <AffichInvit/>
                        </div>
                         <div>
                            <AffichNotif  />
                        </div>
                    </div>
                    <div className='flex flex-row pl-4 pb-4 justify-center items-center '>

                        <div>
                            <ClickAway />
                        </div>
                        <div>
                            {User.loading == false ? <h3 className='w-0 md:w-full md:pt-3 md:text-xl text-yellow-400 invisible md:visible'>{User.credentials.username}</h3> : null}
                        </div>

                    </div>
                </div>
            ) : null}
        </div>
    )
}
