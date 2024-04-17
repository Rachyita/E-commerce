import React from "react";
import EmailIcon from "../../assets/EmailIcon.png";
function NewsLetter() {
  return (
    <>
      <div className="w-full lg:px-16 px-4 lg:pt-8 relative z-10 top-16">
        <div className="lg:flex w-full bg-black rounded-3xl ">
          <div className="lg:w-3/5 w-full flex justify-center px-4 p-8 lg:p-8 ">
            <h1 className="text-white text-4xl  font-black">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS{" "}
            </h1>
          </div>
          <div className="lg:w-1/2 w-full flex lg:justify-end  items-center">
            <div className="lg:w-4/5 w-full pl-4 pb-4">
              <div className="flex border bg-white w-11/12 rounded-full p-2">
                <img src={EmailIcon} alt="" className="pl-1 pr-1" />
                <input
                  className="w-full  focus:outline-none"
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your email address"
                />
              </div>
              <button className="border-2 rounded-full bg-white  p-2 mt-4 w-11/12">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsLetter;
