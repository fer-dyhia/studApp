import React, { Component } from "react";
import "./nav.css";
import logo from "./../../images/logo.png";
import {AiTwotoneHome} from "react-icons/ai"
import {FaUserFriends} from "react-icons/fa"
import {AiFillMessage} from "react-icons/ai"
import {useHistory} from "react-router"

const Nav = (props) => {
  const history=useHistory();
  return (
    <div className="nav space-y-20">
      <button className="focus:outline-none flex justify-center"onClick={()=>history.push('/filActualite')}>
        <AiTwotoneHome className="text-3xl text-white transition duration-500 ease-in-out transform hover:-translate-y-1" />
      </button>
      <button
        className="focus:outline-none flex justify-center"
        onClick={() => props.OnlineList(true)}
      >
        <FaUserFriends className="text-3xl text-white transition duration-500 ease-in-out transform hover:-translate-y-1" />
      </button>
      <button
        className="focus:outline-none flex justify-center"
        onClick={() => props.OnlineList(false)}
      >
        <AiFillMessage className="text-3xl text-white transition duration-500 ease-in-out transform hover:-translate-y-1" />
      </button>
    </div>
  );
};

export default Nav;
