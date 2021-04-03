import React from "react";
import ImageSending from "./ImageSending.js";

const ImgComponent = (props) => {
  return (
    <div className="flex flex-row absolute w-96 h-20 items-center justify-start bottom-10 left-16 rounded">
      <ImageSending image={props.image} removeImage={()=>props.removeImage()}/>
      
    </div>
  );
};

export default ImgComponent;
