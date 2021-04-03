import React, { Component } from "react";
import Avatar from "./Avatar";

const  ChatListItems= (props)=> {
 
  const selectChat = (e) => {
    for (
      let index = 0;
      index < e.currentTarget.parentNode.children.length;
      index++
    ) {
      e.currentTarget.parentNode.children[index].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
    let infos={
      username:props.username,
      name:props.name,
      img:props.img
    }
    props.get_user(infos);
    props.click(infos.name);
   
  };

  return (
    <div
      style={{ animationDelay: `0.${props.animationDelay}s` }}
      onClick={selectChat}
      className={`chatlist__item ${
       props.active ? props.active : ""
      } `}
    >
      <Avatar
        image={
          props.image ? props.image : "http://placehold.it/80x80"
        }
        isOnline={props.isOnline}
      />

      <div className="userMeta">
        <p>{props.username}</p>
        {props.lastMessage.seen ?
          <span className="font-normal subpixel-antialiased ">{props.lastMessage.body.length>20 ?props.lastMessage.body.substring(0, 19) + "...":props.lastMessage.body}</span>
        :<span className="font-medium text-blue-600 subpixel-antialiased ">{props.lastMessage.body.length>20 ?props.lastMessage.body.substring(0, 19) + "...":props.lastMessage.body}</span>}
        
      </div>
    </div>
  ); 
  
}
 export default ChatListItems