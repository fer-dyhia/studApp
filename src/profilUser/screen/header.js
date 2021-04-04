import React, { Component } from "react";

import Ident from "../header/ident";
import Funct from "../header/funct";
import { RiHomeSmileFill } from "react-icons/ri";
import { useHistory } from "react-router";

import profilepic from "../../img/me.jpg";

const Header = (props) => {
  const history = useHistory();
  return (
    <div class="relative flex flex-rows shadow-lg h-48 w-full bg-couverture bg-cover fixed z-20">
      
      <div className=''>
      <Ident
        name={props.name}
        domain="Computer Science Student"
        img={props.img}
      />
      </div>
      <div className=''>
      <Funct username={props.name} />
      </div>
    </div>
  );
};

export default Header;
