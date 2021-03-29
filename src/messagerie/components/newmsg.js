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
import { MdSend } from "react-icons/md";
import {SendMessage} from "../../Redux/Actions/dataAction"
import { PinDropSharp } from "@material-ui/icons";
import { BiExit } from "react-icons/bi"


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
        message:Body,
        imageUrl:""
      }
      SendMessage(dispatch,conv)
      
      

    }
   
    
  }
  console.log(infos.suggestedUsers.length>0)

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex flex-row mt-4 rounded-full border-t border-1 shadow-md p-2">
        <button className="absolute right-1 top-1 text-3xl text-blue-400"><BiExit/></button>
        <input onChange={(e) =>setBody(e.target.value)} placeholder="Nouveau message ..."className="placeholder-gray-400 w-full p-2 focus:outline-none" />
        <button onClick={HandleMessage} className="h-10 w-12 transition duration-500 ease-in-out text-lg text-blue-400 bg-transparent hover:bg-blue-300 hover:text-white focus:outline-none items-center rounded-full inline-flex font-bold justify-center right-0 mr-2 mt-1">
          <MdSend className="text-lg" />
        </button>
      </div>
      <p className="mb-6 mt-6 ml-4 font-semibold">Suggestions : </p>
      <div className="overflow-y-scroll scrollbar h-full">
        {infos.suggestedUsers.length>0?infos.suggestedUsers.map((user) => {
       
          return <Personcomp focus={selectUser} name={user.username} pseudo= {user.displayName} img={user.imageUrl} />

        }):null  }
       
      </div>
    </div>
  );
};

export default Newmsg;
