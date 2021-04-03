import React, { Component } from "react";
import "./nav.css";
import logo from "./../../images/logo.png";
import {AiTwotoneHome} from "react-icons/ai"
import {FaUserFriends} from "react-icons/fa"
import {AiFillMessage} from "react-icons/ai"

const Nav = (props) => {
  return (
    <div className="nav space-y-20">
      <button className="focus:outline-none flex justify-center">
        <AiTwotoneHome className="text-3xl text-white" />
      </button>
      <button
        className="focus:outline-none flex justify-center"
        onClick={() => props.OnlineList(true)}
      >
        <FaUserFriends className="text-3xl text-white" />
      </button>
      <button
        className="focus:outline-none flex justify-center"
        onClick={() => props.OnlineList(false)}
      >
        <AiFillMessage className="text-3xl text-white" />
      </button>
    </div>
  );
};

export default Nav;
