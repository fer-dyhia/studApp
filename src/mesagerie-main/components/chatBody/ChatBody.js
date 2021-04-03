import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./chatBody.css";
import ChatList from "../chatList/ChatList.js";
import ChatContent from "../chatContent/ChatContent";
import UserProfile from "../userProfile/UserProfile";
import Nav from "../nav/Nav";
import {
  getConversations,
  getRealtimeMessages,
} from "../../../Redux/Actions/dataAction";
import OnlineList from "../chatList/OnlineList.js";

const ChatBody = () => {
  const [unsub, setUnsub] = useState();
  const [infos, setInfos] = useState({ name: "", img: "" });
  const [prec, setPrec] = useState(infos.name);
  const [username, setUser] = useState("");
  const [friendList, setlist] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  console.log(infos.img)

  useEffect(() => {
    getConversations(dispatch, userData.credentials.username);
  }, []);

  const Click = (user) => {
    // if (prec != infos.name) {
    console.log(user);

    if (typeof unsub != "undefined") {
      setPrec(infos.name);

      unsub.unsubscribe();
      let unsubscribe = getRealtimeMessages(dispatch, user);
      setUnsub({ unsubscribe });
    } else {
      let unsubscribe = getRealtimeMessages(dispatch, user);
      setUnsub({
        unsubscribe,
      });
      setPrec(infos.name);
    }
    //  }
  };
  const get_user = (info) => {
    const name_user = info.name;
    const img_user = info.img;
    console.log(info.username);
    setUser(info.username);
    setPrec(infos.name);

    setInfos({
      name: name_user,
      img: img_user,
    });
    console.log(infos);
  };

  const click = (info) => {
    setInfos(info);
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
    <div className="mt-12 p-0">
      <div className="absolute back top-0 left-0 right-0 bottom-0 h-screen" />
      <div className="main__chatbody bg-gray-50 ">
        <Nav OnlineList={setlist} />
        {friendList ? (
          <OnlineList setConv={setConv} click={click} />
        ) : (
          <ChatList click={Click} get_user={get_user} />
        )}
        <ChatContent
          convId={infos.name}
          image={infos.img}
          username={username}
        />
        <UserProfile username={username} image={infos.img} />
      </div>
    </div>
  );
};
export default ChatBody;
