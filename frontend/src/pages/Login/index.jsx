import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FiGlobe } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const Login = () => {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleLogin = async (data) => {
    console.log(data);
    const res = await axios.post("http://localhost:8000/Login", {
      Email: data.Email,
      Password: data.Password,
    });
    console.log(res);
    if (res.data === "user not authorized") {
      alert("Login failed");
      reset();
    } else nav("/Home");
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
            <h1 className="font-medium mt-4 text-2xl ">Welcome back</h1>
            <h6 className="text-sm">Please enter your details to sign in</h6>
          </div>
        </div>

        {/*  logos div */}
        <div className="flex w-full px-4 ">
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
            handleLogin(data);
          })}
          className="px-4 mt-4 "
        >
          <label>Email Address</label>
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full pl-2 text-sm h-10 focus:outline-none my-2 border rounded "
            {...register("Email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "invalid email address",
              },
            })}
          />
          {errors?.Email && <p>{errors?.Email.message}</p>}

          <label className="w-full">Password</label>
          <input
            type="password"
            className="w-full focus:outline-none border my-2 h-10 rounded "
            {...register("Password", {
              required: "password is required",
            })}
          />
          {errors?.Password && <p>{errors?.Password.message}</p>}

          <hr className="my-2" />
          <button
            type="submit"
            className="bg-black text-white w-full rounded-lg mt-2 h-10 text-sm"
          >
            Sign in
          </button>
        </form>

        <div className="flex justify-center w-full space-x-2 mt-2">
          <p className="text-sm">Don't have an account? </p>
          <Link to="/" className="text-sm text-blue-500">
            {" "}
            Create account{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
