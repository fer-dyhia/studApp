import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendRequest } from '../../Redux/Actions/userActions'

import { BrowserRouter, Link, Route } from 'react-router-dom'
import { IoIosPersonAdd } from 'react-icons/io'
import { BsFillPersonCheckFill } from 'react-icons/bs'

const AjoutAmi = (props) => {
    const infos = useSelector((state) => state.infos)
    const User = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const follow = (destination) => {
        console.log(destination)
        const req = {
            owner: User.credentials.username,
            destination: destination,
        }
        sendRequest(dispatch, req)
    }
    

    const [setInfos] = useState({ icon: <IoIosPersonAdd /> });

    const get_user = (icon) => {

        const added = icon;
        setInfos({
            icon: added
        }
        );
    }
    

    return (
        <div className="col-span-1 sm:col-span-1 md:col-span-1 p-6 z-20">

            <button
                onClick={() => follow(props.username)}
                className="flex flex-row shadow-sm rounded-lg">
                <div class="flex items-center justify-center flex-shrink-0 h-10 w-10 md:h-12 md:w-12 rounded-3xl bg-blue-500 hover:bg-blue-600 text-white text-3xl">
                    <IoIosPersonAdd />
                </div>
            </button>

        </div>
    )
}

export default AjoutAmi