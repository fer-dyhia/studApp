import React, {Component} from 'react';
import startup from '../img/startup.png'
import hack from '../img/hack1.jpg'


const rightpage = () => {
    return(
    <div className=" bg-white shadow-2xl w-full items-center h-full">
  

                <div class="static flex m-4 items-stretch justify-center">
                        <textarea type="text"
                        placeholder="exprimez vous "
                        class="shadow-md rounded-lg w-full h-24 resize-none" /> 
                            <div class="inline-block ...">
                            <button type="submit" class="ml-4 mt-4 inline-flex object-left justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:-translate-y-1 hover:scale-110">
                                publier 
                                    </button>
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
          
    </div>
    </div>

    <div class="md:flex mb-4 shadow-xl ">
    <div class="md:flex-shrink-0">
      <img class="h-48 w-full object-cover md:w-48" src={hack}   alt="Man looking at item at a store"/>
    </div>
    <div class="p-2">
    
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
      <label class="ml-20">09-10/04/2021</label>
      </div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-blue hover:underline">hackathon tizi ouzou</a>
      <p class="mt-2 text-gray-500">hackathon TiziOuzou revient pour une 2eme édition. <br/> formulaire d´inscription sera bientôt disponible </p> 
    </div>
    </div>
    </div>

    )}

    export default rightpage;