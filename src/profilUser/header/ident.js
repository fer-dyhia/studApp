import React from 'react'

const Ident = (props) => {
    return (
        <div className='absolute w-screen md:h-full flex flex-row'>
            <img src={props.img} className='w-28 h-28 ml-9 mt-0 md:mt-20 rounded-full z-20' />

            <div className='mt-4 md:mt-28 ml-10 z-20 cursor-default'>
                <p className='font-bold text-2xl text-white'>{props.name}</p>

                <p className='text-gray-100'>{props.domain}</p>
            </div>
        </div>
    )
}

export default Ident
