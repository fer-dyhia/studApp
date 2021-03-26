import React from "react";

import msgg from "../../img/div.png";

import Btext from "../buttons/buttontext";


const ConvNull = () => {
  return (
    <div className="flex flex-col w-4/6 h-full items-center justify-center">
      <img src={msgg} className="w-56 h-56 rounded-full" />
      <Btext bname="Nouveau message" />
    </div>
  );
};

export default ConvNull;
