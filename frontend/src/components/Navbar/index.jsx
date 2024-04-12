import React from "react";
import { Link } from "react-router-dom";

import CartLogo from "../../assets/CartLogo.png";
import ProfileLogo from "../../assets/ProfileLogo.png";
import SearchLogo from "../../assets/SearchLogo.png";

const Navbar = () => {
  return (
    // complete div<

    <div>
      <div className="bg-black text-white text-center py-2 text-sm flex space-x-2 place-content-center">
        <p>Sign up and get 20% off to your first order.</p>
        <Link to="/" className="underline underline-offset-4">
          Sign Up Now
        </Link>
      </div>
      <div className="bg-[#F2F0F1]">
        <div className="flex mx-20 mt-2 justify-around h-12">
          {/* shop co div */}
          <div className="font-bold text-3xl py-2 w=1/6">
            <h1>SHOP.CO</h1>
          </div>

          {/* list div */}
          <div className="flex  py-2 px-4 font-3xl leading-10 w-1/3 justify-center space-x-8">
            <Link to="">Shop</Link>
            <Link to="">On Sale</Link>
            <Link to="">New Arrivals</Link>
            <Link to="">Brands</Link>
          </div>

          {/* input div */}
          <div className="flex w-1/2 p-2 rounded-full bg-[#F0F0F0] h-10 mt-2 ">
            <img
              src={SearchLogo}
              alt="SearchLogo"
              className="h-5/6 pt-1 pl-1"
            />
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full bg-[#F0F0F0] ml-2 text-sm focus:outline-none"
            ></input>
          </div>

          {/* logo div */}
          <div className="flex w-1/12 justify-end p-2 space-x-2 h-5/6 mt-2">
            <img src={CartLogo} alt="CartLogo" />
            <img src={ProfileLogo} alt="ProfileLogo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
