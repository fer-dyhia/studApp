import React from "react";
import Menu from "./menu";

const Dropmenu = () => {
  const Click = () => {
    return true;
  };

  return (
    <div>
      <button
        onClick={Click}
        type="button"
        className="inline-flex items-center justify-center relative z-1 p-2 transition-colors duration-200 transform rounded-full hover:bg-blue-500 hover:text-gray-100 dark:hover:bg-blue-500 focus:text-gray-100 focus:outline-none focus:bg-blue-400 dark:focus:bg-blue-400"
      >
        <svg
          className="h-3 w-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <Menu />
    </div>
  );
};

export default Dropmenu;
