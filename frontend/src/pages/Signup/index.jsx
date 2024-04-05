import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useForm } from "react-hook-form";

import { FiGlobe } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignup = async (data) => {
    console.log(data)
    const res = await axios.post("http://localhost:8000/", {
      Name: data.Name,
      Email: data.Email,
      Password: data.Password,
    });
    console.log(res)
  };

  return (
    //  main div
    <div className="flex justify-center items-center h-screen">
      <div className="lg:w-1/3 items-center shadow-2xl justify-center bg-white my-4 rounded-3xl pb-6 px-2">
        {/*  globe logo div */}
        <div className="flex justify-center mt-5">
          <div className="shadow-lg  p-2">
            <FiGlobe size="2rem" />
          </div>
        </div>

        {/*  text div */}
        <div className="text-center w-full">
          <div className="w-full ">
            <h1 className="font-medium mt-4 text-2xl ">Welcome User!</h1>
            <h6 className="text-sm">Please enter your details to Register</h6>
          </div>
        </div>

        {/*  logos div */}
        <div className="flex w-full px-4">
          <div className="flex justify-center mt-5 w-1/3">
            <div className="shadow-lg  py-2 px-10">
              <FcGoogle size="2rem" />
            </div>
          </div>
          <div className="flex justify-center mt-5 w-1/3">
            <div className="shadow-lg py-2 px-10">
              <FaFacebook size="2rem" />
            </div>
          </div>
          <div className="flex justify-center mt-5 w-1/3">
            <div className="shadow-lg  py-2 px-10">
              <FaApple size="2rem" />
            </div>
          </div>
        </div>

        {/* or div */}
        <div className="w-full flex mt-5 px-4 items-center">
          <hr className="w-1/2" />
          <p className="px-2">or</p>
          <hr className="w-1/2" />
        </div>

        {/* email password div */}
        <form
          onSubmit={handleSubmit((data) => {
            handleSignup(data);
          })}
          className="px-4 mt-4 "
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full pl-2 text-sm h-10 focus:outline-none my-2 border rounded placeholder:text-black"
            {...register("Name", { required: "Name is required" })}
          />
          {errors?.Name && <p>{errors?.Name.message}</p>}

          <input
            type="text"
            placeholder="Email"
            className="w-full pl-2 text-sm h-10 focus:outline-none my-2 border rounded placeholder:text-black "
            {...register("Email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "invalid email address",
              },
            })}
          />
          {errors?.Email && <p>{errors?.Email.message}</p>}

          <input
            type="password"
            placeholder="Password"
            className="w-full focus:outline-none border my-2 rounded pl-2 text-sm h-10 placeholder:text-black"
            {...register("Password", {
              required: "password is required",
              minLength: {
                value: 8,
                message: "password must be of minimum 8 length",
              },
              pattern: {
                value:
                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
                message:
                  "Password must contain a lower case letter,an upper case letter, a number, a special character",
              },
            })}
          />
          {errors?.Password && <p>{errors?.Password.message}</p>}

          <hr className="my-2" />
          <button
            type="submit"
            className="bg-black text-white w-full rounded-lg mt-2 h-10 text-sm"
          >
            Sign up
          </button>
        </form>

        <div className="flex justify-center w-full space-x-2 mt-2">
          <p className="text-sm">Don't have an account? </p>
          <Link to="/Login" className="text-sm text-yellow-500">
            {" "}
            Login{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
