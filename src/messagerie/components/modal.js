import React from 'react'
import img from '../../img/me.jpg'
import { GrAdd } from 'react-icons/gr'
import Search from './searchP'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const listAddNewConv = () => {
    return (
        <div className='w-56'>
            <div className='ml-2 flex flex-rows space-x-2'>
                <div className='flex justify-center items-center'>
                    <h3>Recherche</h3>
                </div>

                <div>
                    <Search />
                </div>
            </div>

            <ul>
                <li className='mt-4 ml-2 flex flex-cols items-center space-x-10 h-14 w-52   border-b-2 border-gray-400 '>
                    <div>
                        <img alt='profile pic' src={img} className='rounded-full h-8 w-8 flex items-center justify-center' />
                    </div>
                    <div>
                        <h3>Zouina</h3>
                    </div>
                    <div className='transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
                        <GrAdd />
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default listAddNewConv