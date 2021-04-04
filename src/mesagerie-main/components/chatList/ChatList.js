import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BtnMsg from "../buttons/btnMsg";
import "./chatList.css";
import ChatListItems from "./ChatListItems";
import logo from "../../images/logo.png";
import Modal from "../modals/modalMsg/src/Component/Modal/index";
import PeopleList from "./PeopleList";
import { user } from "firebase-functions/lib/providers/auth";

const dayjs = require("dayjs");
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const ChatList = (props) => {
  const [show, setShow] = useState(false);
  const [Selected, setSelected] = useState({username:"",userImage:""});
  console.log(Selected)

  const onMouse = (e) => {

    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop
  
    e.target.style.setProperty('--x', `${ x }px`)
    e.target.style.setProperty('--y', `${ y }px`)
    
  }

  const showModal = (e) => {
    setShow(!show);
  };
  const selectUser=(user)=>{
    setSelected({username:user.username,userImage:user.userImage})
  }
  

  const infos = useSelector((state) => state.infos);
  const userData = useSelector((state) => state.user);
  return (
    <div className="main__chatlist">
      <span className="mb-3 flex flex-col items-center">
      <div onMouseMove={(e)=>onMouse(e)}  className="flex flex-col items-center mb-2 mt-1 button_avatar rounded-full bg-gray-50">
        <img src={userData.credentials.imageUrl} className=" w-28 h-28 rounded-full " />
      </div>
      <p className="text-base w-full text-center font-semibold text-gray-600">{userData.credentials.username}</p>
      </span>
      
      <div className="flex justify-between flex-row">
        <div className="chatlist__heading">
          <h2>Chats</h2>
          {/* Useless button */}
          {/* <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button> */}
        </div>
        <button onClick={(e) => showModal(e)} className="p-1.5 rounded-lg text-white transition duration-500 ease-in-out bg-blue-400 hover:bg-blue-500 focus:outline-none">New Message</button>
        <Modal user={Selected} show={show} onClose={showModal}>
          <PeopleList select={selectUser}/>
        </Modal>
      </div>
      <div className="chatlist__items no-scrollbar scrollbar">
        {infos.conversations.map((item, i) => {
          const index = item.Users.findIndex(
            (User) => User == userData.credentials.username
          );
          let Username = item.Users[1 - index];
          let Image = item.Images[1- index];
          console.log(Image);
          return (
            <ChatListItems
              name={item.convId}
              username={Username}
              click={(infos) => props.click(infos)}
              get_user={(name, img) => props.get_user(name, img)}
              animationDelay={i + 1}
              active={item.active ? "active" : ""}
              isOnline={item.isOnline ? "active" : ""}
              lastMessage={item.LastMsg}
              image={Image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChatList;
