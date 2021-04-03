import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BtnMsg from "../buttons/btnMsg";
import "./chatList.css";
import ChatListItems from "./ChatListItems";
import logo from "../../images/logo.png";
import Modal from "../modals/modalMsg/src/Component/Modal/index";

const dayjs = require("dayjs");
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const ChatList = (props) => {
  const [show, setShow] = useState(false);

  const showModal = (e) => {
    setShow(!show);
  };

  const infos = useSelector((state) => state.infos);
  const userData = useSelector((state) => state.user);
  return (
    <div className="main__chatlist">
      <div className="flex flex-col items-center mt-1 mb-8">
        <img src={logo} className="rounded-full w-28 h-28" />
        <p className="font-semibold">My name</p>
      </div>
      <div className="flex justify-between flex-row">
        <div className="chatlist__heading">
          <h2>Chats</h2>
          {/* Useless button */}
          {/* <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button> */}
        </div>
        <button onClick={(e) => showModal(e)} className="p-2 rounded-lg text-white transition duration-500 ease-in-out bg-blue-400 hover:bg-blue-500">New Message</button>
        <Modal show={show} onClose={showModal}/>
      </div>
      <div className="chatlist__items">
        {infos.conversations.map((item, i) => {
          const index = item.Users.findIndex(
            (User) => User == userData.credentials.username
          );
          let Username = item.Users[1 - index];
          let Image = item.Images[1 - index];
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
