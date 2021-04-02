import React, { useState } from "react";
import {useDispatch ,useSelector} from "react-redux";
import "./chatList.css";
import ChatListItems from "./ChatListItems";
const dayjs = require('dayjs')
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

 const ChatList =(props)=> {

   const infos= useSelector((state)=>state.infos)
   const userData= useSelector((state)=>state.user)
  return (
    <div className="main__chatlist">
      <button className="btn">
        <i className="fa fa-plus"></i>
        <span>New conversation</span>
      </button>
      <div className="chatlist__heading">
        <h2>Chats</h2>
        <button className="btn-nobg">
          <i className="fa fa-ellipsis-h"></i>
        </button>
      </div>
      <div className="chatList__search">
        <div className="search_wrap">
          <input type="text" placeholder="Search Here" required />
          <button className="search-btn">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      <div className="chatlist__items">
        {infos.conversations.map((item, i) => {
            const index = item.Users.findIndex((User) => User == userData.credentials.username);
            let Username = item.Users[1 - index];
            let Image=item.Images[1-index]
            console.log(Image);
          return (
            <ChatListItems
              name={item.convId}
              username={Username}
              click={(infos)=>props.click(infos)}
              get_user={(name, img) => props.get_user(name, img)}
              animationDelay={i + 1}
              active={item.active ? "active" : ""}
              isOnline={item.isOnline ? "active" : ""}
              image={Image}
            />
          );
        })}
      </div>
    </div>
  );
  }
  
 export default ChatList
