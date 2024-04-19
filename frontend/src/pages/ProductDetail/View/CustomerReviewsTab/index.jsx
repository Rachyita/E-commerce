import React from "react";
import { Link } from "react-router-dom";
import {
  CustomerReview1,
  CustomerReview2,
  CustomerReview5,
  CustomerReview7,
  CustomerReview8,
  CustomerReview4,
} from "../../../../components/ReviewCart";

const CustomerReviewsTab = () => {
  return (
    <div>
      <div className="flex justify-between lg:px-16 px-4">
        <text className="font-bold text-lg">All Reviews</text>
        <Link
          to="/SubmitReview"
          className="rounded-full bg-black text-white px-4 py-2 text-sm "
        >
          {" "}
          Write a Review{" "}
        </Link>
      </div>

      <div className="hidden lg:visible lg:flex lg:px-20 p-4 justify-center">
        <CustomerReview1 />

        <CustomerReview2 />
      </div>
      <div className="hidden lg:visible lg:flex lg:px-20 p-4 justify-center ">
        <CustomerReview5 />

        <CustomerReview7 />
      </div>
      <div className="hidden lg:visible lg:flex lg:px-20 p-4 justify-center">
        <CustomerReview8 />

        <CustomerReview4 />
      </div>

      <div className="visible lg:hidden  ">
        <CustomerReview1 />
        <CustomerReview2 />

        <CustomerReview5 />
      </div>

      <div className="w-full flex justify-center ">
        <button className="lg:w-1/12 w-1/6 h-12 mt-6 rounded-3xl  text-black border">
          View All
        </button>
      </div>
    </div>
  );
};

export default CustomerReviewsTab;
