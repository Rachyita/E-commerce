import React, { useState } from "react";

import Front from "../../../../assets/Front.png";
import FrontS from "../../../../assets/FrontS.png";
import BackS from "../../../../assets/BackS.png";
import Zoom from "../../../../assets/Zoom.png";

import { FaStar } from "react-icons/fa";

const MainSection = () => {
  const [displayedImage, setDisplayedImage] = useState(Front);
  const handleImageClick = (image) => {
    setDisplayedImage(image);
  };

  const [selectedColor, setSelectedColor] = useState("brown");
  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const [selectedSize, setSelectedSize] = useState("large");
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="w-full lg:flex lg:px-16">
      <div className="lg:w-1/2  ">
        <div className="p-4  lg:flex grid gap-4 lg:h-96 ">
          <div className="flex lg:grid justify-between ">
            <img
              src={FrontS}
              className="h-28 cursor-pointer"
              onClick={() => handleImageClick(FrontS)}
            />
            <img
              src={BackS}
              className="h-28 cursor-pointer"
              onClick={() => handleImageClick(BackS)}
            />
            <img
              src={Zoom}
              className="h-28 lg:visible cursor-pointer"
              onClick={() => handleImageClick(Zoom)}
            />
          </div>
          <img src={displayedImage} className=" " />
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
        <p className=" text-xl font-semibold block mb-1">$900</p>

        <div className="text-[#00000099]  text-sm mb-2">
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </div>

        <label className="text-[#00000099]  text-sm ">Select Colors</label>

        <div className="flex mt-1 mb-3 gap-3">
          <button
            className={`size-6 rounded-full text-white ${
              selectedColor === "brown"
                ? "bg-[#4F4631] checked"
                : "bg-[#4F4631]"
            }`}
            onClick={() => handleColorClick("brown")}
          >
            {selectedColor === "brown" && <span>&#10003;</span>}
          </button>

          <button
            className={`size-6 rounded-full text-white ${
              selectedColor === "green"
                ? "bg-[#314F4A] checked"
                : "bg-[#314F4A]"
            }`}
            onClick={() => handleColorClick("green")}
          >
            {selectedColor === "green" && <span>&#10003;</span>}
          </button>

          <button
            className={`size-6 rounded-full text-white ${
              selectedColor === "blue"
                ? "bg-[#31344F]  checked"
                : "bg-[#31344F] "
            }`}
            onClick={() => handleColorClick("blue")}
          >
            {selectedColor === "blue" && <span>&#10003;</span>}
          </button>

          {/* <button className=" bg-[#4F4631] size-6 rounded-full text-white">
            &#10003;{" "}
          </button> */}
          {/* <button className=" bg-[#314F4A] size-6 rounded-full"></button> */}
          {/* <button className=" bg-[#31344F] size-6 rounded-full"></button> */}
        </div>

        <p className="text-[#00000099]  text-sm ">Choose Size</p>
        <div className="flex text-[#00000099]  text-sm gap-2 mt-1">
          <button
            className={`rounded-full px-4 py-2 ${
              selectedSize === "small" ? "bg-black text-white" : "bg-[#F0F0F0]"
            }`}
            onClick={() => handleSizeClick("small")}
          >
            Small
          </button>

          <button
            className={`rounded-full px-4 py-2 ${
              selectedSize === "medium" ? "bg-black text-white" : "bg-[#F0F0F0]"
            }`}
            onClick={() => handleSizeClick("medium")}
          >
            Medium
          </button>

          <button
            className={`rounded-full px-4 py-2 ${
              selectedSize === "large" ? "bg-black text-white" : "bg-[#F0F0F0]"
            }`}
            onClick={() => handleSizeClick("large")}
          >
            Large
          </button>

          <button
            className={`rounded-full px-4 py-2 ${
              selectedSize === "x-large"
                ? "bg-black text-white"
                : "bg-[#F0F0F0]"
            }`}
            onClick={() => handleSizeClick("x-large")}
          >
            X-Large
          </button>

          {/* <button className="rounded-full bg-[#F0F0F0] px-4 py-2">Small</button> */}
          {/* <button className="rounded-full bg-[#F0F0F0] px-4 py-2">
            Medium
          </button>
          <button className="rounded-full bg-black text-white px-4 py-2">
            Large
          </button>
          <button className="rounded-full bg-[#F0F0F0] px-4 py-2">
            X-Large
          </button> */}
        </div>
        <div className="w-full flex mt-2 ">
          <div className="flex w-1/3 mr-3">
            <button
              className="bg-[#F0F0F0] w-1/3 rounded-l-full text-xl"
              onClick={handleDecrement}
            >
              &#8722;
            </button>
            <button className="bg-[#F0F0F0] w-1/3 text-xl">{count}</button>
            <button
              className="bg-[#F0F0F0] w-1/3 rounded-r-full text-xl"
              onClick={handleIncrement}
            >
              &#43;
            </button>
          </div>

          {/* <div className="flex w-1/3   mr-3">
            <button className="bg-[#F0F0F0] w-1/3 rounded-l-full text-xl">
              {" "}
              &#8722;
            </button>
            <button className="bg-[#F0F0F0] w-1/3 text-xl">1</button>
            <button className="bg-[#F0F0F0] w-1/3 rounded-r-full text-xl">
              &#43;
            </button>
          </div> */}
          <button className="rounded-full bg-black text-white px-4 py-2 w-3/5">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
