import React, { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import "./chatBody.css";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";
import UserProfile from "../userProfile/UserProfile";
import {getConversations,getRealtimeMessages} from '../../../Redux/Actions/dataAction'



const  ChatBody = () =>{
  const [unsub, setUnsub] = useState();
  const [infos, setInfos] = useState({ name: "", img: "" });
  const [prec, setPrec] = useState(infos.name);
  const [username, setUser] = useState("");
  const dispatch =useDispatch()
  const userData=useSelector((state)=>state.user)

  useEffect(() => {
    getConversations(dispatch, userData.credentials.username);
  }, []);

  const Click = (user) => {
    // if (prec != infos.name) {
      console.log(user)

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
    console.log(info.username)
    setUser(info.username);
    setPrec(infos.name);

    setInfos({
      name: name_user,
      img: img_user,
    });
    console.log(infos)
  };
 

  
    return (
      <div className="main__chatbody">
        <ChatList click={Click} get_user={get_user}/>
        <ChatContent convId={infos.name} image={infos.image} username={username} />
        <UserProfile username={username} image={infos.img} />
      </div>
    );
  
}
export default ChatBody
