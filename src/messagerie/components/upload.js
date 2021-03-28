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

const Upload = () => {
  return (
    <div className="font-sans h-screen overflow-y-scroll scrollbar p-1">
      <div className="flex flex-col flex-wrap w-full sm:flex-col sm:justify-around">
        <Uplocomp
          funct="Images"
          icone={<RiArrowRightSLine />}
          iconemd={<BsImages />}
        />
        <div className="flex flex-wrap flex-row">
          <Uploimg />
          <Uploimg />
          <Uploimg />
          <Uploimg />
          <Uploimg />
        </div>
        <Uplocomp
          funct="Fichiers"
          icone={<RiArrowRightSLine />}
          iconemd={<BsFiles />}
        />
        <div className="flex flex-col">
          <Uplofile />
          <Uplofile />
          <Uplofile />
          <Uplofile />
          <Uplofile />
        </div>
        <Uplocomp
          funct="Liens"
          icone={<RiArrowRightSLine />}
          iconemd={<RiLinksFill />}
        />
        <div className="flex flex-col">
          <Uplolink />
          <Uplolink />
          <Uplolink />
          <Uplolink />
          <Uplolink />
        </div>
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
