import React, { Component } from "react";
import "./userProfile.css";
import logo from "../../images/logo.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import ImageGallery from "./ImageGallery"

const UserProfile = (props) => {
  const toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };

  return (
    <div className="main__userprofile">
      <div className="profile__card user__profile__image">
        <div className="flex items-center">
          {/* <img src={props.image} /> */}
          <img src={logo} className="rounded-full w-20 h-20" />
        </div>
        <h4>{props.username}</h4>
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
