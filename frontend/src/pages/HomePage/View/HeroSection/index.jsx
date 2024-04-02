import React from "react";
import HeroIconImage from "../../../../assets/HeroIconImage.jpeg";
import DiamondImage from "../../../../assets/DiamondImage.png";

const HeroSection = () => {
  return (
    // complete div
    <div className="bg-[#F2F0F1]">
      <div className="flex mx-20">
        {/* text div */}
        <div className="w-1/2 ">
          <div className="w-4/5 mt-32">
            <h1 className="font-black text-6xl">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
          </div>
          <p className="text-sm w-4/5 font-extralight mt-3 text-gray-600">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="w-1/4 cursor-pointer bg-black text-white rounded-full text-xs font-normal h-11 mt-5 ">
            Shop Now
          </button>
        </div>
        <div className="flex">
          <div>
            <h1>200+</h1>
          </div>
          <div></div>
          <div></div>
        </div>

        {/* image div */}
        <div className="w-1/2 mt-4 flex relative">
          <img src={DiamondImage} alt="HeroIconImage" className="absolute top-1/2 w-1/12 h-1/12 left-[5%]"></img>
          <img src={HeroIconImage} alt="HeroIconImage" className=""></img>
          <img src={DiamondImage} alt="HeroIconImage" className="absolute w-1/6 h-1/6 right-[8%] top-[10%]"></img>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
