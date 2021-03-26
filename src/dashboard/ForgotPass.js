import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { forgotPassword } from '../Redux/Actions/authUser'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'


const ForgotPass = () => {
    const [email, setEmail] = useState('')

    const dispatch = useDispatch()
    const history = useHistory()

    const onSubmit = (e) => {
        e.preventDefault()
        const user = {
            email: email,
        }

        forgotPassword(user, history, dispatch)
    }
    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
            <div className=' bg-white p-4 rounded-lg  shadow-xl'>
                <h2 className='p-4 font-mono text-2xl font-bold text-blue-700 pb-12'> Mot de passe oublié ! </h2>
                <form>
                    <input
                        className='p-4 w-full  pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500'
                        type='email'
                        name='email'
                        placeholder='Saisissez votre email'
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                    
                     <div className='flex flex-col items-end pt-4 '> 
                    <input onClick={onSubmit} 
                    className=' bg-blue-600 hover:bg-yellow-500 text-gray-100 font-semibold hover:text-gray-50 rounded-full border-2 border-blue-500 hover:border-yellow-500 py-3 px-6 mr-2'
                     type='submit' name='button' />
                       </div>
                    
                </form>
            </div>
        </div>
    )
}

export default ForgotPass
