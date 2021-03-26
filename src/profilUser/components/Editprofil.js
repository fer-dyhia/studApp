import React, { useState,Component } from 'react';
import {useSelector,useDispatch} from "react-redux"
import {useHistory} from "react-router"


import profilepic from "../../img/me.jpg"

import { BrowserRouter, Link, Route } from 'react-router-dom';
import { updateProfile } from '../../Redux/Actions/authUser';
import { updateProfileImage } from '../../Redux/Actions/dataAction';




const Editprofil = () => {
  const [bio, setBio] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [number, setnumber] = useState("");
  const [adresse, setAdresse] = useState("");
  const [etude, setetude] = useState("");
  const [uploading, setUploading] = useState(false)
  const [image, setImage] = useState('')

  const infos=useSelector((state)=>state.infos)
  const user=useSelector((state)=>state.user)
  const dispatch=useDispatch()
  const history=useHistory()
  const handleSubmit = (e) => {
    e.preventDefault()
    let updateInfos={
      displayName: displayName,
      univer: etude,
      tel:number,
      adresse:adresse,
      bio:bio,
    }

    ;

    updateProfile(dispatch,history,user.credentials.username,updateInfos)
  }
  const onUpload = (e) => {
    const files = Array.from(e.target.files)
    setUploading(true)

    const formData = new FormData()

    files.forEach((file, i) => {
        formData.append(i, file)
    })
    updateProfileImage(history,user.credentials.username, formData)
}
 

  return (
    <div className="py-10 bg-gray-100">
      <div className="mx-auto container max-w-3xl md:w-full shadow-xl">
        <div className="bg-transparent p-2 shadow-lg">
          <div className="max-w-sm mx-auto md:w-full md:mx-0">
            <div className="inline-flex items-center space-x-4">
              <img className="rounded-full ml-6 w-32 h-32 " src={profilepic} />
              <label className="cursor-pointer mt-6">
                <span className="text-base px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-xl" >Importer image
                <input onChange={onUpload} type='file' className="hidden" />
                </span>

              </label>


            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="bg-white space-y-6">
            {/* <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
              <h2 className="md:w-1/3 max-w-sm mx-auto ">Compte</h2>
              <div className="md:w-2/3 max-w-sm mx-auto">
                <label className="text-sm text-gray-400">Email</label>
                <div className="w-full inline-flex border">
                  <div className="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                    <svg fill="none" className="w-6 text-gray-400 mx-auto" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-11/12 focus:outline-none focus:text-gray-600 p-2" placeholder="email@example.com" required />
                </div>
              </div>
            </div> */}

            <hr />
            <div className="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
              <h2 className="md:w-1/3 mx-auto max-w-sm">Informations personnelles</h2>
              <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
                <div>
                  <label className="text-sm text-gray-400">Pseudo</label>
                  <div className="w-full inline-flex border">
                    <div className="w-1/12 pt-2 bg-gray-100">
                      <svg fill="none" className="w-6 text-gray-400 mx-auto" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input name="displayName" type="fullname" value={displayName} onChange={e => setDisplayName(e.target.value)} className="w-11/12 focus:outline-none focus:text-gray-600 p-2" placeholder="Nom complet" />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-400">Téléphone</label>
                  <div className="w-full inline-flex border">
                    <div className="pt-2 w-1/12 bg-gray-100">
                      <svg fill="none" className="w-6 text-gray-400 mx-auto" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input name="number" type="number" value={number} onChange={e => setnumber(e.target.value)} type="text" className="w-11/12 focus:outline-none focus:text-gray-600 p-2" placeholder="12341234" />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-400">études</label>
                  <div className="w-full inline-flex border">
                    <div className="pt-2 w-1/12 bg-gray-100">
                      <svg fill="none" className="w-6 text-gray-400 mx-auto" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    </div>
                    <input name="etude" value={etude} onChange={e => setetude(e.target.value)} type="text" className="w-11/12 focus:outline-none focus:text-gray-600 p-2" placeholder="université " />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-400">Ville</label>
                  <div className="w-full inline-flex border">
                    <div className="pt-2 w-1/12 bg-gray-100">
                      <svg fill="none" className="w-6 text-gray-400 mx-auto" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                    </div>
                    <input name="adresse" value={adresse} onChange={e => setAdresse(e.target.value)} type="text" className="w-11/12 focus:outline-none focus:text-gray-600 p-2" placeholder="T-O" />
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div className="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">
               <h2 className="md:w-4/12 max-w-sm mx-auto">Changer ma Bio</h2>

              <div className="md:w-5/12 w-full md:pl-9 max-w-sm mx-auto space-y-5 md:inline-flex pl-2">
                <div className="w-full inline-flex border-b">
                  {/* <div className="w-1/12 pt-2">
                    <svg fill="none" className="w-6 text-gray-400 mx-auto" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div> */}
                  <textarea   onChange={e => setBio(e.target.value)} className="w-11/12 h-20 scrollbar-none focus:outline-none focus:text-gray-600 p-2 ml-4" placeholder="New" />
                  
                </div>
              </div> 

              <div className="md:w-3/12 md:pl-6">
                
                  <div className="flex  items-center justify-center">
                    <button className="text-white w-36 md:w-32 rounded-md text-center bg-blue-500 hover:bg-blue-600 py-2 px-4  md:float-right">
                      
                    Modifier
                  </button>
                  </div>
                
              </div>
            </div>

            <hr />

          </div>
        </form>
      </div>
    </div>

  )


}
export default Editprofil

