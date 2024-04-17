import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";

import VisaLogo from "../../assets/VisaLogo.png";
import MastercardLogo from "../../assets/MastercardLogo.png";
import PaypalLogo from "../../assets/PaypalLogo.png";
import ApplepayLogo from "../../assets/ApplepayLogo.png";
import GpayLogo from "../../assets/GpayLogo.png";

const Footer = () => {
  return (
    <>
      <div className="flex lg:p-16 pb-8 bg-Background-color w-full absolute">
        <div className="m-8 lg:flex w-full">
          <div className="lg:w-1/3 w-full">
            <div className=" w-1/7 mr-2 flex justify-start items-center">
              <h1 className=" text-3xl font-bold pb-4">SHOP.CO</h1>
            </div>
            <div className="lg:w-2/3 w-full">
              <p className="text-xs">
                We have clothes that suits your style and which you're proud to
                wear. From women to men.
              </p>
            </div>
            <div className="flex justify-start my-3">
              <div className="rounded-full border-2 border-inherit p-0.5">
                <div>
                  <FaTwitter size="1.2rem" />
                </div>
              </div>
              <div className="rounded-full border-2 border-inherit p-0.5">
                <div>
                  <FaFacebook size="1.2rem" />
                </div>
              </div>
              <div className="rounded-full border-2 border-inherit p-0.5">
                <div>
                  <FaInstagram size="1.2rem" />
                </div>
              </div>
              <div className="rounded-full border-2 border-inherit p-0.5">
                <div>
                  <DiGithubBadge size="1.2rem" />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:flex block  lg:w-2/3 w-full justify-between">
            <div className="flex lg:w-1/2 lg:justify-around justify-between">
              <div>
                <p className="font-bold pb-4  ">Company</p>
                <ul>
                  <li className="pb-3 text-sm text-gray-500">About</li>
                  <li className="pb-3 text-sm text-gray-500">Features</li>
                  <li className="pb-3 text-sm text-gray-500">Works</li>
                  <li className="pb-3 text-sm text-gray-500">Career</li>
                </ul>
              </div>
              <div>
                <p className="font-bold pb-4 ">Help</p>
                <ul>
                  <li className="pb-3 text-sm text-gray-500">
                    Customer Support
                  </li>
                  <li className="pb-3 text-sm text-gray-500">
                    {" "}
                    Delivery Details
                  </li>
                  <li className="pb-3 text-sm text-gray-500">
                    Terms & Conditions
                  </li>
                  <li className="pb-3 text-sm text-gray-500">Privacy Policy</li>
                </ul>
              </div>
            </div>
            <div className="flex lg:w-1/2 lg:justify-around justify-between ">
              <div>
                <p className="font-bold pb-4 ">FAQ</p>
                <ul>
                  <li className="pb-3 text-sm text-gray-500">Account</li>
                  <li className="pb-3 text-sm text-gray-500">
                    Manage Deliveries
                  </li>
                  <li className="pb-3 text-sm text-gray-500">Orders</li>
                  <li className="pb-3 text-sm text-gray-500">Payments</li>
                </ul>
              </div>
              <div>
                <p className="font-bold pb-4 ">Resources</p>
                <ul>
                  <li className="pb-3 text-sm text-gray-500"> Free eBooks</li>
                  <li className="pb-3 text-sm text-gray-500">
                    Development Tutorial
                  </li>
                  <li className="pb-3 text-sm text-gray-500">How to - Blog</li>
                  <li className="pb-3 text-sm text-gray-500">
                    Youtube Playlist
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full div flex relative mt-5 mb-14">
        <p className="text-xs text-gray-500 font-light space-y-4">
          Shop.co © 2000-2023, All Rights Reserved
        </p>
        <span className="flex absolute right-0">
          <img src={VisaLogo} alt="VisaLogo" className="shadow-lg" />
          <img
            src={MastercardLogo}
            alt="MastercardLogo"
            className="shadow-lg"
          />
          <img src={PaypalLogo} alt="PaypalLogo" className="shadow-lg" />
          <img src={ApplepayLogo} alt="ApplepayLogo" className="shadow-lg" />
          <img src={GpayLogo} alt="GpayLogo" className="shadow-lg" />
        </span>
      </div> */}
    </>
  );
};

export default Footer;
