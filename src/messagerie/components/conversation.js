import React, { useState, useEffect } from "react";
import Send from "../others/send";
import me from "../../img/me.jpg";
import rcv from "../../img/receiver.jpg";
import msgg from "../../img/logo.png";

import Btext from "../buttons/buttontext";
import BDisp from "../buttons/bdisp";
import Bonline from "../buttons/bonline";
import Dropmenu from "../others/dropmenu";
import Msgcontent from "./msgcontent";
// import { renderIntoDocument } from 'react-dom/test-utils'

import { useDispatch, useSelector } from "react-redux";


const Conversation = (props) => {
  const [infos, setInfos] = useState([]);
  const dispatch = useDispatch();
  const info = useSelector((state) => state.infos);

  return props.cnvslctd == "yes" ? (
    <div className="flex w-5/6 shadow-lg">
      <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
        <div className="flex sm:items-center justify-between mt-3 ml-4 sm:ml-0 sm:mt-0">
          <div className="flex items-center space-x-4">
            <img
              src={props.img}
              alt=""
              className="w-10 md:w-16 sm:w-12 h-10 md:h-16 sm:h-12 rounded-full"
            />

            <div className="flex flex-col leading-tight">
              <div className="md:text-2xl sm:text-xl text-lg mt-1 flex items-center">
                <span className="text-gray-700 mr-3">{props.username}</span>
                <Bonline />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {/* <button type="button" class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                    <button type="button" class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                    </button>
                    <button type="button" class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                        </svg>
                    </button> */}
            {/* <div className="flex relative text-left">
              {props.grp == "yes" ? <BDisp /> : <p></p>}
              <div class="mt-1.5 ml-2">
                <Dropmenu />
              </div>
            </div> */}
          </div>
        </div>
        <div className="flex flex-col space-y-4 p-3 overflow-y-scroll scrollbar">
          {info.messages.length<0
            ? null
            : info.messages.map((msg) => {
                return msg.sourceName === "mohand" ? (
                  <Msgcontent
                    sent="yes"
                    seen={msg.seen ? "seen" : null}
                    body={msg.body}
                  />
                ) : (
                  <Msgcontent sent="no" body={msg.body} />
                );
              })}
        </div>

        <Send convId={props.convId} />
      </div>
    </div>
  ) : (
    <div className="flex flex-col w-4/6 h-full items-center justify-center">
      <img src={msgg} className="w-56 h-56 rounded-full" />
      <Btext bname="Nouveau message" />
    </div>
  );
};

export default Conversation;
