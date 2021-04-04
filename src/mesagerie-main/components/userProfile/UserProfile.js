import React, { Component } from "react";
import {useSelector } from "react-redux";
import "./userProfile.css";
import logo from "../../images/logo.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import ImageGallery from "./ImageGallery"

const UserProfile = (props) => {
  const userData=useSelector((state)=>state.user)
  const toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };

  const onMouse = (e) => {

    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop
  
    e.target.style.setProperty('--x', `${ x }px`)
    e.target.style.setProperty('--y', `${ y }px`)
    
  }


  return (
    <div className="main__userprofile">
      <div className="profile__card user__profile__image">
        <div onMouseMove={(e)=>onMouse(e)} id="headerProfile" className="flex  justify-items-center  w-8 ml-8 mb-2 mt-1 mr-6 z-50 button_avatar rounded-full bg-gray-50">
        <img src={props.image} className="rounded-full   object-cover  " />
        </div>
        <p className="text-base font-semibold text-gray-600">{props.username}</p>
        {/* <h4>{props.username}</h4> */}
        <p>CEO & Founder at Highly Inc</p>
      </div>
      <div className="profile__card">
        <div className="card__header" onClick={toggleInfo}>
          <h4>Information</h4>
          <i className="fa fa-angle-down"></i>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row space-x-3">
          <AiFillTwitterCircle className="text-2xl"/>
          <FaFacebook className="text-2xl"/>
          <AiFillInstagram className="text-2xl"/>
          </div>
          
        </div>
      </div>
      <div className="profile__card">
        <div className="card__header" onClick={toggleInfo}>
          <h4>Images</h4>
          <i className="fa fa-angle-down"></i>
        </div>
        <div className="card__content">
          <ImageGallery/>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
