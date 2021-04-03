import React from "react";
import {useSelector} from "react-redux";
import Avatar from "../chatList/Avatar";
import ImgSent from "./ImgSent";
import {BsClockHistory} from "react-icons/bs"
const ChatItem = (props) => {
  const userData=useSelector((state)=>state.user)
  return (
    <div
      style={{ animationDelay: `0.2s` }}
      className={`chat__item ${props.user ? props.user : ""}`}
    >
      {props.user == "me" ? (
        <div className="flex flex-row items-end">
          <div className="chat__item__content">
            <div className="chat__msg pb-2">{props.msg}</div>

            {props.imageUrl ?<ImgSent imageUrl={props.imageUrl} />:null}
            <div className="chat__meta">
              <span><BsClockHistory className="text-white text-sm"/></span>
              <span>{props.seen ? "seen" : null}</span>
            </div>
          </div>
          <Avatar isOnline="active" image={userData.credentials.imageUrl} />
        </div>
      ) : (
        <div className="flex flex-row items-end">
          <Avatar isOnline="active" image={props.image} />

          <div className="chat__item__content">
            <div className="chat__msg pb-2">{props.msg}</div>
            {props.imageUrl ?<ImgSent imageUrl={props.imageUrl} />:null}
            <div className="chat__meta">
              <span><BsClockHistory className="text-gray-500"/></span>
              <span>{props.seen ? "seen" : null}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ChatItem;
