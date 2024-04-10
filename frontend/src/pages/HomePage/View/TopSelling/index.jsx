import React, { useEffect, useState } from "react";
import axios from "axios";

const TopSelling = () => {
  const [Details, setDetails] = useState();
  const products = async (data) => {
    const res = await axios.get("http://localhost:8000/Home");
    console.log(res.data);
    setDetails(res.data);
  };
  useEffect(() => {
    products();
  }, []);

  return (
    <div>
      {/*  Top Selling div */}
      <div className="pt-16"></div>
      <div className="lg:w-11/12 w-8/12 justify-center flex mx-20">
        <h1 className="text-5xl font-bold">TOP SELLING</h1>
      </div>

      {/* main div */}
      <div className="mx-20">
        <div className="flex mt-10">
          {Details ? (
            Details.filter((data) => data.Description === "Top Selling").map(
              (data) => {
                return (
                  <div key={data._id}>
                    <div className="flex justify-center flex-wrap">
                      <div className="flex flex-col items-start">
                        <div className="mx-4">
                          <img
                            src={`http://localhost:8000/${data.Image}.png`}
                          />
                        </div>
                        <h5 className="mt-4 ml-4 text-left font-bold">
                          {data.Product_Name}
                        </h5>
                        <p className="mt-1 ml-4 text-left font-semibold">
                          ${data.Price}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }
            )
          ) : (
            <div>No data available</div>
          )}
        </div>
      </div>

      {/* view all div */}
      <div className="w-full flex justify-center pb-20">
        <button className="bg-white lg:w-1/12 w-1/6 h-12 mt-12 rounded-3xl  text-black border">
          View All
        </button>
      </div>
    </div>
  );
};

export default TopSelling;
