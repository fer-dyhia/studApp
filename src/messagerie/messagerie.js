import React, { useState, useEffect } from "react";

import RightBar from "./screen/rightbar";

import Navbar from "./screen/navbar";
import Sidebar from "./screen/sidebar";
import CardList from "./components/cardList";
import listAddNewConv from "./components/modal"

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
  const [infos, setInfos] = useState({ name: "", img: {} });
  const [username, setUser] = useState("");
  const [friendList, setlist] = useState(false);
  const dispatch = useDispatch();
  const info = useSelector((state) => state.infos);
  const userData = useSelector((state) => state.user);
  const name = infos.name;
  const [unsub, setUnsub] = useState();
  const [prec, setPrec] = useState(infos.name);
 
  console.log(infos);

  useEffect(() => {
    getConversations(dispatch,userData.credentials.username );
  }, []);

  const get_user = (name, username, img) => {
    const name_user = name;
    const img_user = img;
    setUser(username);
    setPrec(infos.name);

    setInfos({
      name: name_user,
      img: img_user,
    });
  };
  const click=(info) => {
    setInfos(info)
  }
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

  const setConv=(info) => {
    console.log(info)
    setInfos({name:info.convName,img:{}})
    setUser(info.username)
    console.log(infos.name)
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
    <div className="flex h-screen w-screen antialiased text-gray-800">
      <Navbar imageUrl={userData.credentials.imageUrl} click={setlist} />
      <div className="flex flex-row h-full w-full overflow-hidden">
        <div className="p-2 w-2/6 bg-gray-50">
          <SearchP />
          
          
{friendList ?<CardList setConv={setConv} click={click}/>:
  <Messages
            parentGetUser={get_user}
            users={info.conversations}
            Click={Click}
          />
         

}
          
        </div>
        {name === "" ? (  <ConvNull /> ) : (
          <div>
            
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
          
        
      </div>
    </div>
  );
};

export default Messagerie;
