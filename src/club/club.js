import React from 'react'
import Post1 from '../filActualite/post1.js'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { AiFillMessage } from 'react-icons/ai'
import info from '../img/info.png'
import pla from '../img/pla.jpg'

export default function Club() {
    return (
    <div>    
      <Post1/>
<div class="grid grid-cols-5 gap-4 md:pt-20 mr-10 ml-10 bg-gray" >
          <div class="max-w-sm rounded overflow-hidden shadow-lg mt-40 h-0 md:h-auto col-span-0 md:col-span-1 invisible md:visible ">
           <div class="font-bold text-xl mb-2">A Propos</div>
             <p class="text-gray-700 text-base">
                        dans ce club on se reuni entre étudiants de universite mouloud mammeri tizi ouzou du département informatique
                      </p>
              <div class="px-6 pt-4 pb-2">
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
              <div class="vacation-card">
                      <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 30" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                        <div class="vacation-card-eyebrow">Archive de Club</div>
                        <div class="vacation-card-title">
                          <a href="/vacations/cancun">Vous trouvés les Photos partagés dans se Club</a>
                        </div>
                        <a href="#" class="block mr-2 mt-1 text-lg leading-tight font-medium text-blue-500  hover:underline  flex items-end justify-end  ">Voir ICI</a>
                      </div>
              </div>

          </div>

   <div class="col-span-5 md:col-span-4 border-2 border-black-500...">
          <div>
              <div class=" h-60 w-full flex justify-center  bg-clubu border-2  bg-cover rounded-md">
              </div>
                  <div class="flex flex-row-reverse space-x-4 space-x-reverse ...">
                      <div>
                        <button type="submit" class="flex items-end justify-end  py-2 px-4 shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:-translate-y-1 hover:scale-110 ">
                        Quitter le Club
                        </button>
                      </div>
                       <div> 
                        <button type="submit" class="flex items-end justify-end  py-2 px-4 shadow-sm text-sm font-medium rounded-md   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:-translate-y-1 hover:scale-110 ">
                        <AiFillMessage className=' text-gray-900 h-4 w-4 md:h-10 md:w-10 transform hover:-translate-y-1 hover:scale-110 focus:outline-none'  />
                        </button>
                      </div>
                      <div>
                        <button type="submit" class="flex items-end justify-end  py-2 px-4 shadow-sm text-sm font-medium rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:-translate-y-1 hover:scale-110 ">
                        <a className=' '>
                       <AiOutlineUsergroupAdd className=' cursor-pointer text-gray-900 h-4 w-4 md:h-10 md:w-10 transform hover:-translate-y-1 hover:scale-110 focus:outline-none'  />
                       </a>
                          
                        </button>
                      </div>
              </div>
            <div class="flex -space-x-1 overflow-hidden">
  <img class="inline-block h-11 w-11 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
  <img class="inline-block h-11 w-11 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
  <img class="inline-block h-11 w-11 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt=""/>
  <img class="inline-block h-11 w-11 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
</div>
<div class="px-4 py-3 bg-gray-50 text-right sm:px-6 ">

<div class="static flex items-stretch ..">

<textarea type="text"
          placeholder="Publier sur le groupe"
          class="shadow-md rounded-lg w-5/6 h-16 resize-none" />
<div class="inline-block ...">
            <button type="submit" class="ml-4 mt-4 inline-flex object-left justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:-translate-y-1 hover:scale-110">
               Publier
                    </button>
              </div>
           </div>
           </div>
           <div class="col-span-2 max-w-lg...">
           <div class="max-w-full bg-white rounded-xl shadow-md overflow-hidden ">
  <div class="md:flex">
    <div class="md:flex-shrink-0">
      <img class="h-48 w-full object-cover md:w-48" src={info} alt=""/>
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Club informatique</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">dernière nouvelle du département informatique </a>
      <p class="mt-2 text-gray-500">pulication de Club </p>
    </div>
  </div></div>
  <div class="max-w-full bg-white rounded-xl shadow-md overflow-hidden ">
  <div class="md:flex">
    <div class="md:flex-shrink-0">
      <img class="h-48 w-full object-cover md:w-48" src={pla} alt=""/>
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Club informatique</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">les examens de M2 sont prévus au 14/04/2021</a>
      <p class="mt-2 text-gray-500">publication de Club.</p>
    </div>
  </div></div>
  </div>
</div>
      </div>
   <div>
   </div>
   </div>
   </div>
        )
    }
