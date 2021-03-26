import React from 'react'

const Infos = (props) => {
    return (
        <div className=' w-full'>
            <span
                class='ml-8 px-4 w-full py-3 mt-4 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200'
                href='#'>
                Email: {props.information}
            </span>
        </div>
    )
}

export default Infos
