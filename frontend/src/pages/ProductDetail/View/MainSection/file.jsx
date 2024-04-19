import React from "react";

import Front from "../../../../assets/Front.png";
import FrontS from "../../../../assets/FrontS.png";
import BackS from "../../../../assets/BackS.png";
import Zoom from "../../../../assets/Zoom.png";

import { FaStar } from "react-icons/fa";

const MainSection = () => {
  return (
    <div className="w-full lg:flex lg:px-16">
      <div className="lg:w-1/2  ">
        <div className="p-4  lg:flex grid gap-4 lg:h-96 ">
          {/* <img src={Front} className="w-full lg:hidden" /> */}
          <div className="flex lg:grid justify-between ">
            <img src={FrontS} className="h-28 " />
            <img src={BackS} className="h-28" />
            <img src={Zoom} className=" h-28 lg:visible " />
          </div>
          <img src={Front} className="  " />
        </div>
      </div>

      <div className="p-4">
        <div className="    pt-4 text-4xl font-bold ">
          <h1 className="bg-none">ONE LIFE GRAPHIC T-SHIRT</h1>
        </div>
        <div className="flex my-2 gap-1 text-12">
          <FaStar color="gold" size="1.5rem" />
          <p className="">4.5/5</p>
        </div>
        <basePrice className=" text-xl font-semibold block mb-1">
          $900
        </basePrice>

        <div className="text-[#00000099]  text-sm mb-2">
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </div>

        <label className="text-[#00000099]  text-sm ">Select Colors</label>

        <div className="flex mt-1 mb-3 gap-3">
          <button className=" bg-[#4F4631] size-6 rounded-full text-white">
            &#10003;{" "}
          </button>
          <button className=" bg-[#314F4A] size-6 rounded-full"></button>
          <button className=" bg-[#31344F] size-6 rounded-full"></button>
        </div>

        <text className="text-[#00000099]  text-sm ">Choose Size</text>
        <div className="flex text-[#00000099]  text-sm gap-2 mt-1">
          <button className="rounded-full bg-[#F0F0F0] px-4 py-2">Small</button>
          <button className="rounded-full bg-[#F0F0F0] px-4 py-2">
            Medium
          </button>
          <button className="rounded-full bg-black text-white px-4 py-2">
            Large
          </button>
          <button className="rounded-full bg-[#F0F0F0] px-4 py-2">
            X-Large
          </button>
        </div>
        <div className="w-full flex mt-2 ">
          <div className="flex w-1/3   mr-3">
            <button className="bg-[#F0F0F0] w-1/3 rounded-l-full text-xl">
              {" "}
              &#8722;
            </button>
            <button className="bg-[#F0F0F0] w-1/3 text-xl">1</button>
            <button className="bg-[#F0F0F0] w-1/3 rounded-r-full text-xl">
              &#43;
            </button>
          </div>
          {/* <button className="rounded-full bg-[#F0F0F0]  px-4 py-2 w-1/3 mr-3">
            1
          </button> */}
          <button className="rounded-full bg-black text-white px-4 py-2 w-3/5">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
