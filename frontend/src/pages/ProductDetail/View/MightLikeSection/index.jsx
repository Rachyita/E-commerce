import React, { useEffect, useState } from "react";
import axios from "axios";

const MightLikeSection = () => {
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
    <div id="course">
      {/*  New Arrivals div */}

      <div className="lg:w-11/12 w-8/12 justify-center flex mx-20 pt-12 text-5xl font-bold ">
        <h1>YOU MIGHT ALSO LIKE</h1>
      </div>

      {/* main div */}

      <div className="lg:flex mt-8 justify-center">
        {Details ? (
          Details.filter((data) => data.Description === "New Arrivals").map(
            (data) => {
              return (
                <div key={data._id}>
                  <div className="flex justify-center  my-2">
                    <div className="flex-col mx-4 ">
                      <img src={`http://localhost:8000/${data.Image}.png`} />

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

      {/* view all div */}
      <div className="w-full flex justify-center ">
        <button className="lg:w-1/12 w-1/6 h-12 mt-6 rounded-3xl  text-black border">
          View All
        </button>
      </div>
    </div>
  );
};

export default MightLikeSection;
