import React from "react";

const BNewmsg = (props) => {
  return (
    <div className="flex flex-row -ml-14">
      
      <button onClick={props.open} className=" h-10 bg-blue-200  hover:bg-blue-300 hover:font-small transition duration-500 ease-in-out  rounded-lg focus:outline-none focus:shadow-outline inline-flex shadow text-white items-center font-bold justify-center">
      
      <p className="text-gray-600  text-md font-semibold w-20 md:visible sm:invisible invisible">

      Chater
        </p>
      </button>
    </div>
  );
};

export default BNewmsg;
