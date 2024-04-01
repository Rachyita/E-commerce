import React from "react";
import HeroIconImage from "../../../assets/HeroIconImage.jpeg";

const HeroSection = () => {
  return (
    // complete div
    <div className="flex bg-[#f2f1f0]">

      {/* text div */}
      <div className="w-1/2">
        <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button>Shop Now</button>
      </div>

      {/* image div */}
      <div className="w-1/2">
        <img src={HeroIconImage} alt="HeroIconImage" className=""></img>
      </div>

    </div>
  );
};

export default HeroSection;
