import React, { Component } from "react";
import { useSelector } from "react-redux";
import "./userProfile.css";
import logo from "../../images/logo.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import ImageGallery from "./ImageGallery";

const UserProfile = (props) => {
  const userData = useSelector((state) => state.user);
  const toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };

  const onMouse = (e) => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;

    e.target.style.setProperty("--x", `${x}px`);
    e.target.style.setProperty("--y", `${y}px`);
  };

  return (
    <div className="main__userprofile">
      <div className="profile__card user__profile__image">
        <div
          onMouseMove={(e) => onMouse(e)}
          id="headerProfile"
          className="flex flex-col items-center w-8 ml-6 mb-4 mt-1 mr-6  button_avatar rounded-full bg-gray-50"
        >
          <img src={props.image} className=" w-24 h-24 rounded-full " />
        </div>
        <h4 className="text-base w-full text-center font-semibold text-gray-600">{props.username}</h4>
        
        <p>CEO & Founder at Highly Inc</p>
      </div>
      <span className="overflow-y-scroll h-96 scrollbar">
        <div className="profile__card">
          <div className="bio no-scrollbar break-words">
            fjkfjskfjkfjskfjkfjskfjkfjskfjkfjskfjkfjskfjkfjskfjkfjskfjkfjskfjkfjskfjkfjskfjkfjskfjkfjsk
            fjkfjskfjkfjskfjkfjskfjkfjskfjkfjskfjkfjskfjkfjskfjkfjskfjkfjskfjkfjskfjkfjskf
          </div>
        </div>
        <div className="profile__card">
          <div className="bio no-scrollbar break-words">
            fjkfjskfjkfjskfjkfjskfjkfjskfjkfjskfjkfjskfjkfjskfjkfjskfjkfjskfjkfjskfjkfjskfjkfjskfjkfjsk
            fjkfjskfjkfjskfjkfjskfjkfjskfjkfjskfjkfjskfjkfjskfjkfjskfjkfjskfjkfjskfjkfjskf
          </div>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={toggleInfo}>
            <h4>Images</h4>
          </div>
          <div className="card__content">
            <ImageGallery />
          </div>
        </div>
      </span>
    </div>
  );
};
export default UserProfile;
