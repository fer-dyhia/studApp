import React from "react";

const BNewmsg = () => {
  return (
    <div className="flex flex-row -ml-14">
      <p className="text-gray-400 text-md w-20 md:visible sm:invisible invisible">
        Ajouter
      </p>
      <button className=" w-7 h-7 rounded-full focus:outline-none focus:shadow-outline inline-flex shadow bg-yellow-500 hover:bg-yellow-600 text-white items-center font-bold justify-center">
        <p>+</p>
      </button>
    </div>
  );
};

export default BNewmsg;
