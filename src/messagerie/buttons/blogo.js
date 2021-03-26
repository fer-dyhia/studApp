import React from "react";
import logo from "../../img/logo.png";

import img from "../../img/logo5.png";

const BLogo = () => {
  return (
    // <button>
    //   <img src={logo} className="w-10 sm:w-16 h-10 sm:h-16 rounded-full" />
    // </button>
    <img
      alt="profile pic"
      src={img}
      className="mt-2 rounded-full h-12 w-12 place-self-center flex items-center justify-center outline-none"
    />
  );
};

export default BLogo;
