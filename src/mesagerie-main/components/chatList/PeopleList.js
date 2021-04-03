import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOnlineUsers } from "../../../Redux/Actions/userActions";
import logo from "../../images/logo.png";

const PeopleList = () => {
  //     const dispatch = useDispatch();
  //   const user = useSelector((state) => state.user);
  //   const infos = useSelector((state) => state.infos);
  //   const MINUTE_MS = 60000;
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       console.log("yes");
  //       let User = { username: user.credentials.username };
  //     }
  //     getOnlineUsers(dispatch, User);
  // }, MINUTE_MS);
  // return () => clearInterval(interval);
  // }, []);

  return (
    <div>
      <li
        class="border-gray-400 flex flex-row mb-2 flex flex-col"
        // onClick={() => searchConv(online.username)}
      >
        <div class="select-none cursor-pointer bg-gray-50 rounded-md flex flex-1 items-center p-2 transition duration-500 ease-in-out transform hover:-translate-y-0.5 hover:shadow-lg mb-1">
          <div class="flex flex-col rounded-full w-12 h-12 bg-transparent justify-center items-center mx-4">
            <img
              className="rounded-full h-16 w-16"
              //   src={online.imageUrl}
              src={logo}
              alt=""
            />
          </div>
          <div class="flex-1 pl-1 mr-16">
            <div class="font-medium flex-col justify-evenly ">
              {" "}
              hdhjskdh
              {/* {online.username} */}
            </div>
          </div>
          <button className="w-24 p-2 rounded-full text-white transition duration-500 ease-in-out bg-blue-500 hover:bg-blue-600 shadow-md focus:outline-none">
            Add
          </button>
          <button className="w-24 p-2 rounded-full text-black transition duration-500 ease-in-out bg-white hover:bg-gray-100 hover:text-gray-800 border-2 border-gray-500 shadow-md focus:outline-none">
            Add
          </button>

        </div>

        <div class="select-none cursor-pointer bg-gray-50 rounded-md flex flex-1 items-center p-2 transition duration-500 ease-in-out transform hover:-translate-y-0.5 hover:shadow-lg mb-1">
          <div class="flex flex-col rounded-full w-12 h-12 bg-transparent justify-center items-center mx-4">
            <img
              className="rounded-full h-16 w-16"
              //   src={online.imageUrl}
              src={logo}
              alt=""
            />
          </div>
          <div class="flex-1 pl-1 mr-16">
            <div class="font-medium flex-col justify-evenly ">
              {" "}
              hdhjskdh
              {/* {online.username} */}
            </div>
          </div>
          <button className="w-16 p-2 rounded-xl text-white transition duration-500 ease-in-out bg-blue-500 hover:bg-blue-600 focus:outline-none">
            Add
          </button>
        </div>

        <div class="select-none cursor-pointer bg-gray-50 rounded-md flex flex-1 items-center p-2 transition duration-500 ease-in-out transform hover:-translate-y-0.5 hover:shadow-lg mb-1">
          <div class="flex flex-col rounded-full w-12 h-12 bg-transparent justify-center items-center mx-4">
            <img
              className="rounded-full h-16 w-16"
              //   src={online.imageUrl}
              src={logo}
              alt=""
            />
          </div>
          <div class="flex-1 pl-1 mr-16">
            <div class="font-medium flex-col justify-evenly ">
              {" "}
              hdhjskdh
              {/* {online.username} */}
            </div>
          </div>
          <button className="w-16 p-2 rounded-xl text-white transition duration-500 ease-in-out bg-blue-500 hover:bg-blue-600 focus:outline-none">
            Add
          </button>
        </div>
      </li>
    </div>
  );
};
export default PeopleList;
