import React, { Component } from "react";

import Ident from "../header/ident";
import Funct from "../header/funct";
import { RiHomeSmileFill } from "react-icons/ri";
import { useHistory } from "react-router";

import profilepic from "../../img/me.jpg";

const Header = (props) => {
  const history = useHistory();
  return (
    <div class="relative flex flex-row shadow-lg h-48 w-full">
      <button
        className="z-50 absolute ml-72 left-96 top-6 bg-white bg-opacity-50 rounded-full w-16 h-16 px-4 focus:outline-none"
        onClick={() => history.push("/filActualite")}
      >
        <RiHomeSmileFill className="text-blue-500 text-3xl" />
      </button>

      <img className="absolute w-full h-full z-0" src={props.cover} />

      <Ident
        name={props.name}
        domain="Computer Science Student"
        img={props.img}
      />

      <Funct username={props.name} />
    </div>
  );
};

export default Header;
