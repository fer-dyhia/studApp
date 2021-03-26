import React from "react";
import img from "../../img/me.jpg";

const Person = (props) => {
  return (
    <div className="grid place-items-center">
      <img
        alt="profile pic"
        src={img}
        className="rounded-full h-24 w-24 flex items-center justify-center"
      />
      <p className="font-black">{props.name}</p>
    </div>
  );
};

export default Person;
