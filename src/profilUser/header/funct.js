import React from 'react'

import Amis from '../buttons/amis'
import AjoutAmi from '../buttons/ajoutami'
import Modifier from '../buttons/modifier'

const Funct = () => {
    return (
        <div className="absolute z-10 mt-28 p-6 w-full bg-gray-100 bg-opacity-10 h-24 flex justify-end items-center">

            <div className="flex flex-col ">

                <div className="flex flex-row p-6">
                    <AjoutAmi/>

                    <Modifier />
                </div>

            </div>

        </div>
    )
}

export default Funct