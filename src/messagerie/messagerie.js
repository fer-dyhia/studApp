import React, { useState, useEffect } from "react";

import RightBar from "./screen/rightbar";

import Navbar from "./screen/navbar";
import Sidebar from "./screen/sidebar";
import CardList from "./components/cardList";
import listAddNewConv from "./components/modal";

import msgg from "../img/logo.png";

import Btext from "./buttons/buttontext";

import ConvNull from "./components/convNull";

import image from "../img/friend5.jpg";
import Person from "./components/person";
import SearchP from "./components/searchP";
import Messages from "./components/messages";

import { useDispatch, useSelector } from "react-redux";
import {
  getConversations,
  getRealtimeMessages,
} from "../Redux/Actions/dataAction";
import Conversation from "./components/conversation";

const Messagerie = (props) => {
  const [infos, setInfos] = useState({ name: "", img: "" });
  const [username, setUser] = useState("");
  const [friendList, setlist] = useState(false);
  const dispatch = useDispatch();
  const info = useSelector((state) => state.infos);
  const userData = useSelector((state) => state.user);
  const name = infos.name;
  const [unsub, setUnsub] = useState();
  const [prec, setPrec] = useState(infos.name);

  console.log(username);

  useEffect(() => {
    getConversations(dispatch, userData.credentials.username);
  }, []);

  const get_user = (info) => {
    const name_user = info.name;
    const img_user = info.img;
    console.log(info.username)
    setUser(info.username);
    setPrec(infos.name);

    setInfos({
      name: name_user,
      img: img_user,
    });
  };
  const click = (info) => {
    setInfos(info);
  };
  const Click = (user) => {
    // if (prec != infos.name) {

    if (typeof unsub != "undefined") {
      setPrec(name);

      unsub.unsubscribe();
      let unsubscribe = getRealtimeMessages(dispatch, user);
      setUnsub({ unsubscribe });
    } else {
      let unsubscribe = getRealtimeMessages(dispatch, user);
      setUnsub({
        unsubscribe,
      });
      setPrec(name);
    }
    //  }
  };

  const setConv = (info) => {
    console.log(info);
    setInfos({ name: info.convName, img: {} });
    setUser(info.username);
    console.log(infos.name);
    if (typeof unsub != "undefined") {
      unsub.unsubscribe();
      let unsubscribe = getRealtimeMessages(dispatch, info.convName);
      setUnsub({ unsubscribe });
    } else {
      let unsubscribe = getRealtimeMessages(dispatch, info.convName);
      setUnsub({
        unsubscribe,
      });
    }
    //  }
  };

  return (
    <div className="flex antialiased h-screen overscroll-none text-gray-800">
      <Navbar imageUrl={userData.credentials.imageUrl} click={setlist} />
      {/* <div className="flex flex-row h-full w-full overflow-hidden"> */}
        <div className="p-2 h-full w-3/12 bg-gray-50">
          <SearchP />

          {friendList ? (
            <CardList setConv={setConv} click={click} />
          ) : (
            <Messages
              parentGetUser={get_user}
              users={info.conversations}
              Click={Click}
            />
          )}
        </div>
        {name === "" ? (
          <ConvNull />
        ) : (
          <div className="w-4/6 h-full">
            <Conversation
              // grp="yes"
              cnvslctd="yes"
              convId={infos.name}
              username={username}
              img={infos.img}
            />
          </div>
        )}
        <RightBar name={username} img={infos.img} />
      {/* </div> */}
    </div>
  );
};

export default Messagerie;
