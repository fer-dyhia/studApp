import React, {useState, useEffect } from "react";
import axios from "axios"
import { useSelector,useDispatch } from "react-redux";
import "./userProfile.css";
import logo from "../../images/logo.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import ImageGallery from "./ImageGallery";
import userEvent from "@testing-library/user-event";



const UserProfile = (props) => {
  //const dispatch=useDispatch()
  const userData = useSelector((state) => state.user);
  const [info,setInfo]=useState({})

  useEffect(() => {  
    let user ={username:props.username} 
    console.log(user)
    axios.post("https://europe-west1-socialapp-c6ffe.cloudfunctions.net/app/data/convUserInfo",user).then((res) => {
      setInfo(res.data)
      console.log(info)
    })
}
    ,[props.username])


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
         {props.image ?<img src={props.image} className=" w-24 h-24 rounded-full " />:null }
        </div>
        <h4 className="text-base w-full text-center font-semibold text-gray-600">
          {props.username}
        </h4>
        <p>Etudiant</p>
      </div>
      <span className="overflow-y-scroll h-96 no-scrollbar">
        {info.bio ?<div className="profile__card">
          <div className="bio no-scrollbar break-words">
           {info.bio}
          </div>
        </div>:null}
        <div className="profile__card">
          <div className="bio no-scrollbar break-words">
           <p className="text-gray-500">Email : <span className="text-black">{info.Email?info.Email:"Non renseigné "}</span></p>
            <p className="text-gray-500">Phone : <span className="text-black">{info.tel ?info.tel:"Non renseigné "}</span></p>
            <p className="text-gray-500">Université : <span className="text-black">{info.univ?info.univ:"Non renseigné" }</span></p>
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
