import React from "react";
import {CustomerReview1, CustomerReview2, CustomerReview3, CustomerReview4, CustomerReview5, CustomerReview6, CustomerReview7, CustomerReview8} from "../../../../components/ReviewCart";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewSection = () => {
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="w-full ">
        <div className="w-full flex justify-center ">
          <div className="w-4/5 pt-28 text-5xl font-bold flex ">
            <p>OUR HAPPY CUSTOMERS</p>
          </div>
        </div>
        <div className="w-full  flex justify-center mt-12">
          <div className="w-10/12">
            <Slider {...settings}>
              <CustomerReview1 />
              <CustomerReview2 />
              <CustomerReview3 />
              <CustomerReview4 />
              <CustomerReview5 />
              <CustomerReview6 />
              <CustomerReview7 />
              <CustomerReview8 />
              
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewSection;
