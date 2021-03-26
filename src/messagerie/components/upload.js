import React from "react";

import { RiArrowRightSLine } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";
import { RiLinksFill } from "react-icons/ri";

import { BsImages } from "react-icons/bs";
import { BsFiles } from "react-icons/bs";
import Uplocomp from "./uplocomp";

const Upload = () => {
  return (
    <div className="font-sans">
      <div className="flex flex-col flex-wrap w-full sm:flex-col sm:justify-around">
        <Uplocomp
          funct="Images"
          icone={<RiArrowRightSLine />}
          iconemd={<BsImages />}
        />
        <Uplocomp
          funct="Fichiers"
          icone={<RiArrowRightSLine />}
          iconemd={<BsFiles />}
        />
        <Uplocomp
          funct="Liens"
          icone={<RiArrowRightSLine />}
          iconemd={<RiLinksFill />}
        />
        <Uplocomp
          funct="Recherche"
          icone={<BiSearchAlt />}
          iconemd={<BiSearchAlt />}
        />
      </div>
    </div>
  );
};

export default Upload;
