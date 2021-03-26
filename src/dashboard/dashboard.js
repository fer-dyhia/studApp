import React from 'react'
import { useHistory } from 'react-router-dom'
import logo from '../img/logo2.png'
import slogan from '../img/slogan4.png'

export default function Dashboard() {
    const history = useHistory()
    const hundleClick = () => history.push('/signin')
    const hundleClick2 = () => history.push('/signup')

    return (
        <div className='flex flex-col bg-img md:h-screen h-80  bg-cover bg-center tracking-tight md:tracking-wide'>
            <div className='md:h-full h-80 bg-gray-700 bg-opacity-50'>
                <div className='fixed z-50 w-full md:w-full  bg-gray-800 grid grid-cols-3 gap-4'>
                    <div className='w-1/3 md:w-1/4 col-start-1 col-end-3 pl-2 pt-2 '>
                        <img src={logo} alt='' />
                    </div>
                    <div className='flex flex-row items-center justify-center md:justify-end  font-sans md:font-serif text-xs md:text-sm'  >
                        <div className=' text-gray-100 '>
                            <a className=' pr-4' href='#dash2'>
                                A propos 
                            </a>
                        </div>

                        <div className='p-2'>
                            <button
                                onClick={hundleClick}
                                className='px-2 md:px-3 py-1 md:py-3  bg-blue-500 hover:bg-yellow-500 text-gray-100 font-semibold hover:text-gray-50  border border-transparent hover:border-transparent rounded-full '>
                                Se connecter 
                            </button>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-6 gap-4 text-gray-100 mx-auto '>
                    <div className='col-start-1 col-end-7 mx-auto'>
                        {/* <h1 className=' font-mono text-7xl mx-auto pt-48 text-gray-100'>StudApp</h1> */}
                    </div>
                    <div className='w-3/5 md:w-53/4 mt-14 md:mt-36 col-start-1 col-end-7 mx-auto font'>
                    <img src={slogan} alt='' />
                    </div>
                    <div className='col-start-1 col-end-7 mx-auto md:pt-2 z-0'>
                        <button
                            onClick={hundleClick2}
                            className=' bg-blue-600 hover:bg-blue-500 text-xl md:text-3xl text-gray-100 font-semibold hover:text-gray-50 py-2 px-4 border border-transparent  hover:border-transparent rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 '>
                            Getting started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}