import React from "react";
import work1 from "../assets/work1.jpg";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.jpg";

function FeaturedWork() {
  return (
    <div id="featured-work" className="py-10 px-10 md:px-10 lg:px-32 sm:px-10">
      <p className="text-lg mb-10">Featured Works</p>
      <div className="flex flex-col gap-5">
        <div className="flex md:gap-8 gap-3 flex-col md:flex-row justify-center">
          <img src={work1} alt="" className="w-[350px] rounded-lg" />
          <div className="flex flex-col md:gap-8 gap-3">
            <p className="font-bold text-xl md:text-3xl">
              Designing Dashboards
            </p>
            <p className="flex gap-5">
              <span className="text-white flex items-center font-semibold px-3  rounded-full bg-slate-900">
                2020
              </span>
              <span className="text-lg text-[gray]">Dashboard</span>
            </p>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <hr />
        <div className="flex md:gap-8 gap-3 flex-col md:flex-row justify-center">
          <img src={work2} alt="" className="w-[350px] rounded-lg" />
          <div className="flex flex-col md:gap-8 gap-3">
            <p className="font-bold text-xl md:text-3xl">
              Vibrant Portraits of 2020
            </p>
            <p className="flex gap-5">
              <span className="text-white flex items-center font-semibold px-3  rounded-full bg-slate-900">
                2018
              </span>
              <span className="text-lg text-[gray]">Dashboard</span>
            </p>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <hr />
        <div className="flex md:gap-8 gap-3 flex-col md:flex-row justify-center">
          <img src={work3} alt="" className="w-[350px] rounded-lg" />
          <div className="flex flex-col md:gap-8 gap-3">
            <p className="font-bold text-xl md:text-3xl">
              36 Days of Malayalam type
            </p>
            <p className="flex gap-5">
              <span className="text-white flex items-center font-semibold px-3  rounded-full bg-slate-900">
                2019
              </span>
              <span className="text-lg text-[gray]">Dashboard</span>
            </p>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedWork;
