import React from "react";

import msgg from "../../images/logo.png";

const ConvNull = () => {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <img src={msgg} className="w-56 h-56 rounded-full" />
      <button className="bg-blue-600 shadow-lg hover:bg-blue-500 text-blue-50 hover:text-white font-semibold py-1 px-1 rounded content-center focus:outline-none">
        <p>Nouveau message</p>
      </button>
    </div>
  );
};

export default ConvNull;
