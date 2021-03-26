import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
const footer = () => {
    return (
        <div>
            <div className='flex flex-row  bg-gray-200 h-12'>
                <div className='grid grid-cols-4 items-center mx-auto  gap-4 '>
                    <a href='#'>
                        <FaFacebook size={30} className='text-gray-800 ' />
                    </a>
                    <a href='#'>
                        <FaInstagram size={30} className='text-gray-800' />
                    </a>

                    <a href='#'>
                        <FaLinkedin size={30} className='text-gray-800' />
                    </a>

                    <a href='#'>
                        <FaYoutube size={30} className='text-gray-800' />
                    </a>
                </div>
            </div>

            <p className='flex justify-center bg-gray-800 text-gray-50 p-6 border-t-2 border-gray-100'>© 2021 studApp. All Rights Reserved </p>
        </div>
    )
}

export default footer
