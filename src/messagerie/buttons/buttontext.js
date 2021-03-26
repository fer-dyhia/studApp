import React from "react";

const Btext = (props) => {
  return (
    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold hover:text-white py-1 px-1 rounded content-center focus:outline-none">
      <p>{props.bname}</p>
    </button>
  );
};

export default Btext;
