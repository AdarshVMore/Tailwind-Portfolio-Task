import React from "react";
import img from "../assets/img2.jpeg";

function Hero() {
  return (
    <div className=" py-20 px-10 md:px-20 lg:px-40 md:py-40 sm:px-10 flex-row-reverse md:flex items-center justify-evenly  lg:justify-center gap-14 ">
      <div className="flex items-center justify-center md:justify-normal">
        <img
          src={img}
          alt=""
          className="rounded-full w-[200px]  lg:w-[600px] md:w-[500px] sm:w-[300px] flex mb-[50px] "
        />
      </div>
      <div className="flex gap-8 flex-col md:text-left md-items-center text-center">
        <h1 className="lg:text-5xl text-3xl font-bold md:text-left text-center ">
          Hi, I am John, <br />
          Creative Technologist
        </h1>
        <p className="text-base ">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <div>
          <button className="bg-red-600 py-2  px-5 text-white text-sm">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
