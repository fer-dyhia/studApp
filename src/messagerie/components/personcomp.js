import React,{useState} from "react";
import { ImRadioUnchecked } from "react-icons/im";

const Personcomp = (props) => {
 const user={
   username:props.name,
   imageUrl:props.img
 }
  
  return (
    <div onClick={()=>props.focus(user)} className="h-16 w-full flex flex-row justify-between shadow-lg mb-2 bg-white hover:bg-gray-100 items-center cursor-pointer focus:outline-none focus:bg-gray-500">
      <div className="flex flex-col ml-4">
        <p className="text-lg">{props.name}</p>
        <p className="text-sm text-gray-400">{props.pseudo}</p>
      </div>
      <img src={props.img} className="rounded-full h-8 w-8 mr-4" />
    </div>
  );
};

export default Personcomp;
