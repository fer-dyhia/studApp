import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getOnlineUsers
} from "../../Redux/Actions/userActions";
import Bonline from "../buttons/bonline";

const CardList=(props) => {
    const dispatch =useDispatch()
    const user=useSelector((state) => state.user)
    const infos=useSelector((state) => state.infos)
    const MINUTE_MS = 60000;

useEffect(() => {  
  const interval = setInterval(() => {
    console.log("yes")
    let User = { username: user.credentials.username }
    
    getOnlineUsers(dispatch, User)
  }, MINUTE_MS );

  return () => clearInterval(interval); 
}, [])

const searchConv=(username) => {
  const conv1 = [username, user.credentials.username].join(" ");
  const conv2 = [user.credentials.username, username].join(" ");
//   console.log(conv1)
//   console.log(conv2)
 if (infos.conversations.length >0){
  let index= infos.conversations.findIndex((conv) => 
   
  conv.convId==conv1 |conv.convId==conv2
)
if(index!=-1){
  let convInfo={
      convName:infos.conversations[index].convId,
      username:username,

  }
  props.setConv(convInfo)
}else{
  props.click({name:"",img:{}})
}
}

}
   


    return(
      
        <div class="container flex mx-auto w-full items-center justify-center">
          <div>
          
          </div>
   <ul class="flex flex-col mt-7 bg-white-300 p-4">
   <h2 className="flex-row mb-10 font-semibold hover:text-gray-500 transition duration-500 ease-in-out">Amis en Ligne</h2> 
{ typeof(user.OnlineUsers)!="undefined" ? user.OnlineUsers.length>0 ?user.OnlineUsers.map((online) => {
  
    return(
        <li class="border-gray-400 flex flex-row mb-2" onClick={()=>searchConv(online.username)}>
          <div class="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <div class="flex flex-col rounded-full w-10 h-10 bg-gray-200 justify-center items-center mr-4"><img src={online.imageUrl} alt=""/></div>
            <div class="flex-1 pl-1 mr-16">
              <div class="font-medium flex-col justify-evenly "> {online.username}
              </div>
              
              
            </div>
            
            <div class="text-gray-600 text-xs"><Bonline/></div>
          </div>
        </li>
    )
}):null

:null}
        

        

    </ul>
    
  </div>
    )

}
export default CardList;