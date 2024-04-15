import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";

import VisaLogo from "../../assets/VisaLogo.png";
import MastercardLogo from "../../assets/MastercardLogo.png";
import PaypalLogo from "../../assets/PaypalLogo.png";
import ApplepayLogo from "../../assets/ApplepayLogo.png";
import GpayLogo from "../../assets/GpayLogo.png";

const Footer = () => {
  return (
    <div className="mx-20 ">
      <div className="bg-black rounded-3xl w-full mt-20 flex">
        <div className="text-white text-5xl font-semibold w-3/5 p-10">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </div>

        <div className=" mx-16 my-10 w-2/5 ">
          <div className=" flex h-10 mb-1">
            <span className="bg-white rounded-l-full pl-3 pt-3">
              <TfiEmail size="1rem " />
            </span>
            <input
              placeholder="Enter your email address"
              className="rounded-r-full w-full pl-2 placeholder:text-gray-400 focus:outline-none placeholder:text-sm"
            />
          </div>
          <button className="bg-white text-center rounded-full w-full text-base h-10 mt-1">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      {/* main div */}
      <div className="my-10 w-full flex gap-x-28">
        {/* div 1 */}
        <div className="w-1/5 space-y-4">
          {/* div 1.1 */}
          <div className="font-bold text-3xl ">
            <h1>SHOP.CO</h1>
          </div>

          {/* div 1.2 */}
          <p className="text-xs text-gray-500 font-light ">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>

          {/* div 1.3 */}
          <div className="flex space-x-0.5 ">
            <div className="rounded-full border-2 border-inherit p-0.5">
              <div>
                <FaTwitter size="1.2rem " />
              </div>
            </div>
            <div className="rounded-full border-2 border-inherit p-0.5">
              <div>
                <FaFacebook size="1.2rem " />
              </div>
            </div>
            <div className="rounded-full border-2 border-inherit p-0.5">
              <div>
                <FaInstagram size="1.2rem " />
              </div>
            </div>
            <div className="rounded-full border-2 border-inherit p-0.5">
              <div>
                <DiGithubBadge size="1.2rem " />
              </div>
            </div>
          </div>
        </div>

        {/* div 2 */}
        <div className="w-1/5 space-y-7 ">
          <h6 className="font-mono text-sm">COMPANY</h6>
          <div className="text-xs text-gray-500 font-light space-y-4">
            <p>About</p>
            <p>Features</p>
            <p>Works</p>
            <p>Career</p>
          </div>
        </div>

        {/* div3 */}
        <div className="w-1/5 space-y-7 ">
          <h6 className="font-mono text-sm">HELP</h6>
          <div className="text-xs text-gray-500 font-light space-y-4">
            <p>Customer Support</p>
            <p>Delivery Details</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>

        {/* div4 */}
        <div className="w-1/5 space-y-7 ">
          <h6 className="font-mono text-sm">FAQ</h6>
          <div className="text-xs text-gray-500 font-light space-y-4">
            <p>Account</p>
            <p>Manage Deliveries</p>
            <p>Orders</p>
            <p>Payments</p>
          </div>
        </div>

        {/* div5 */}
        <div className="w-1/5 space-y-7 ">
          <h6 className="font-mono text-sm">RESOURCES</h6>
          <div className="text-xs text-gray-500 font-light space-y-4">
            <p>Free eBooks</p>
            <p>Development Tutorial</p>
            <p>How to - Blog</p>
            <p>Youtube Playlist</p>
          </div>
        </div>
      </div>

      <hr />

      <div className="w-full div flex relative mt-5 mb-14 ">
        <p className="text-xs text-gray-500 font-light space-y-4">
          Shop.co © 2000-2023, All Rights Reserved
        </p>
        <span className="flex absolute right-0 ">
          <img src={VisaLogo} alt="VisaLogo" className="shadow-lg " />
          <img
            src={MastercardLogo}
            alt="MastercardLogo"
            className="shadow-lg"
          />
          <img src={PaypalLogo} alt="PaypalLogo" className="shadow-lg" />
          <img src={ApplepayLogo} alt="ApplepayLogo" className="shadow-lg" />
          <img src={GpayLogo} alt="GpayLogo" className="shadow-lg" />
        </span>
      </div>
    </div>
  );
};

export default Footer;
