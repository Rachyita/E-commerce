import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import ReactStars from "react-star-ratings";

const CustomerReview = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [rating, setRating] = useState(0);

  const handleCustomerReview = async (data) => {
    console.log(data);
    const res = await axios.post("http://localhost:8000/CustomerReview", {
      Customer_Name: data.Customer_Name,
      Feedback: data.Feedback,
      Rating: rating,
    });
    console.log(res);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="lg:w-1/3 items-center shadow-2xl justify-center bg-white my-4 rounded-3xl pb-6 px-2">
        <div className="text-center w-full"></div>
        <form
          onSubmit={handleSubmit((data) => {
            handleCustomerReview(data);
          })}
          className="px-4 mt-4 "
        >
          <input
            type="text"
            placeholder="Customer Name"
            className="w-full pl-2 text-sm h-10 focus:outline-none my-2 border rounded placeholder:text-black"
            {...register("Customer_Name", {
              required: "Customer Name is required",
            })}
          />
          {errors?.Customer_Name && <p>{errors?.Customer_Name.message}</p>}

          <TextField
            id="outlined-basic"
            label="What's your feedback"
            variant="outlined"
            className="w-full pl-2 text-sm focus:outline-none my-2 border rounded placeholder-text-black"
            {...register("Feedback", {
              required: "Feedback is required",
            })}
          />
          {errors?.Feedback && <p>{errors?.Feedback.message}</p>}

          <ReactStars
            count={5}
            value={rating}
            size={24}
            onChange={(newRating) => setRating(newRating)}
            color2="#ffd700"
          />

          <button
            type="submit"
            className="bg-black text-white w-full rounded-lg mt-12 h-10 text-sm"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomerReview;
