import React, { Component, useState, createRef, useEffect } from "react";
import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";
import { BsImageFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  MessageUser,
  UploadImagePost,
} from "../../../Redux/Actions/dataAction";
import { ReadMsg } from "../../../Redux/Actions/dataAction";
import ImgComponent from "./ImgComponent";
import ImgSent from "./ImgSent";
import CustomScroll from 'react-custom-scroll';

const ChatContent = (props) => {
  const [Message, setMessage] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const data = useSelector((state) => state.data);
  const infos = useSelector((state) => state.infos);
  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState("");
  const messagesEndRef = createRef(null);

  const send = () => {
    const message = {
      sourceName: user.credentials.username,
      body: Message,
      imageUrl: image != "" ? data.image : "",
      convId: props.convId,
    };
    if (
      !/^\s+$/.test(message.body) &&
      (message.body != "") | (message.imageUrl != "")
    ) {
      MessageUser(dispatch, message);
      setImage("");
      setMessage("");
    }
  };

  const onStateChange = (e) => {
    //this.setState({ msg: e.target.value });
  };
  const focus = () => {
    let infos = {
      convId: props.convId,
      username: user.credentials.username,
    };
    ReadMsg(dispatch, infos);
  };

  const onUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploading(true);

    const formData = new FormData();

    files.forEach((file, i) => {
      formData.append(i, file);
    });
    UploadImagePost(dispatch, formData);
    setImage(data.image);
    console.log(image);
  };
  const removeImage = (id) => {
    setImage({
      image: image.filter((image) => image.public_id !== id),
    });
  };
  const EnterSend = (e) => {
    if (e.key === "Enter") {
      send();
    }
  };
  useEffect(() => {
    if (messagesEndRef) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
      console.log("scolled");
    }
  }, [messagesEndRef]);

  return (
    <div className="main__chatcontent">
      <div className="content__header">
        <div className="blocks">
          <div className="current-chatting-user">
            <Avatar isOnline="active" image={props.image} id="AvatarChat"/>
            <p>{props.username}</p>
          </div>
        </div>

        <div className="blocks">
          <div className="settings">
            <button className="btn-nobg">
              <i className="fa fa-cog"></i>
            </button>
          </div>
        </div>
      </div>
      <CustomScroll>
      <div className="content__body ">
        <div className="chat__item">
          {infos.messages.length > 0 ? (
            infos.messages.map((itm, index) => {
              return (
                <div className={itm.sourceName == user.credentials.username ? "test w-1/12" : "test2 w-1/12"}>
                  
                  <ChatItem
                    animationDelay={index + 2}
                    key={index}
                    seen={itm.seen}
                    user={
                      itm.sourceName == user.credentials.username ? "me" : "no"
                    }
                    msg={itm.body}
                    image={props.image}
                  />
                </div>
              );
            })
          ) : (
            <div className="dummy_div" />
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <ImgComponent/>
      </CustomScroll>
      <div className="content__footer">
        <div className="sendNewMessage">
          <button className="image">
            <BsImageFill />
          </button>
          <input
            className="focus:outline-none"
            type="text"
            placeholder="Écrivez votre message ..."
            onChange={(e) => setMessage(e.target.value)}
            value={Message}
            onKeyPress={EnterSend}
            onFocus={focus}
          />
          <button className="btnSendMsg" id="sendMsgBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              id="plane"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChatContent;
