import React from "react";
import me from "../../img/me.jpg";
import rcv from "../../img/receiver.jpg";
import Imgconv from "./imgconv";
import {BiCheck} from "react-icons/bi"

const Msgcontent = (props) => {
  console.log(props.imageUrl)
  return (
    <div>
      {props.sent == "yes" ? (
        <div className="flex items-end justify-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
            <div className="flex flex-col items-end relative">
              <span className="px-6 py-2 rounded-lg inline-block rounded-br-none bg-blue-400 text-white">
                {props.body}
              </span>
              <span> <span className="text-gray-400 text-xs"> 14h13</span>              <BiCheck className="text-green-900 ml-1 text-sm inline"/>
</span>
             
            </div>
            
          </div>
          {/* {props.imageUrl!=""?<Imgconv sent="yes" seen="Vu à 13h32" />:null} */}
          
        </div>
      ) : (
        <div className="flex items-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
            <div>
              <span className="px-4 py-2 rounded-lg inline-block bg-gray-200 text-gray-600">
                {props.body}
              </span>
            </div>
            
          </div>
          {/* {props.imageUrl!=""?<Imgconv sent="no" seen="Vu à 13h32" />:null} */}
        </div>
      )}
    </div>
  );
};

export default Msgcontent;
