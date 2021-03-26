import React from 'react'
import div from '../img/div.png'
import savoir from '../img/savoir.png'
import social from '../img/social.png'

const dash2 = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 p-8 md:p-24' id='dash2'>
            
           <div className='grid grid-cols-2 gap-2 md:grid-cols-1 shadow-lg transform translate-y-0 hover:-skew-y-6 duration-300 '>
                <div className=' flex items-center justify-center '>
                    <img src={div} alt='divertissement'  className='w-full h-52 md:h-full '  />
                </div>
                <div className='mx-auto font-akaya  '>
                    <p className='p-8 md:p-12 text-xl md:text-2xl '>
                    Vous voulez faire de nouvelles connaissances, discuter avec vos amis étudiants et être le premier informé des nouveautés qu'il y a au campus, pas de soucis 
                        StudApp est là pour vous !!
                    </p>
                </div>
            </div>
            
            <div className='grid grid-cols-2 gap-2 md:grid-cols-1 shadow-lg transform translate-y-0 hover:-skew-y-6 duration-300 '>
                <div className=' flex items-center justify-center '>
                    <img src={savoir} alt='savoir' className='w-full h-52 md:h-full ' />
                </div>
                <div className='mx-auto  font-akaya   '>
                    <p className='p-8 md:p-12 text-xl md:text-2xl'>
                    Vous êtes étudiant et vous voulez simplement vous amuser ? Quoi de mieux que de vous retrouver avec des gens qui ont le même statut que vous, c'est devenu possible avec StudApp.
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2 md:grid-cols-1 shadow-lg transform translate-y-0 hover:-skew-y-6  duration-300 '>
                <div className=' flex items-center justify-center'>
                    <img src={social} alt='social' className='w-full h-52 md:h-full ' />
                </div>      
                <div className='mx-auto font-akaya   '>
                    <p className='p-8 md:p-12 text-xl md:text-2xl'>"Quand on partage des richesses on les divise mais quand on partage du savoir on le multiplie " , venez échanger des connaissances sur StudApp</p>
                </div>
            </div>
            
        </div>
    )
}

export default dash2
// #57A873
