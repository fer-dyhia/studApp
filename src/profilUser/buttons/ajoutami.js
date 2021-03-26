import React, { useState } from 'react'

import { BrowserRouter, Link, Route } from 'react-router-dom'
import { IoIosPersonAdd } from 'react-icons/io'
import { BsFillPersonCheckFill } from 'react-icons/bs'

const AjoutAmi = () => {

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
                // onClick={() => {
                //     <div class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-3xl bg-gradient-to-t from-blue-500 to-white hover:bg-gradient-to-t hover:from-blue-600 hover:to-blue-100 text-white text-4xl">
                //         {setInfos.icon}=<BsFillPersonCheckFill />
                //     </div>
                // }}
                className="flex flex-row shadow-sm rounded-lg">
                <div class="flex items-center justify-center flex-shrink-0 h-10 w-10 md:h-12 md:w-12 rounded-3xl bg-blue-500 hover:bg-blue-600 text-white text-3xl">
                    <IoIosPersonAdd />
                </div>
            </button>

        </div>
    )
}

export default AjoutAmi