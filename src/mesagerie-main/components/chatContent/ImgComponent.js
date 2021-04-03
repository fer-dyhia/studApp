import React from "react";
import ImageSending from "./ImageSending.js";

const ImgComponent = () => {
  return (
    <div className="flex flex-row absolute w-96 h-20 items-center justify-start bottom-10 left-16 bg-gray-50 bg-opacity-75 rounded">
      <ImageSending />
      <ImageSending />
      <ImageSending />
      <ImageSending />
    </div>
  );
};

export default ImgComponent;
