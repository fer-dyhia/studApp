import React from "react";
import { useHistory } from 'react-router'
import BLogo from "../buttons/blogo.js";
import { MdHome } from "react-icons/md";
import { RiUserStarFill } from "react-icons/ri";
import { BsFillChatFill } from "react-icons/bs";
import { PinDropSharp } from "@material-ui/icons";

const Navbar = (props) => {
 
  const history=useHistory()
  return (
    <div className="w-16 border-r bg-blue-400 rounded-r-lg shadow-xl flex items-center flex-col">
      <BLogo imageUrl={props.imageUrl} />
      <div 
          
        className="flex flex-col space-y-16 justify-center items-center mt-36">
        <button onClick={()=> props.click(false)} className="h-10 w-10 text-white text-2xl flex justify-center items-center  focus:outline-none focus:text-red-100" onClick={() => {
          history.push("filactualite")
        }}>
          <MdHome className="transition duration-500 ease-in-out text-gray-100 hover:text-gray-200 transform hover:-translate-y-2 hover:scale-110" />
        </button>
        <button onClick={()=>  props.click(true)  } className="h-10 w-10 text-white text-2xl flex justify-center items-center  focus:outline-none">
          <RiUserStarFill className="transition duration-500 ease-in-out text-gray-100 hover:text-gray-200 transform hover:-translate-y-2 hover:scale-110"/>
        </button>
        <button onClick={()=>  props.click(false)
          
        } className="h-10 w-10 text-white text-xl flex justify-center items-center   focus:outline-none">
          <BsFillChatFill className="transition duration-500 ease-in-out text-gray-100 hover:text-gray-200 transform hover:-translate-y-2 hover:scale-110"/>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
