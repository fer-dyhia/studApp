import React from "react";
import Avatar from "../chatList/Avatar";

const ChatItem = (props) => {
  return (
    <div
      style={{ animationDelay: `0.2s` }}
      className={`chat__item ${props.user ? props.user : ""}`}
    >
      <div className="flex flex-row items-end">
        <div className="chat__item__content">
          <div className="chat__msg">{props.msg}</div>
          <div className="chat__meta">
            <span></span>
            <span>{props.seen ? "seen" : null}</span>
          </div>
        </div>
        <Avatar isOnline="active" image={props.image} />
      </div>
    </div>
  );
};
export default ChatItem;
