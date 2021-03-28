import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";

const SearchP = () => {
  return (
    <div className="pt-2 relative mx-auto rounded-lg border-b-2 outline-none focus:border-none  shadow-xs text-gray-600">
      <input
        className="w-full rounded-lg outline-none bg-gray-50 h-10 px-5 pr-10 text-sm border-none transition duration-500 ease-in-out  focus:outline-none focus:border-4"
        type="search"
        name="search"
        placeholder="Search"
      />
      <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
        <span className="text-gray-600 h-4 w-4 text-xl">
          <BiSearchAlt2 />
        </span>
      </button>
    </div>
  );
};

export default SearchP;
