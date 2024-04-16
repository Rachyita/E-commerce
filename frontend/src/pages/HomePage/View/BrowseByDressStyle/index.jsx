import React from "react";
import { Link } from "react-router-dom";
import CasualStyle from "../../../../assets/CasualStyle.png";
import FormalStyle from "../../../../assets/FormalStyle.png";
import PartyStyle from "../../../../assets/PartyStyle.png";
import GymStyle from "../../../../assets/GymStyle.png";

const BrowseByDressStyle = () => {
  return (
    <div className="lg:py-10 lg:px-20 p-4">
      <div className="bg-[#F0F0F0] rounded-3xl lg:p-16 p-4 text-center">
        <h1 className="text-4xl font-black lg:pb-14">BROWSE BY DRESS STYLE</h1>
        <div>
          <div className="lg:flex w-full justify-center items-stretch">
            <Link to="#" className="m-2 lg:w-1/3 w-full">
              <img className=" w-full h-full  " src={CasualStyle} alt="" />
            </Link>
            <Link to="#" className="m-2 lg:w-2/3 w-full">
              <img className=" w-full h-full  " src={FormalStyle} alt="" />
            </Link>
          </div>
          <div className="lg:flex w-full justify-center">
            <Link to="#" className="m-2 lg:w-2/3 w-full">
              <img className=" w-full h-full  " src={PartyStyle} alt="" />
            </Link>
            <Link to="#" className="m-2 lg:w-1/3 w-full">
              <img className=" w-full h-full  " src={GymStyle} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseByDressStyle;
