import React from "react";

const Uplocomp = (props) => {
  return (
    <div className="mt-4 w-full">
      <button className="w-full flex justify-between items-center py-3 px-6 cursor-pointer transition duration-700 ease-in-out text-gray-700 hover:text-gray-600 rounded bg-gray-50 hover:bg-gray-200 focus:outline-none rounded">
        <span className="flex items-center">
          <span className="mx-2 font-medium md:visible invisible">
            {props.funct}
          </span>
        </span>
        <span className="text-xl md:visible invisible">{props.icone}</span>
        <span className="absolute mx-9 mr-2 text-xl md:invisible visible">
          {props.iconemd}
        </span>
      </button>
    </div>
  );
};

export default Uplocomp;
