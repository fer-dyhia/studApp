import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { getPagedetails } from '../Redux/Actions/pageAction'
import Updatepage from './updatePage'
import Leftpage from './leftPage'
import Rightpage from './rightPage'
import Bottongroup from './boutonGroupe'
import Post1 from '../filActualite/post1.js'

export default function Page() {
    // const dispatch = useDispatch()
    // const infos = useSelector((state) => state.infos)
    // const user = useSelector((state) => state.user)
    // const page = useSelector((state) => state.page)
    // console.log(props.location.state.PageId)

    // useEffect(() => {
    //     console.log(props.location.state.PageId)
    //     getPagedetails(dispatch, props.location.state.PageId)
    // }, [window.location])

    return (
        <div className='overflow-x-auto  '>
            <Post1/>
    <div className='grid grid-cols-5 gap-4 md:pt-20'>
    <div class="max-w-sm rounded overflow-hidden shadow-lg m-4 h-0 md:h-auto col-span-0 md:col-span-1 invisible md:visible ">
    <div className='bg-white shadow-2xl mb-4  '>
                    <Leftpage />
    </div>
     
    </div>
     <div class="col-span-5 md:col-span-4 ">
         <div className='grid grid-rows-1'>
             <div className='bg-pagebac h-32 bg-cover'></div>
             
                    <div className=' origin-top-right absolute right-30 bottom-25 md:h-24  w-full md:w-full items-center   '>
                            <Bottongroup />
                            <Updatepage />
                    </div>
            <div className='items-center h-full w-full md:items-center'>
                        <Rightpage />
                </div>
         </div>
     </div>
     </div>
     </div>
    )
}