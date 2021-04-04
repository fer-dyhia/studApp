//right bar..
import React from 'react'
import { useSelector } from 'react-redux'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { MdPages } from 'react-icons/md'
import { FaUsers } from 'react-icons/fa'
import { BsBookmarkFill } from 'react-icons/bs'
import { GiBookshelf } from 'react-icons/gi'
import { MdEventAvailable } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function Post2(props) {
    const user=useSelector((state)=>state.user)
    return (
        <div className='flex flex-col overflow-y-auto h-full w-full '>
        <ul className='relative  list-none h-full mt-6'>
        <div className=' flex relative p-4 border-l-4 mb-4 hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110 '>
            <div className='mr-4 my-auto text-indigo-700 '>
                    <BsFillPersonLinesFill size={20}  />
                </div>
                <div className='font-semibold text-sm text-gray-800 flex-auto my-1'>
                    <span>
                        <Link to={{ pathname: `/profilUser/${user.credentials.uid}`, state: { username:user.credentials.username} }}>
                            profil</Link>
                    </span>
                </div>
            </div>
            <div className='   flex relative p-4 border-l-4 mb-4 hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110 '>
                <div className='mr-4 my-auto text-indigo-700 '>
                    <MdPages size={20}  />
                </div>
                <div className='font-semibold text-sm text-gray-800 flex-auto my-1'>
                    <span>
                        <Link to={'/page'}>Pages</Link>
                    </span>
                </div>
            </div>

            <div className='flex relative  p-4 border-l-4  mb-4 hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110'>
                <div className='mr-4 my-auto text-purple-700'>
                    <FaUsers size={20} />
                </div>
                <div className='font-semibold text-sm text-gray-800 flex-auto my-1'>
                    <span>
                        <Link to={'/club'}>Clubs</Link>
                    </span>
                </div>
            </div>

            <div className='flex relative p-4 border-l-4 mb-4 hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110'>
                <div className='mr-4 my-auto text-indego-700'>
                    <BsBookmarkFill size={20} />
                </div>
                <div className='font-semibold text-sm text-gray-800  flex-auto my-1'>
                    <span>
                        <Link to={'/offre'}>Stage et Emploi</Link>
                    </span>
                </div>
            </div>
            <div className=' flex relative p-4 border-l-4 mb-4 hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110'>
                <div className='mr-4 my-auto text-blue-700'>
                    <MdEventAvailable size={20} />
                </div>
                <div className='font-semibold text-sm text-gray-800 flex-auto my-1'>
                    <span>
                        <Link to={'/event'}>Evenements</Link>
                    </span>
                </div>
            </div>
        </ul>
    </div>
    )
}
