import React from "react";

const Imagesize = (props) => {
  return (
    <div>
      <img src={props.imageUrl} className="w-full h-full rounded-md" />
    </div>
  );
};

export default Imagesize;
