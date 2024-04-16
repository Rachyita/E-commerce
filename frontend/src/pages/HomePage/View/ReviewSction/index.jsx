import React from "react";
import {
  CustomerReview1,
  CustomerReview2,
  CustomerReview3,
  // CustomerReview4,
  // CustomerReview5,
  // CustomerReview6,
  // CustomerReview7,
  // CustomerReview8,
} from "../../../../components/ReviewCart";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const ReviewSection = () => {
  // const settings = {
  // dots: true,
  // infinite: false,
  // speed: 500,
  // slidesToShow: 3,
  // slidesToScroll: 1,
  // };
  return (
    <>
      <div className="flex pt-4 px-4 lg:px-20 lg:text-5xl text-4xl font-bold text-center lg:text-left">
        <h1>OUR HAPPY CUSTOMERS</h1>
      </div>

      <div className="hidden lg:visible lg:flex lg:px-20 p-4 justify-center">
        <CustomerReview1 />

        <CustomerReview2 />

        <CustomerReview3 />
      </div>

      <div className="visible lg:hidden  ">
        <CustomerReview1 />
      </div>
    </>
  );
};

export default ReviewSection;
