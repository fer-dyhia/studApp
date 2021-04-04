import React from 'react'
import { FaGrinHearts } from "react-icons/fa";
import { IoIosHand } from "react-icons/io";
import Post1 from '../filActualite/post1.js'
import hack from '../img/hack1.jpg'
import startup from '../img/startup.png'
import lancement from '../img/lancement.png'

export default function Event() {
    return (

 <div>    
   <Post1/>
  <div class="md:grid md:grid-cols-5 md:gap-0 pt-20 shadow-xl border h-full w-full  ">
    
      <div class=" sm:px-0 bg-gray-50 col-span-1"></div>

      <div class="col-span-3 border-2 shadow-2xl ">
              <div class=" h-60 w-full flex justify-center  bg-event bg-cover border-2  rounded-md">
              </div>

    <div class="m-5 bg-gray-50 text-right  ">

        <div class="static flex items-stretch justify-center">

          <textarea type="text"
          placeholder="Créer un évenement"
          class="shadow-md rounded-lg w-5/6 h-24 resize-none" /> 
              <div class="inline-block ...">
            <button type="submit" class="ml-4 mt-4 inline-flex object-left justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:-translate-y-1 hover:scale-110">
                Créer évenement
                    </button>
              </div>
        </div>
                    
    </div>
           
  <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div class="md:flex mb-4 shadow-xl ">
    <div class="md:flex-shrink-0">
      <img class="h-48 w-full object-cover md:w-48" src={lancement}   alt="Man looking at item at a store"/>
    </div>
    <div class="p-2">
    
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
      <label class="ml-20">09-10/04/2021</label>
      </div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-blue hover:underline">StudApp</a>
     
      <p class="mt-2 text-gray-500">Nous organisons un évenement de lancement du nouveau réseau social StudApp. <br/> Fait par les étudiants pour les étudiants</p>
      <button type="submit" class="inline-flex mt-2 object-left justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-blue-500 hover:bg-blue-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:-translate-y-1 hover:scale-110">
        <FaGrinHearts className='text-yellow-500 mr-2' size={25} /> <span>Intérréssé</span> </button>
      <button type="submit" class="inline-flex mt-2 ml-4 object-left justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-blue-500 hover:bg-blue-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:-translate-y-1 hover:scale-110">
      <IoIosHand className='text-yellow-500 mr-2'size={25} /><span>Participer</span></button>
      
    </div>
    </div>
  <div class="md:flex mb-4 shadow-xl ">
    <div class="md:flex-shrink-0">
      <img class="h-48 w-full object-cover md:w-48" src={hack}   alt="Man looking at item at a store"/>
    </div>
    <div class="p-2">
    
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
      <label class="ml-20">20/06/2021</label>
      </div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-blue hover:underline"> hackathon TiziOuzou</a>
     
      <p class="mt-2 text-gray-500">hackathon TiziOuzou revient pour une 2eme édition. <br/> formulaire d´inscription sera bientôt disponible </p>
      <button type="submit" class="inline-flex mt-2 object-left justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-blue-500 hover:bg-blue-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:-translate-y-1 hover:scale-110">
        <FaGrinHearts className='text-yellow-500 mr-2' size={25} /> <span>Intérréssé</span> </button>
      <button type="submit" class="inline-flex mt-2 ml-4 object-left justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-blue-500 hover:bg-blue-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:-translate-y-1 hover:scale-110">
      <IoIosHand className='text-yellow-500 mr-2'size={25} /><span>Participer</span></button>
      
    </div>
    </div>
    <div class="md:flex mb-4 shadow-xl ">
    <div class="md:flex-shrink-0">
      <img class="h-48 w-full object-cover md:w-48" src={startup}   alt="Man looking at item at a store"/>
    </div>
    <div class="p-2">
    
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
      <label class="ml-20">09-10/04/2021</label>
      </div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-blue hover:underline">DebateClub</a>
     
      <p class="mt-2 text-gray-500">Nous vous invitons à participer au StartupWeekend organisé par techstart en colaboration avec DebateClub</p>
      <button type="submit" class="inline-flex mt-2 object-left justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-blue-500 hover:bg-blue-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:-translate-y-1 hover:scale-110">
        <FaGrinHearts className='text-yellow-500 mr-2 ' size={25} /> <span>Intérréssé</span> </button>
      <button type="submit" class="inline-flex mt-2 ml-4 object-left justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-blue-500 hover:bg-blue-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:-translate-y-1 hover:scale-110">
      <IoIosHand className='text-yellow-500 mr-2'size={25} /><span>Participer</span></button>
      
    </div>
    </div>
  


     </div></div></div>
     </div>
    )
}
