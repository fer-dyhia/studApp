import React from "react";
import img from "../../img/receiver.jpg";
import Upload from "../components/upload";
import Disponible from "../components/disponible";
const Rightbar = (props) => {
  return (
    <div className="flex flex-col py-6 w-2/10 flex-shrink-0 bg-gray-50">
      <div className="flex flex-row justify-center h-12 w-full sm:visible invisible">
        <div className="font-bold text-2xl font-sans">Shared files</div>
      </div>

      <div className="mt-0 sm:mt-8 flex flex-col items-center w-full py-6 px-4 rounded-2xl outline-none">
        {props.img != "" ?<img
          src={props.img}
          alt="Pic"
          className="w-16 sm:w-14 h-16 sm:h-14 rounded-full"
        />:null

        }
        
        <div className="text-sm font-semibold mt-2 invisible sm:visible">
          {props.name}
        </div>
      </div>
      <Upload />
      
    </div>
  );
};

export default Rightbar;
