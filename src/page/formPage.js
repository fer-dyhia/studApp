import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CreatePages } from '../Redux/Actions/pageAction'
import { useHistory } from 'react-router'
export default function Formpage() {
    const [namePage, setNamePage] = useState('')
    const data = useSelector((state) => state.data)
    const user = useSelector((state) => state.user)
    const history = useHistory()
    const dispatch = useDispatch()

    function onCreatePage() {
        const Page = {
            pageName: namePage,
            owner: user.credentials.username,
        }

        CreatePages(Page, history, dispatch)
    }

    return (
        <div className='container sm:container ml-20 my-2 '>
            <div className='h-full md-pt-8 border-opacity-5 border-solid md:border-dotted  absolute grid justify-center   container max-w-lg mx-center items-center bg-gray-50 rounded-lg '>
                <div className='items-center font-serif text-5xl  '>
                    <h1> creation d'une page </h1>
                </div>

                <div className='text-center'>
                    <input onChange={(e) => setNamePage(e.target.value)} className='rounded-lg w-full' type='text' name='name' id='name' placeholder='nom de la page' required />
                </div>

                <div className='text-center'></div>
                <div className='text-center'></div>
                <button
                    onClick={onCreatePage}
                    className='bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 font-serif  h-10 ...'>
                    crée la page
                </button>
            </div>
        </div>
    )
}