import React from "react";
import Image from "../components/imagesize";
import me from "../../img/me.jpg";
import rcv from "../../img/receiver.jpg";

const Imgconv = (props) => {
  return (
    <div>
      {props.sent == "yes" ? (
        <div className="flex items-end justify-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs order-1 items-end">
            <div className="flex flex-col">
              <span className="md:w-48 md:h-48 sm:w-32 sm:h-32 w-28 h-28 py-2 rounded-lg rounded-br-none">
                {<Image imageUrl={props.imageUrl} />}
              </span>
              <span className="text-gray-400 text-md">{props.seen}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs order-2 items-start">
            <div className="flex">
              <span className="md:w-48 md:h-48 sm:w-32 sm:h-32 w-28 h-28 py-2 rounded-lg">
              {<Image imageUrl={props.imageUrl} />}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Imgconv;
