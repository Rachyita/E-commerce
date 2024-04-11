import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SubmitReview = () => {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    
  } = useForm();

  const handleReview = async (data) => {
    console.log(data);
    const res = await axios.post("http://localhost:8000/SubmitReview", {
      Customer_Name: data.Customer_Name,
      Rating: data.Rating,
      Feedback: data.Feedback,
    });
    
    console.log(res);
    
    
  };

  return (
    //  main div
    <div className="flex justify-center items-center h-screen">
      <div className="lg:w-1/3 items-center shadow-2xl justify-center bg-white my-4 rounded-3xl pb-6 px-2">
        {/*  text div */}
        <div className="text-center w-full"></div>

        {/* products div */}
        <form onSubmit={handleSubmit(handleReview)} className="px-4 mt-4">
          <div>
            <label
              htmlFor="Rating"
              {...register("Rating", { required: "Rating is required" })}
            >
              Rate us out of 5:
            </label>
          </div>
          <div className="flex space-x-4">
            <span>
              <input
                type="radio"
                id="1"
                value="1"
                name="Rating"
                {...register("Rating", { required: "Rating is required" })}
              />
              <label htmlFor="1">1</label>
            </span>
            <span>
              <input
                type="radio"
                id="2"
                value="2"
                name="Rating"
                {...register("Rating", { required: "Rating is required" })}
              />
              <label htmlFor="2">2</label>
            </span>
            <span>
              <input
                type="radio"
                id="3"
                value="3"
                name="Rating"
                {...register("Rating", { required: "Rating is required" })}
              />
              <label htmlFor="3">3</label>
            </span>
            <span>
              <input
                type="radio"
                id="4"
                value="4"
                name="Rating"
                {...register("Rating", { required: "Rating is required" })}
              />
              <label htmlFor="4">4</label>
            </span>
            <span>
              <input
                type="radio"
                id="5"
                value="5"
                name="Rating"
                {...register("Rating", { required: "Rating is required" })}
              />
              <label htmlFor="5">5</label>
            </span>
          </div>
          {errors?.Rating && <p>{errors?.Rating.message}</p>}

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
            label="Feedback"
            variant="outlined"
            className="w-full pl-2 text-sm h-6 focus:outline-none my-2 border rounded placeholder:text-black"
            {...register("Feedback", {
              required: "Feedback is required",
            })}
          />
          {errors?.Feedback && <p>{errors?.Feedback.message}</p>}

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

export default SubmitReview;
