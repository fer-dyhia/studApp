import React from "react";

const Btext = (props) => {
  return (
    <button className="bg-transparent shadow-lg hover:bg-blue-400 text-blue-400 hover text-white font-semibold hover:text-white py-1 px-1 rounded content-center focus:outline-none">
      <p>{props.bname}</p>
    </button>
  );
};

export default Btext;
