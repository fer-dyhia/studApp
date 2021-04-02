import React, { Component } from "react";
import "./userProfile.css";

const  UserProfile =(props)=> {
  const toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src={props.image} />
          </div>
          <h4>{props.username}</h4>
          <p>CEO & Founder at Highly Inc</p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultrices urna a imperdiet egestas. Donec in magna quis ligula
          </div>
        </div>
      </div>
    );
  }
export default UserProfile
