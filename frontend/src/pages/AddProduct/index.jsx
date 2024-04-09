import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleProduct = async (data) => {
    console.log(data);
    const res = await axios.post("http://localhost:8000/addProduct", {
      Product_Name: data.Product_Name,
      Price: data.Price,
      Gender: data.Gender,
      Category: data.Category,
      Stock: data.Stock,
      Brand: data.Brand,
      Description: data.Description,
    });
    // console.log(res);
    // alert("Product Added");
    // reset();
    console.log(res);
    alert("Product Added");

    // Check if reset() is invoked
    console.log("Resetting form...");
    reset();
    console.log("Form reset.");
  };

  return (
    //  main div
    <div className="flex justify-center items-center h-screen">
      <div className="lg:w-1/3 items-center shadow-2xl justify-center bg-white my-4 rounded-3xl pb-6 px-2">
        {/*  text div */}
        <div className="text-center w-full"></div>

        {/* products div */}
        <form
          onSubmit={handleSubmit((data) => {
            handleProduct(data);
          })}
          className="px-4 mt-4 "
        >
          <input
            type="text"
            placeholder="Product Name"
            className="w-full pl-2 text-sm h-10 focus:outline-none my-2 border rounded placeholder:text-black"
            {...register("Product_Name", {
              required: "Product Name is required",
            })}
          />
          {errors?.Product_Name && <p>{errors?.Product_Name.message}</p>}

          <input
            type="number"
            placeholder="Price"
            className="w-full pl-2 text-sm h-10 focus:outline-none my-2 border rounded placeholder:text-black"
            {...register("Price", { required: "Price is required" })}
          />
          {errors?.Price && <p>{errors?.Price.message}</p>}

          <select
            className="w-full pl-2 text-sm h-10 focus:outline-none my-2 border rounded placeholder:text-black"
            {...register("Gender", { required: "Gender is required" })}
          >
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors?.Gender && <p>{errors?.Gender.message}</p>}

          <select
            className="w-full pl-2 text-sm h-10 focus:outline-none my-2 border rounded placeholder:text-black"
            {...register("Occasion", { required: "Occasion is required" })}
          >
            <option value="">Occasion</option>
            <option value="Casual">Casual</option>
            <option value="Formal">Formal</option>
            <option value="Party">Party</option>
            <option value="Gym">Gym</option>
          </select>
          {errors?.Occasion && <p>{errors?.Occasion.message}</p>}

          <select
            className="w-full pl-2 text-sm h-10 focus:outline-none my-2 border rounded placeholder:text-black"
            {...register("Category", { required: "Category is required" })}
          >
            <option value="">Category</option>
            <option value="Top">Top</option>
            <option value="Bottom">Bottom</option>
          </select>
          {errors?.Category && <p>{errors?.Category.message}</p>}

          <input
            type="number"
            placeholder="Stock"
            className="w-full pl-2 text-sm h-10 focus:outline-none my-2 border rounded placeholder:text-black"
            {...register("Stock", { required: "Stock is required" })}
          />
          {errors?.Stock && <p>{errors?.Stock.message}</p>}

          <input
            type="text"
            placeholder="Brand"
            className="w-full pl-2 text-sm h-10 focus:outline-none my-2 border rounded placeholder:text-black"
            {...register("Brand", { required: "Brand is required" })}
          />
          {errors?.Brand && <p>{errors?.Brand.message}</p>}

          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            className="w-full pl-2 text-sm  h-6 focus:outline-none my-2 border rounded placeholder-text-black"
            {...register("Description", {
              required: "Description is required",
            })}
          />
          {errors?.Description && <p>{errors?.Description.message}</p>}

          {/* <hr className="my-2" /> */}
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

export default AddProduct;
