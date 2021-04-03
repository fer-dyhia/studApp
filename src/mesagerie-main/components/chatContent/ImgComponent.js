import React from "react";
import ImageSent from "./ImageSending.js";

const ImgComponent = () => {
  return (
    <div className="flex flex-row absolute w-96 h-20 items-center justify-center bottom-10 left-16 bg-gray-50 bg-opacity-75 rounded">
      <ImageSent />
      <ImageSent />
      <ImageSent />
      <ImageSent />
    </div>
  );
};

export default ImgComponent;
