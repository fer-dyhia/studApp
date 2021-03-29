import React from "react";
import me from "../../img/me.jpg";
import rcv from "../../img/receiver.jpg";
import Imgconv from "./imgconv";
import { BiCheck } from "react-icons/bi";

const Msgcontent = (props) => {
  console.log(props.imageUrl);
  return (
    <div>
      {props.sent == "yes" ? (
        <div className="flex items-end justify-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
            <div className="flex flex-col items-end relative">
              {props.imageUrl != "" ? (
                <span className="py-4 px-2 rounded-lg inline-block rounded-br-none bg-blue-400 text-white">
                  <span className="px-1">{props.body}</span>
                   <Imgconv imageUrl={props.imageUrl} /> 
                </span>
              ) : (
                <span className="py-3 px-2 rounded-lg inline-block rounded-br-none bg-blue-400 text-white">
                  <span className="px-1">{props.body}</span>
                </span>
              )}
              {props.seen ?(<span>
                <span className="text-gray-400 text-xs">Vu</span>
                <BiCheck className="text-green-900 ml-1 text-sm inline" />
              </span>):null
                
              }
              
            </div>
          </div>
          {/* {props.imageUrl!=""?<Imgconv sent="yes" seen="Vu à 13h32" />:null} */}
        </div>
      ) : (
        <div className="flex items-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
            <div>
              {props.imageUrl != "" ? (
                <span className="py-4 px-2 rounded-lg inline-block bg-gray-200 text-gray-600">
                  <span className="px-1">{props.body}</span>
                  <Imgconv imageUrl={rcv} />
                </span>
              ) : (
                <span className="py-3 px-2 rounded-lg inline-block bg-gray-200 text-gray-600">
                  <span className="px-1">{props.body}</span>
                </span>
              )}
            </div>
          </div>
          {/* {props.imageUrl!=""?<Imgconv sent="no" seen="Vu à 13h32" />:null} */}
        </div>
      )}
    </div>
  );
};

export default Msgcontent;
