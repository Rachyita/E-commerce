import React from "react";
import CasualStyle from "../../../../assets/CasualStyle.png";
import FormalStyle from "../../../../assets/FormalStyle.png";
import PartyStyle from "../../../../assets/PartyStyle.png";
import GymStyle from "../../../../assets/GymStyle.png";

const BrowseByDressStyle = () => {
  return (
    <div>
      <div className="py-16 mx-20 bg-[#F0F0F0] rounded-3xl px-16 h-full ">
        <div className="lg:w-11/12 w-8/12 justify-center flex ">
          <h1 className="text-5xl font-bold">BROWSE BY DRESS STYLE</h1>
        </div>
        <div className=" mt-10 ">
          <div className="w-full flex space-x-4 ">
            <img className="w-1/3 " src={CasualStyle} alt="CasualStyle"></img>
            <img className="w-2/3" src={FormalStyle} alt="FormalStyle"></img>
          </div>
          <div className="w-full flex mt-4 space-x-4">
            <img className="w-2/3" src={PartyStyle} alt="PartyStyle"></img>
            <img className="w-1/3" src={GymStyle} alt="GymStyle"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseByDressStyle;
