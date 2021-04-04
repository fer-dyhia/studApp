import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

import { AiFillEdit } from 'react-icons/ai'

const Modifier = () => {
    return (
        <div class='col-span-1 sm:col-span-1 md:col-span-1 p-6 z-20'>
        <Link to={'../EditProfil'}>
            <div class='flex flex-row shadow-sm rounded-lg'>
                <div class='flex items-center justify-center flex-shrink-0 h-10 w-10 md:h-12 md:w-12 rounded-3xl bg-green-400 hover:bg-green-500 text-white text-2xl transform hover:-translate-y-1 hover:scale-110 focus:outline-none'>
                    <AiFillEdit />
                </div>
            </div>
        </Link>
    </div>
    )
}

export default Modifier
