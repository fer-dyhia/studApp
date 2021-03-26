import React from "react";
import frlist from "../../img/friends.png";

const BFriends = () => {
  return (
    <button className="mb-20 ml-2 w-10 h-10 rounded-full">
      <img src={frlist} className="rounded-full" />
    </button>
  );
};

export default BFriends;
