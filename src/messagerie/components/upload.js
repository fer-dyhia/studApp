import React from "react";

import { RiArrowRightSLine } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";
import { RiLinksFill } from "react-icons/ri";

import { BsImages } from "react-icons/bs";
import { BsFiles } from "react-icons/bs";
import Uplocomp from "./uplocomp";
import Uploimg from "./uploimg";
import Uplofile from "./uplofile";
import Uplolink from "./uplolink";
import ImageGridList from "./imageGallery"

const Upload = () => {
  return (
    <div className="font-sans h-screen overflow-y-scroll no-scrollbar p-1">
      <div className="flex flex-col flex-wrap w-full sm:flex-col sm:justify-around">
        <Uplocomp
          funct="Images"
         // icone={<RiArrowRightSLine />}
          //iconemd={<BsImages />}
        />
        

        {/* <div className="flex flex-wrap">
          <Uploimg />
          <Uploimg />
          <Uploimg />
          <Uploimg />
          <Uploimg />
        </div> */}
        
      </div>
      <ImageGridList/>
    </div>
  );
};

export default Upload;
