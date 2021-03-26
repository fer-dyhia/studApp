import React from "react";
import Conversation from "../components/conversation";
import Disponible from "../components/disponible";

const Chat = (props) => {
  return (
    <Conversation cnvslctd="yes" name={props.name} img={props.img} grp="yes" />
  );
};

export default Chat;
