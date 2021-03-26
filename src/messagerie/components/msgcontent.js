import React from "react";
import me from "../../img/me.jpg";
import rcv from "../../img/receiver.jpg";

const Msgcontent = (props) => {
  return (
    <div>
      {props.sent == "yes" ? (
        <div className="flex items-end justify-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
            <div>
              <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-yellow-500 text-white">
                {props.body}
              </span>
              <span className="">{props.seen}</span>
            </div>
          </div>
          <img
            src={me}
            alt="My profile"
            className="w-6 h-6 rounded-full order-2"
          />
        </div>
      ) : (
        <div className="flex items-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
            <div>
              <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                {props.body}
              </span>
            </div>
          </div>
          <img
            src={rcv}
            alt="My profile"
            className="w-6 h-6 rounded-full order-1"
          />
        </div>
      )}
    </div>
  );
};

export default Msgcontent;
