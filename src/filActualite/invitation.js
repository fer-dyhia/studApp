import React ,{useEffect}from 'react';
import { useDispatch,useSelector } from 'react-redux'
import {getFollowRequest,acceptRequest,declineRequest} from "../Redux/Actions/userActions"



export default function Invitation(){

  const dispatch=useDispatch()
  const infos= useSelector((state) => state.infos)
  const User = useSelector((state) => state.user)
  const username=User.credentials.username

useEffect(() => {
  getFollowRequest(dispatch,username)}
  
,[])

const accept=(request) => {
console.log(request)
  acceptRequest(dispatch,request)
  
}
const decline=(request) => {
  
  
    declineRequest(dispatch,request.requestId)
    
  }
  
    return(
 
     <div className="rounded-lg min-h-screen space-y-8 bg-green-500 ml-96 mt-14 mr-10 max-w-3xl flex flex-col">
         
      {infos.invitations!=[]?infos.invitations.map((request) => {
        return(<div className="justify-center ml-8 mr-8 mt-8 bg-white rounded-full border-b-4 flex items-center px-2 py-3">
        <img className="w-14 h-14 mr-4 object-cover rounded-full" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
        <div className="mx-3">
          <h2 className="text-xl font-semibold text-gray-800"><a href="#" className="hover:text-green-700" >{request.Owner}</a></h2>
     
          <button className='w-20 h-10 mt-2 mr-6 rounded-full text-green-700 bg-gray-100 border-b-4 border-light-blue-500 hover:bg-gray-700' onClick={() => {accept(request)
            
          }}>Accepter</button>
     
          <button className='w-20 h-10 rounded-full text-green-700 bg-gray-100 border-b-4 border-light-blue-500 hover:bg-gray-700' onClick={() => {decline(request)
            
          }}>Supprimer</button>
     
        </div>
        </div>)
        
      }):null}   
         


   
   
   <div className="justify-center ml-8 mr-8 bg-white rounded-full border-b-4 flex items-center px-2 py-3">
   <img className="mr-4 w-14 h-14 object-cover rounded-full" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
   <div className="mx-3">
     <h2 className="text-xl font-semibold text-gray-800"><a href="#" className="hover:text-green-700" >Belhadi lydia</a></h2>

     <button className='w-20 h-10 mt-2 mr-6 rounded-full text-green-700 bg-gray-100 border-b-4 border-light-blue-500 hover:bg-gray-700'>Accepter</button>

     <button className='w-20 h-10 rounded-full text-green-700 bg-gray-100 border-b-4 border-light-blue-500 hover:bg-gray-700'>Supprimer</button>

   </div>
   </div>



   <div className="justify-center ml-8 mr-8 bg-white rounded-full border-b-4 flex items-center px-2 py-3">
   <img className="w-14 h-14 mr-4 object-cover rounded-full" src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"/>
   <div className="mx-3">
     <h2 className="text-xl font-semibold text-gray-800"><a href="#" className="hover:text-green-700" >Louis Bgt</a></h2>

     <button className='w-20 h-10 mt-2 mr-6 rounded-full text-green-700 bg-gray-100 border-b-4 border-light-blue-500 hover:bg-gray-700'>Accepter</button>

     <button className='w-20 h-10 rounded-full text-green-700 bg-gray-100 border-b-4 border-light-blue-500 hover:bg-gray-700'>Supprimer</button>

   </div>
   </div>

     
 
  </div> 



    )
}