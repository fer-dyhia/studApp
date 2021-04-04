import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useSignUp from './useSignUp'
import validation from './validation'
import logo from '../img/logo5.png'
import slogan from '../img/expérience.png'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
//redux
import { signUpUser } from '../Redux/Actions/authUser'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

const SignUp = ({ submitForm }) => {
    const [Errors,setErrors]=useState([])
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [username, setUsername] = useState('')

    const dispatch = useDispatch()
    const history = useHistory()

    const onSubmit = (e) => {
        e.preventDefault()
        const user = {
            firstname: firstname,
            lastname: lastname,
            username: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
        }
        const errors = validation(user);
        setErrors(errors)
        if(errors.length<0){
            signUpUser(user, history, dispatch)


        }


        
    }

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gray-200'>
        <div className='bg-white p-4 rounded-lg  shadow-xl '>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                
                <div className='flex flex-col  items-center justify-center h-full  pb-16 md:pb-0 md:pt-16 pl-4 border-b-4 md:border-b-0 border-r-0 md:border-r-4 ' >  
                    <img src={logo} alt='' className='w-60 md:w-52 '/>
                    <img src={slogan} alt=''className='md:w-90 h-0 md:h-auto invisible md:visible ' />
                </div>
   
                <div>
                    <div className='flex justify-center items-center text-gray-100 text-4xl'>
                        <h2 className='pb-12 text-4xl text-gray-900'> Inscrivez vous !  </h2>
                    </div>
                    <div>
                        <div className='grid grid-cols-2 space-x-4'>
                            <div className=' bg-white flex space-x-4 justify-center items-center border border-white p-2 rounded-lg'>
                                <FcGoogle size={20} />
                                <button className='text-gray-900 focus:outline-none font-mono text-xl  '>
                                    <span>Google</span>
                                </button>
                            </div>
                            <div className='bg-white flex space-x-4 text-blue-800 justify-center items-center border  border-white p-2 rounded-lg'>
                                <FaFacebook size={20} />
                                <button className='text-gray-900 focus:outline-none font-mono text-xl  '>
                                    <span>Facebook</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <form>
                        <div className=' p-6 flex items-center justify-center text-gray-600 text-2xl '>Saisissez vos Informations</div>

                        <div className='grid grid-rows-2 gap-4 text-gray-900'>
                            <div className='grid grid-cols-2 gap-4'>
                                <div className='p-2'>
                                    <input
                                        className='w-full p-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500'
                                        id='firstN'
                                        type='firstN'
                                        name='firstN'
                                        placeholder='Nom'
                                        onChange={(e) => {
                                            setFirstName(e.target.value)
                                        }}
                                    />
                                    {Errors.firstN && <p className='text-red-500'>{Errors.firstN}</p>}
                                </div>

                                <div className='p-2'>
                                    <input
                                        className='w-full  pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500'
                                        id='lastN'
                                        type='lastN'
                                        name='lastN'
                                        placeholder='Prénom'
                                        onChange={(e) => {
                                            setLastName(e.target.value)
                                        }}
                                    />
                                    {Errors.lastN && <p className='text-red-500'>{Errors.lastN}</p>}
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-4'>
                                <div className='p-2'>
                                    <input
                                        className='w-full  pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500'
                                        id='email'
                                        type='email'
                                        name='email'
                                        placeholder='Email'
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                        }}
                                    />
                                    {Errors.email && <p className='text-red-500'>{Errors.email}</p>}
                                </div>
                                <div className='p-2'>
                                    <input
                                        className='w-full  pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500'
                                        id='pseudo'
                                        type='pseudo'
                                        name='pseudo'
                                        placeholder='Pseudo'
                                        onChange={(e) => {
                                            setUsername(e.target.value)
                                        }}
                                    />
                                    {Errors.email && <p className='text-red-500'>{Errors.email}</p>}
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-4'>
                                <div className='p-2'>
                                    <input
                                        className='w-full  pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500'
                                        id='password'
                                        type='password'
                                        name='password'
                                        placeholder='Mot de passe'
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                        }}
                                    />
                                    {Errors.password && <p className='text-red-500'>{Errors.password}</p>}
                                </div>
                                <div className='p-2'>
                                    <input
                                        className='w-full  pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500'
                                        id='password2'
                                        type='password'
                                        name='password2'
                                        placeholder='Confirmation Mot de passe'
                                        onChange={(e) => {
                                            setConfirmPassword(e.target.value)
                                        }}
                                    />
                                    {Errors.password2 && <p className='text-red-500'>{Errors.password2}</p>}
                                </div>
                            </div>
                        </div>
                        <div className='p-4 flex flex-col-reverse items-end  '>
                        <span className='p-2 text-blue-500 font-sans text-xl hover:underline hover:text-blue-600  '> 
                            <Link to={'/signin'}> J´ai déjà un compte</Link>
                            </span>
                            <button onClick={onSubmit} className='bg-blue-500 focus:outline-none hover:bg-yellow-500 text-gray-100  hover:text-white font-bold py-2 px-8 rounded-lg' type='submit'>
                                S´inscrire 
                            </button>
                            
                            {/* <ul>
                                <li className='p-2 text-gray-900 font-sans text-xl hover:underline hover:text-blue-600'>
                                    <Link to={'/signin'}> J´ai déjà un compte</Link>
                                </li>
                            </ul> */}
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    </div>
    )
}

export default SignUp

