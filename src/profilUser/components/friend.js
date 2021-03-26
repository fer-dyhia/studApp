import React from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'

const Friend = (props) => {
    return (
        <div class='flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow'>
            <button class='flex items-center'>
                <img class='rounded-full h-12 w-12' src={props.img} alt='profilepic2' />
                <div class='ml-2'>
                    <div class='text-sm font-semibold text-gray-600'>{props.nom}</div>
                    <div class='text-sm font-light text-gray-500'>{props.dateaj}</div>
                </div>
            </button>
            {/* <div>
                <button class="bg-blue-200 text-blue-400 hover:bg-blue-300 p-2 rounded-full shadow-md flex justify-center items-center">
                    <BiDotsVerticalRounded/>
                </button>
            </div> */}
        </div>
    )
}

export default Friend
