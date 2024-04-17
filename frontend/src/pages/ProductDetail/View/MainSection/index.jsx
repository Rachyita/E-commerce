import React from "react";

import Front from "../../../../assets/Front.png";
import FrontS from "../../../../assets/FrontS.png";
import BackS from "../../../../assets/BackS.png";
import Zoom from "../../../../assets/Zoom.png";

const MainSection = () => {
  return (
    <div className="lg:w-1/2">
      <div className="p-4 lg:flex">
        <img src={Front} className="w-full" />
        <div className="flex lg:grid pt-4 justify-between ">
          <img src={FrontS} className="object-fill" />
          <img src={BackS} className="" />
          <img src={Zoom} className="  lg:visible " />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
