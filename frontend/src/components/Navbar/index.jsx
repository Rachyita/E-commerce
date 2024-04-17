import React from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

import CartLogo from "../../assets/CartLogo.png";
import ProfileLogo from "../../assets/ProfileLogo.png";
import SearchLogo from "../../assets/SearchLogo.png";
import MenuIcon from "../../assets/MenuIcon.png";

const Navbar = () => {
  return (
    <div className=" w-full bg-white justify-center items-center sticky top-0 ">
      <div className="bg-black text-white text-center py-2  text-sm md:flex space-x-2 place-content-center">
        <p>Sign up and get 20% off to your first order.</p>
        <Link to="/" className="underline underline-offset-4">
          Sign Up Now
        </Link>
      </div>
      <br />

      <div className="w-full flex justify-center h-12 ">
        <div className=" w-1/12 flex justify-center items-center lg:hidden">
          <img src={MenuIcon} alt="" />
        </div>
        <div className=" w-1/7 mr-2 flex justify-center items-center">
          <h1 className=" text-3xl font-black">SHOP.CO</h1>
        </div>
        <div className="w-1/4 m-4 hidden lg:block">
          <ul className="flex items-center h-full w-full">
            <li className="w-1/5 text-center text-base">
              <Link>Shop</Link>
            </li>
            <li className="w-1/5 text-center text-base">
              <Link>On sale</Link>
            </li>
            <AnchorLink href="#course" className="w-1/3 text-center text-base">
              <Link className="w-full">New Arrivals</Link>
            </AnchorLink>
            <AnchorLink
              href="#TopSelling"
              className="w-1/4 text-center text-base"
            >
              <Link className="w-full">Top Selling</Link>
            </AnchorLink>
          </ul>
        </div>
        <div className="flex lg:w-1/3 w-fit">
          <div className="flex lg:w-full lg:border rounded-3xl mr-2 lg:bg-[#F0F0F0]">
            <label htmlFor="">
              <img src={SearchLogo} className=" w-6 m-3" alt="searchIcon" />
            </label>
            <input
              className="w-full rounded-3xl lg:block hidden focus:outline-none h-full bg-[#F0F0F0]"
              type="text"
              name="SearchBox"
              id=""
              placeholder="Search for products..."
            />
          </div>
        </div>
        <div className="flex w-20 justify-start m-2 items-center">
          {/* <button
            onClick={() => {
              state.navigate("/home/product/cart");
            }}
          > */}
          <img className="mr-3 w-6 h-6" src={CartLogo} alt="CartLogo" />
          {/* </button> */}
          <img className="mr-3 w-6 h-6" src={ProfileLogo} alt="ProfileLogo" />
        </div>
      </div>
      <br />
    </div>
  );
};

export default Navbar;
