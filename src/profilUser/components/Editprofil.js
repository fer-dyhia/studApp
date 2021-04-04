import React, { useState,Component } from 'react';
import {useSelector,useDispatch} from "react-redux"
import {useHistory} from "react-router"
import { TiCamera } from 'react-icons/ti'
import {TiMortarBoard } from 'react-icons/ti'
import { BsFillPersonFill} from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";
import { CgPhone } from "react-icons/cg";
import Post1 from '../../filActualite/post1';


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
    <div className="">
    <Post1/>
 <div className="mx-auto py-20 container max-w-3xl  bg-blue-300 md:w-full shadow-xl">
       <div className="bg-transparent flex  space-x-4 justify-center items-center shadow-lg">
            <div className="inline-flex items-center ">
               <img className="rounded-full w-32 h-32 " src={user.credentials.imageUrl}  />
               <label className="">
                   <span className="text-base px-4 py-2 text-white text-sm rounded-xl" >
                   <TiCamera className='text-gray-900 hover:text-blue-600 h-8 w-8 cursor-pointer transform hover:-translate-y-1 hover:scale-110'/>
                       <input onChange={onUpload} type='file' className="hidden" />  
                   </span>
                 </label>
             </div>
         </div>
   <div>
   <form  onSubmit={handleSubmit}>
       <div className="bg-white grid grid-rows-2 ">
           <div className=" ">
           <h2 className="flex items-center justify-center text-3xl pt-6 pb-6">Informations personnelles</h2>
           <div className="grid grid-col-1 md:grid-cols-2">
             <div className='grid grid-rows-2 gap-4 place-content-center ' >
                <div >
                     <label className="text-sm text-gray-400">Pseudo</label>
                        <div className="w-full inline-flex border">
                               <div className="w-1/12   ">
                                 <BsFillPersonFill className="text-blue-500 w-6 h-12 transform hover:-translate-y-1 hover:scale-110 focus:outline-none"/>
                               </div>
                               <input name="displayName" type="fullname" value={displayName} onChange={e => setDisplayName(e.target.value)} className="w-11/12 rounded-lg border-2 border-gray-500 outline-none focus:border-blue-600 p-2" placeholder="Nom complet" />
                         </div>
                 </div>
                 <div>
                       <label className="text-sm text-gray-400">Téléphone</label>
                         <div className="w-full inline-flex border">
                               <div className="w-1/12">
                                 <CgPhone className="text-green-500 border-none w-6 h-12 transform hover:-translate-y-1 hover:scale-110 focus:outline-none"
                                 />
                               </div>
                               <input name="number" type="number" value={number} onChange={e => setnumber(e.target.value)} type="text" className="w-11/12 rounded-lg focus:outline-none focus:text-gray-600 p-2" placeholder="12341234" />
                         </div>
                   </div>
                 </div>
                 <div className='grid grid-rows-2 gap-4 place-content-center '>
                        <div>
                         <label className="text-sm text-gray-400">études</label>
                         <div className="w-full inline-flex border">
                               <div className="w-1/12">
                                 <TiMortarBoard className="text-blue-800 w-6 h-12 transform hover:-translate-y-1 hover:scale-110 focus:outline-none" />
                               </div>
                               <input name="etude" value={etude} onChange={e => setetude(e.target.value)} type="text" className="w-11/12 rounded-lg focus:outline-none focus:text-gray-600 p-2" placeholder="université " />
                         </div>
                    </div>
                    <div>
                         <label className="text-sm text-gray-400">Ville</label>
                         <div className="w-full inline-flex border">
                               <div className=" w-1/12">
                                 <SiGooglemaps className="text-red-600 w-6 h-12 transform hover:-translate-y-1 hover:scale-110 focus:outline-none" />
                             </div>
                              <input name="adresse" value={adresse} onChange={e => setAdresse(e.target.value)} type="text" className="w-11/12 rounded-lg focus:outline-none focus:text-gray-600 p-2" placeholder="T-O" />
                         </div>
                         </div>
                 </div>
              </div>
           </div >
           <div className=" border-t-2 ">
               <h2 className="flex items-center justify-center text-3xl pt-6 pb-6">La biographie</h2>
               <div className=" w-full max-w-3xl mx-auto space-y-5 md:inline-flex  pr-2">
                 <div className="w-full inline-flex border-b">
                     <textarea   onChange={e => setBio(e.target.value)} 
                     className="w-full h-20 resize-none focus:outline-none rounded-md focus:text-gray-600 p-2 ml-4" placeholder="exprimez vous" />
                 </div>
             </div>
             <div className="flex  items-center justify-center p-10">
               <button className="text-white w-32 md:w-36 rounded-md text-center bg-blue-400 hover:bg-yellow-500 py-2 px-4">
                               Modifier
                   </button>
             </div>

        </div>

     </div>
     </form>
     </div>
   </div>
 </div>

  )


}
export default Editprofil

