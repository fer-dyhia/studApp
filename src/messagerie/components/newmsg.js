import React,{useState} from "react";
import {useSelector,useDispatch} from 'react-redux'
import SearchP from "../../messagerie/components/searchP";
import Personcomp from "../components/personcomp";
import image1 from "../../img/receiver.jpg";
import image2 from "../../img/receiver.jpg";
import image3 from "../../img/receiver.jpg";
import image4 from "../../img/receiver.jpg";
import image5 from "../../img/receiver.jpg";
import image6 from "../../img/receiver.jpg";
import image7 from "../../img/receiver.jpg";
import { BiMessageAltDetail } from "react-icons/bi";
import {SendMessage} from "../../Redux/Actions/dataAction"
import { PinDropSharp } from "@material-ui/icons";

const Newmsg = (props) => {
  const [username,setUser]=useState("")
  const [userImage,setUserImage]=useState("")
  const [Body,setBody]=useState("")
  const dispatch=useDispatch()
  const infos=useSelector((state) =>state.infos)
  const user=useSelector((state) =>state.user)
  console.log(username)
  const selectUser=(user) => {
    setUser(user.username)
    setUserImage(user.imageUrl)
  }
  const HandleMessage=() => {
    if(Body!=""&& username!=""){
      const conv={
        accountName1:user.credentials.username,
        accountName2:username,
        imageUrl1:user.credentials.imageUrl,
        imageUrl2:userImage,
        message:Body
      }
      SendMessage(dispatch,conv)
      
      

    }
   
    
  }
  console.log(infos.suggestedUsers.length>0)

  return (
    <div className="flex flex-col h-96 w-full">
      <div className="rounded-lg shadow-md -mt-8 p-2">
        
        <input onChange={(e) =>setBody(e.target.value)} className="w-full p-4 focus:outline-none" />
        <button onClick={HandleMessage} className="w-8 h-8 items-center bg-opacity-75 rounded-full focus:outline-none focus:shadow-outline inline-flex shadow bg-blue-500 hover:bg-blue-600 text-gray-200 font-bold justify-center right-0">
          <BiMessageAltDetail className="text-xl" />
        </button>
      </div>
      <p className="mb-6 mt-6 ml-4 font-semibold">Suggestions : </p>
      <div className="overflow-y-scroll no-scrollbar h-96">
        {infos.suggestedUsers.length>0?infos.suggestedUsers.map((user) => {
       
          return <Personcomp focus={selectUser} name={user.username} pseudo= {user.displayName} img={user.imageUrl} />

        }):null  }
       
      </div>
    </div>
  );
};

export default Newmsg;
