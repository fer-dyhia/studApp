import React from 'react'
import { MdNotifications } from 'react-icons/md'
import { TiMessages } from 'react-icons/ti'
import { FaUserFriends } from 'react-icons/fa'

export default function Card() {
    return (
        <div className='w-full h-12 bg-blue-600 flex flex-row  '>
            <div>logo</div>
            <div>
                <input type='search' class='bg-purple-white shadow rounded border-0 p-3 w-24 h-8' placeholder='Search by name...' />
                <div class='absolute pin-r pin-t mt-3 mr-4 text-purple-lighter'>
                    <svg version='1.1' class='h-4 text-dark' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
        c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
        C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
        S32.459,40,21.983,40z'
                        />
                    </svg>
                </div>
            </div>

            <div className='flex flex-row text-gray-50'>
                <MdNotifications />
                <TiMessages />
                <FaUserFriends />
            </div>
            <div className=''>
                <img
                    class='inline-block h-10 w-10 rounded-full ring-2 ring-white'
                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                />
            </div>
        </div>
    )
}
