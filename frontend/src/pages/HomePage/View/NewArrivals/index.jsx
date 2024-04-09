import React, { useEffect, useState } from "react";
import axios from "axios";

const NewArrivals = () => {
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
      <div className="bg-[#F0F0F0]">
        <div className="font-extrabold text-4xl text-center mt-10 ">
          NEW ARRIVALS
        </div>
        {/* <img></img> */}
      </div>
      <div className="flex">
        {Details?.map((data) => {
          return (
            <div>
              <div className="flex">
                <h5>{data.Product_Name}</h5>
                <p>{data.Price}</p>
                <img src={`http://localhost:8000/${data.Image}.png`} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewArrivals;
