import React from 'react'
import { Link } from 'react-router-dom'
import Post1 from '../filActualite/post1.js'

export default function pages() {
    return (
        <div className='bg-green-500'>
            <Post1/>
            <div className='border-b-4 shadow-2xl rounded-lg min-h-screen space-y-8 bg-white ml-80 pt-20 mr-20 max-w-3xl flex flex-col'>
                <div>
                    <div className=' justify-center ml-4 mr-4 mt-3  flex items-center px-2 py-3'>
                        <h1 className='leading-normal mr-24 text-4xl'>Mes Pages</h1>
                        <div className='ml-40 rounded-lg  border-b-4 shadow-lg'>
                            <Link to='/formpage'>
                                <button className='w-20 h-10 mt-2  ml-6 mb-2 mr-6 rounded-lg text-black  bg-gray-100 border-b-4  hover:text-red-500'>Créer</button>{' '}
                            </Link>
                            <button className='w-20 h-10 mt-2 mr-6 rounded-lg text-black bg-gray-100 border-b-4  hover:text-red-500'>Invitation</button>
                        </div>
                    </div>
                </div>

                <div className=' rounded-lg ml-4 mr-4  border-b-4 flex items-center px-2 py-2 shadow-lg'>
                    <img
                        className='w-14 h-14 mr-4 object-cover rounded-lg'
                        src='https://www.eduopinions.com/wp-content/uploads/2017/07/Mouloud-Mammeri-de-Tizi-Ouzou-University-UMMTO-logo.png'
                    />
                    <div className='mx-3'>
                        <h2 className='text-xl font-semibold text-gray-800'>
                            <a href='#' className='hover:text-green-700'>
                                Universite de Mouloud Memmari
                            </a>
                        </h2>
                        <button className='w-20 h-10 mt-2 mr-6 rounded-lg  bg-gray-100 border-b-4  text-black hover:text-red-500'>j'aime déja</button>
                        <button className='w-20 h-10 mt-2 mr-6 rounded-lg  bg-gray-100 border-b-4  text-black hover:text-red-500'>Supprimer</button>
                    </div>
                </div>
                <div className='  rounded-lg ml-4 mr-4  border-b-4 flex items-center px-2 py-3 shadow-lg'>
                    <img
                        className='w-14 h-14 mr-4 object-cover rounded-lg'
                        src='https://www.eduopinions.com/wp-content/uploads/2017/07/Mouloud-Mammeri-de-Tizi-Ouzou-University-UMMTO-logo.png'
                    />
                    <div className='mx-3'>
                        <h2 className='text-xl font-semibold text-gray-800'>
                            <a href='#' className='hover:text-green-700'>
                                Département d'informatique.Ummto
                            </a>
                        </h2>
                        <button className='w-20 h-10 mt-2 mr-6 rounded-lg  bg-gray-100 border-b-4  text-black hover:text-red-500'>j'aime déja</button>
                        <button className='w-20 h-10 mt-2 mr-6 rounded-lg  bg-gray-100 border-b-4  text-black hover:text-red-500'>Supprimer</button>
                    </div>
                </div>
                <div className=' rounded-lg ml-4 mr-4  border-b-4 flex items-center px-2 py-3 shadow-lg'>
                    <img className='w-14 h-14 mr-4 object-cover rounded-lg' src='https://th.bing.com/th/id/OIP._EBK0MBFhs31vxdO1sTOjwHaHa?pid=ImgDet&rs=1' />
                    <div className='mx-3'>
                        <h2 className='text-xl font-semibold text-gray-800'>
                            <a href='#' className='hover:text-green-700'>
                                Universite de constantine
                            </a>
                        </h2>
                        <button className='w-20 h-10 mt-2 mr-6 rounded-lg bg-gray-100 border-b-4  text-black hover:text-red-500'>j'aime déja</button>
                        <button className='w-20 h-10 mt-2 mr-6 rounded-lg bg-gray-100 border-b-4  text-black hover:text-red-500'>Supprimer</button>
                    </div>
                </div>
                <div className=' rounded-lg ml-4 mr-4  border-b-4 flex items-center px-2 py-3 shadow-lg'>
                    <img className='w-14 h-14 mr-4 object-cover rounded-lg' src='https://eng.univ-setif.dz/images/logo-ufas/logoUFAS1.png' />
                    <div className='mx-3'>
                        <h2 className='text-xl font-semibold text-gray-800'>
                            <a href='#' className='hover:text-green-700'>
                                Universite de Sétif
                            </a>
                        </h2>
                        <button className='w-20 h-10 mt-2 mr-6 rounded-lg bg-gray-100 border-b-4  text-black hover:text-red-500'>j'aime déja</button>
                        <button className='w-20 h-10 mt-2 mr-6 rounded-lg bg-gray-100 border-b-4  text-black hover:text-red-500'>Supprimer</button>
                    </div>
                </div>
                <div className=' rounded-lg  ml-4 mr-4  border-b-4 flex items-center px-2 py-3 shadow-lg'>
                    <img
                        className='w-14 h-14 mr-4 object-cover rounded-lg'
                        src='https://www.eduopinions.com/wp-content/uploads/2017/07/Mouloud-Mammeri-de-Tizi-Ouzou-University-UMMTO-logo.png'
                    />
                    <div className='mx-3'>
                        <h2 className='text-xl font-semibold text-gray-800'>
                            <a href='#' className='hover:text-green-700'>
                                Département de médecine.Ummto
                            </a>
                        </h2>
                        <button className='w-20 h-10 mt-2 mr-6 rounded-lg  bg-gray-100 border-b-4  text-black hover:text-red-500'>j'aime déja</button>
                        <button className='w-20 h-10 mt-2 mr-6 rounded-lg  bg-gray-100 border-b-4  text-black hover:text-red-500'>Supprimer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}