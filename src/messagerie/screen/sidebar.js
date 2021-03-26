import React from "react";
import Person from "../components/person";
import SearchP from "../components/searchP";
import Messages from "../components/messages";
import Btext from "../buttons/buttontext";

const Sidebar = (props) => {
  return (
    <div className="p-2 w-2/6 bg-blue-200">
      <div className="grid place-items-center">
        <Person name="Me" />
        <Btext bname="Available" />
      </div>
      <SearchP />
      <Messages parentGetUser={props.get_user()} />
    </div>
  );
};

export default Sidebar;
