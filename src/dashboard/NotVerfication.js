import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import firebase from 'firebase'
import { LoginWithGoogle } from '../Redux/Actions/authUser'
import useSignIn from './useSignIn'
import validation2 from './validation2'
import logo from '../img/logo5.png'
import slogan from '../img/commence.png'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'

//redux
import { loginUser } from '../Redux/Actions/authUser'
import { useDispatch , useSelector} from 'react-redux'
import { useHistory } from 'react-router'

export default function NotVerification() {

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gray-200'>
        <div className=' bg-white p-4 rounded-lg  shadow-xl'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800  '>
                <div className=' flex flex-col items-center h-full pb-16 md:pb-0 md:pt-16 pl-4 border-b-2 md:border-b-0 md:border-r-4 '>
                    <img src={logo} alt=''className=' w-60 md:w-48 ' />
                    <img src={slogan} alt='' className='md:w-80 h-0 md:h-auto invisible md:visible ' />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    
                
                         <div> <p>Votre email n'est pas verifié, veuillez consulté votre boite email</p> </div>

                        <div className='focus:outline-none flex items-start justify-start'>
                        <Link to={'/signin'}> 
                            <button className='p-2 w-40 focus:outline-none bg-blue-500 hover:bg-yellow-500 text-gray-100  hover:text-white font-bold  rounded-lg' type='submit'>
                                Se connecter
                            </button>
                           </Link>
                        </div>

                
                </div>
            </div>
        </div>
    </div>
    )
}