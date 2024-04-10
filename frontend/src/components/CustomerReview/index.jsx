import React from "react";
import ReactStars from "react-rating-stars-component";

function CustomerReview() {
  return (
    <>
      <div className="border rounded-lg p-4 m-4 ">
        <div>
          <ReactStars
            count={5}
            size={24}
            activeColor="#ffd700"
            isHalf={true}
            value={5}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
          />
          <p className="text-2xl font-bold mt-2 mb-2">Alex K.</p>
          <p className="text-s text-gray-500 text-wrap">
            "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”
          </p>
        </div>
      </div>
    </>
  );
}

export default CustomerReview;