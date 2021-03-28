import React from "react";
import { AiOutlineFilePdf } from "react-icons/ai";

const Uplofile = () => {
  return (
    <div className="flex flex-row">
      <AiOutlineFilePdf />
      <span className="ml-2 -mt-1 hover:underline text-blue-400 cursor-pointer">
        File name
      </span>
    </div>
  );
};

export default Uplofile;
