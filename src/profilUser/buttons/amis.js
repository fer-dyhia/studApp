import React from 'react'
import { Link } from 'react-router-dom'
import {FaUserFriends} from 'react-icons/fa'
const Amis = () => {
    return (
        <div class="col-span-1 md:col-span-1 p-6 z-20">
            <Link to={'/friends'}>
                <div class="flex flex-row shadow-sm rounded-lg">
                    <div class="flex items-center justify-center flex-shrink-0 h-10 w-10 md:h-12 md:w-12 rounded-3xl bg-green-500 hover:bg-green-600 text-white text-2xl">

                        <FaUserFriends/>

                    </div>
                </div>
            </Link>
        </div>

    )
}

export default Amis