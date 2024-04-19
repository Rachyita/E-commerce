import React, { useState } from "react";
import CustomerReviewsTab from "../CustomerReviewsTab";
// import ProductDetailsTab from "./ProductDetailsTab";

// import FaqTab from "./FaqTab";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("customer-reviews");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="my-2">
      <div className="flex mb-4 w-full">
        <button
          className={`border-b-2 px-4 py-2 w-1/3 text-sm${
            activeTab === "product-details"
              ? " text-black border-black"
              : " text-[#00000099] border-gray-200"
          }`}
          onClick={() => handleTabClick("product-details")}
        >
          Product Details
        </button>
        <button
          className={` border-b-2 px-4 py-2 w-1/3   text-sm${
            activeTab === "customer-reviews"
              ? " text-black border-black"
              : " text-[#00000099] border-gray-200"
          }`}
          onClick={() => handleTabClick("customer-reviews")}
        >
          Customer Reviews
        </button>
        <button
          className={`border-b-2 py-2 w-1/3 text-sm${
            activeTab === "faq"
              ? " text-black border-black"
              : " text-[#00000099] border-gray-200"
          }`}
          onClick={() => handleTabClick("faq")}
        >
          FAQ
        </button>
      </div>
      <div>
        {/* {activeTab === "product-details" && <ProductDetailsTab />} */}
        {activeTab === "customer-reviews" && <CustomerReviewsTab />}
        {/* {activeTab === "faq" && <FaqTab />} */}
      </div>
    </div>
  );
};

export default TabSection;
