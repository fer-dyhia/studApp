import React from "react";
import img from "../../img/logov.png";

const BLogoname = () => {
  return (
    
    <img
      alt="profile pic"
      src={img}
      className="mt-2 rounded-full h-80 w-12 place-self-center flex items-center justify-center outline-none"
    />
  );
};

export default BLogoname;