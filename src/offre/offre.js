import React from 'react'
import Post1 from '../filActualite/post1.js'
import { AiOutlineUser,AiTwotoneShopping } from "react-icons/ai";

export default function Offre() {
    return (
<div>
<Post1/>
  <div class="md:grid md:grid-cols-5 md:gap-0 pt-20 shadow-xl border h-full w-full  ">
    
      <div class=" sm:px-0 bg-gray-50 col-span-1">
      </div>
      <div class="col-span-3 border-2 shadow-2xl ">
          <div>
              <div class=" h-60 w-full flex justify-center  bg-job bg-cover border-2  rounded-md">

              </div>
              <div class="grid grid-cols-3 gap-4 p-4 text-left  ">

                    <div class="w-full ml-4 ">
                          <label class=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                            type d'offre 
                          </label>
                          <div class="relative">
                            <select class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3  px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                              <option>Emploi</option>
                              <option>Stage</option>

                            </select>
                          </div>
                    </div>
                    <div class="w-full ml-4">
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                        Domaine
                      </label>
                      <input class=" appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="Informatique"/>
                        </div>
                    <div class="w-full  mt-7">
                      <button type="submit" class="inline-flex object-left justify-center ml-8 py-2 px-4 shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:-translate-y-1 hover:scale-110 ">
                        recherche 
                            </button>
                    </div>

              </div> 
          </div>

    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6 ">

<div class="static flex items-stretch ..">

<textarea type="text"
          placeholder="Créer un évenement"
          class="shadow-md rounded-lg w-5/6 h-24 resize-none" /> 
              <div class="inline-block ...">
            <button type="submit" class="ml-4 mt-4 inline-flex object-left justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:-translate-y-1 hover:scale-110">
                valider
                    </button>
              </div>

           </div>
           </div>
      <div class='shadow-md bg-white p-4 m-4'>
        <div class='flex flex-direction colomn'>
              <div><img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://www.lecoindesentrepreneurs.fr/wp-content/uploads/2019/12/Communication-dentreprise.png" alt=""/>
              </div>
              <div class="uppercase tracking-wide text-sm text-black font-semibold">
                Offre de stage 
              </div>
          </div>
          <p class="mt-2 text-gray-500">agence de communication cherche des stagiairs, pour plus d´infomation contacter nous</p>
          <a href="#" class="block mt-1 text-lg leading-tight font-medium text-blue-500 hover:underline  flex items-end justify-end">Contacter</a>
      </div>

      <div class='shadow-md bg-white p-4 m-4'>
        <div class='flex flex-direction colomn'>
              <div><img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://actualites-bureaux-commerces.seloger.com/sites/default/files/styles/manual_crop_735x412/public/article/image/boutique-commerce-agorabiz.jpg?itok=YLhru27d&c=f4cdf4b47780422d95ecd85a581b8eec" alt=""/>
              </div>
              <div class="uppercase tracking-wide text-sm text-black font-semibold">
                Offre d´emploie 
              </div>
          </div>
          <p class="mt-2 text-gray-500">Boutique de vente prêt à porter cherche un/une vendeuse, pour plus d´infomation contacter nous</p>
          <a href="#" class="block mt-1 text-lg leading-tight font-medium text-blue-500 hover:underline  flex items-end justify-end">Contacter</a>
      </div>

      <div class='shadow-md bg-white p-4 m-4'>
        <div class='flex flex-direction colomn'>
              <div><img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Logo_Alg%C3%A9rie_T%C3%A9l%C3%A9com.svg/langfr-200px-Logo_Alg%C3%A9rie_T%C3%A9l%C3%A9com.svg.png" alt=""/>
              </div>
              <div class="uppercase tracking-wide text-sm text-black font-semibold">
                Offre de stage 
              </div>
          </div>
          <p class="mt-2 text-gray-500">Algérie telecome annonce que la période d´inscription pour postuler pour faire un stage est ouverte, pour plus d´infomation contacter nous</p>
          <a href="#" class="block mt-1 text-lg leading-tight font-medium text-blue-500 hover:underline  flex items-end justify-end">Contacter</a>
      </div>
  </div>
  </div>
  </div>
    )
}
