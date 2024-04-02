import React from "react";

import HeroIconImage from "../../../../assets/HeroIconImage.jpeg";
import DiamondImage from "../../../../assets/DiamondImage.png";
import VersaceLogo from "../../../../assets/VersaceLogo.png";
import ZaraLogo from "../../../../assets/ZaraLogo.png";
import GucciLogo from "../../../../assets/GucciLogo.png";
import PradaLogo from "../../../../assets/PradaLogo.png";
import CalvinKleinLogo from "../../../../assets/CalvinKleinLogo.png";

const HeroSection = () => {
  return (
    // complete div
    <div>
      {/* div for coloring */}
      <div className="bg-[#F2F0F1]">
        {/* div for division */}
        <div className="flex mx-20">
          {/* text divs */}
          <div className="w-1/2 ">
            <div className="w-4/5 mt-32">
              <h1 className="font-black text-6xl">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
            </div>
            <p className="text-xs w-4/5 font-extralight mt-3 text-gray-600">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>

            <button className="w-1/4 cursor-pointer bg-black text-white rounded-full text-xs font-normal h-11 mt-5 ">
              Shop Now
            </button>

            <div className="flex w-4/5 mt-8 space-x-4">
              <div className="w-1/3 border-r-2">
                <h1 className="font-semibold text-4xl">200+</h1>
                <p className="text-gray-600 font-extralight text-xs">
                  International Brands
                </p>
              </div>
              <div className="w-1/3 ml-3 border-r-2 ">
                <h1 className="text-4xl font-semibold">2000+</h1>
                <p className="text-gray-600 font-extralight text-xs">
                  High-Quality Products
                </p>
              </div>
              <div className="w-1/3 ml-3 ">
                <h1 className="text-4xl font-semibold">30000+</h1>
                <p className="text-gray-600 font-extralight text-xs">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>

          {/* image div */}
          <div className="w-1/2 mt-4 flex relative">
            <img
              src={DiamondImage}
              alt="HeroIconImage"
              className="absolute top-1/2 w-1/12 h-1/12 left-[5%]"
            ></img>
            <img src={HeroIconImage} alt="HeroIconImage"></img>
            <img
              src={DiamondImage}
              alt="HeroIconImage"
              className="absolute w-1/6 h-1/6 right-[8%] top-[10%]"
            ></img>
          </div>
        </div>
      </div>

      {/*  brands section */}
      <div className="bg-black h-20 px-20 flex items-center ">
        <div className="flex justify-between h-2/6 w-full">
          <img src={VersaceLogo} alt="VersaceLogo"></img>
          <img src={ZaraLogo} alt="ZaraLogo"></img>
          <img src={GucciLogo} alt="GucciLogo"></img>
          <img src={PradaLogo} alt="PradaLogo"></img>
          <img src={CalvinKleinLogo} alt="CalvinKleinLogo"></img>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
