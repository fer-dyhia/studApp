import React from "react";
import me from "../../img/me.jpg";
import Bonline from "../buttons/bonline";

const Connected = (props) => {
  return (
    <div className="flex flex-row">
      <img alt="profile pic" src={me} className="h-10 w-10 rounded-full" />
      <Bonline />
      <p className="pl-4 font-semibold">{props.name}</p>
    </div>
  );
};

export default Connected;
