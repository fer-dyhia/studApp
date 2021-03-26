import React from "react";
import me from "../../img/me.jpg";
import rcv from "../../img/receiver.jpg";

const uniqueConv = (props) => {
  return (
    <div className="flex items-end justify-end">
      <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
        <div>
          <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-gradient-to-r from-purple-700 via-blue-600 to-blue-400 text-white ">
            Salut
          </span>
        </div>
      </div>
      <img src={me} alt="My profile" className="w-6 h-6 rounded-full order-2" />
    </div>
  );
};

export default uniqueConv;
