import React,{useState} from "react";
import {useSelector,useDispatch} from 'react-redux'
import PeopleList from "../../../../../chatList/PeopleList";
import "./modal.css";
import {SendMessage} from "../../../../../../../Redux/Actions/dataAction"
import { IoIosCloseCircleOutline } from "react-icons/io";

const Modal = (props) => {

  const [Body,setBody]=useState("")
  const dispatch=useDispatch()
  const infos=useSelector((state) =>state.infos)
  const user=useSelector((state) =>state.user)
  const onClose = (e) => {
    props.onClose && props.onClose(e);
  };

  if (!props.show) {
    return null;
  }

  const HandleMessage=() => {
    if(Body!=""&& props.user.username!=""){
      const conv={
        accountName1:user.credentials.username,
        accountName2:props.user.username,
        imageUrl1:user.credentials.imageUrl,
        imageUrl2:"",
        message:Body,
        imageUrl:""
      }
      console.log(conv)
      SendMessage(dispatch,conv)
      
    }
    
  }
  return (
    <div className="modal" id="modal">
      <div className="flex flex-row justify-between">
        <h2>New Message</h2>

        <button class="toggle-button mr-2 focus:outline-none" onClick={onClose}>
          <IoIosCloseCircleOutline className="text-3xl text-gray-500 hover:text-red-600 transition duration-500 ease-in-out" />
        </button>
      </div>

      <div class="actions">
        <input
          type="text"
          placeholder="Tapez votre message ... "
          className="OutlineNone w-96 p-4 mx-3.5 border-none focus:outline-none rounded-full"
          onChange={(e)=>setBody(e.target.value)}
        />
      </div>
      <div className="p-3 flex flex-col bg-gray-50 h-96">
        <p className="ml-2 mb-3">Suggestions : </p>
        {/* <PeopleList /> */}
        {props.children}
      </div>
      <button onClick={HandleMessage} className="w-60 h-14 p-2 text-xl rounded-full text-white transition duration-500 ease-in-out bg-blue-600 hover:bg-blue-400 shadow absolute bottom-5 left-28 focus:outline-none">
        Send
      </button>
    </div>
  );
};

export default Modal;
