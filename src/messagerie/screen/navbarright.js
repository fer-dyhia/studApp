import React from "react";
import { useHistory } from 'react-router'
import BLogo from "../buttons/blogo.js";
import { MdHome } from "react-icons/md";
import { RiUserStarFill } from "react-icons/ri";
import { BsFillChatFill } from "react-icons/bs";
import { PinDropSharp } from "@material-ui/icons";
import BLogoname from "../buttons/blogoname.js";

const Navbarright = (props) => {
 
  const history=useHistory()
  return (
    <div className="w-16 border-r bg-gray-700 flex items-center flex-col">
     
      <button onClick={()=> props.click(false)} 
            className="h-10 w-10 text-white text-2xl flex justify-center items-center  focus:outline-none focus:text-red-100" onClick={() => {
            history.push("filactualite") }}>
            <MdHome className="hover:gray-200" />
            </button>
      <div className="flex flex-col space-y-4 justify-center items-center ">
      <BLogo />
      <BLogoname className="h-80" />

         </div>
    </div>
  );
};

export default Navbarright;
