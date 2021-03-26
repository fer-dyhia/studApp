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
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

export default function Signin({ loginForm }) {
    const { errors } = useSignIn(loginForm, validation2)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [currentUser, setCurrentUser] = useState(null)

    const dispatch = useDispatch()
    const history = useHistory()

    const onSubmit = (e) => {
        e.preventDefault()
        const user = {
            email: email,
            password: password,
        }

        loginUser(user, history, dispatch)
    }

    const signGoogle = (e) => {
        e.preventDefault()
        LoginWithGoogle()
    }

    // useEffect(() => {
    //     firebase.auth.onAuthStateChanged((user) => {
    //         if (user) {
    //             this.setState({ currentUser: user })
    //         } else {
    //             this.setState({ currentUser: false })
    //         }
    //     })
    // })

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gray-200'>
        <div className=' bg-white p-4 rounded-lg  shadow-xl'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800  '>
                <div className=' flex flex-col items-center h-full pb-16 md:pb-0 md:pt-16 pl-4 border-b-2 md:border-b-0 md:border-r-4 '>
                    <img src={logo} alt=''className=' w-60 md:w-48 ' />
                    <img src={slogan} alt='' className='md:w-80 h-0 md:h-auto invisible md:visible ' />
                </div>
                <div className='flex items-center justify-center '>
                    <form>
                        <div className='flex items-center justify-center text-5xl pb-12'>
                            <h1> Connectez-vous </h1>
                        </div>

                        <div className='p-4'>
                            <input
                                className='w-full  pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500 '
                                type='email'
                                name='email'
                                id='email'
                                placeholder='admin@admin.co'
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                            />
                            {errors.email && <p className='text-red-500'>{errors.email}</p>}
                        </div>
                        <div className='p-4'>
                            <input
                                className='w-full pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500'
                                type='password'
                                name='password'
                                id='password'
                                placeholder='mot de passe'
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                            />
                            {errors.password && <p className='text-red-500'>{errors.password}</p>}
                        </div>

                        <div className='flex justify-start items-start p-2 text-blue-500 font-sans text-lg hover:underline hover:text-blue-500'>
                            <Link to={'/forgotPass'}>Mot de passe oublié?</Link>
                        </div>
                        <div className='flex items-start justify-start'>
                            <button onClick={onSubmit} className='p-2 w-40 focus:outline-none bg-blue-500 hover:bg-yellow-500 text-gray-100  hover:text-white font-bold  rounded-lg' type='submit'>
                                Se connecter
                            </button>
                        </div>

                        <div className='p-4 flex items-center justify-center'>
                         <p>Vous n'avez pas de compte?  
                         <Link to={'/signup'} className='text-blue-500 font-sans text-xl hover:underline hover:text-blue-600'>  créer un compte</Link>
                         </p>
                           
                        </div>
                        <div className='flex space-x-4 justify-center items-center'>
                            <div className='bg-white flex space-x-4 justify-center items-center border border-white p-2 rounded-lg'>
                                <FcGoogle size={20} />
                                <button onClick={signGoogle} className='text-gray-900 focus:outline-none font-mono text-xl '>
                                   <span> Google</span>
                                </button>
                            </div>
                            <div className='bg-white text-blue-800 flex space-x-4 text-blue-400 justify-center items-center border  border-white p-2 rounded-lg'>
                                <FaFacebook size={20} />
                                <button className='text-gray-900 focus:outline-none font-mono text-xl  '>
                                    <span>Facebook</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}
