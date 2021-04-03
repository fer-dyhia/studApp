import React, { Component } from "react";
import image from "../../images/logo.png";
const Avatar =(props)=> {
    return (
      <div className={props.id?"":"avatar"} id={props.id?props.id:""}>
        <div className="avatar-img">
          <img src={image} alt="#" id={props.id?props.id:""} />
          {/* <img src={props.image} alt="#" /> c'est ce qu'il y avait avant*/}
        </div>
        <span className={`isOnline ${props.isOnline}`}></span>
      </div>
    );
}

export default Avatar