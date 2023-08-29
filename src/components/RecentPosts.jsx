import React from "react";

function RecentPosts() {
  return (
    <div id="recent-posts" className="bg-blue-100">
      <div className="py-10 px-5 md:px-10 lg:px-32 sm:px-10">
        <div className="flex items-center justify-center sm:justify-between">
          <p className="text-lg text-center ">Recent Posts</p>
          <a href="" className="text-blue-500 hidden sm:block">
            View all
          </a>
        </div>
        <div className="md:flex justify-between gap-8">
          <div className="flex flex-col gap-8 bg-white py-5 px-5 pr-10 my-5">
            <p className="text-2xl font-semibold">
              Making a design system from scratch
            </p>
            <p className="flex gap-3">
              12 Feb 2020 <span> | </span> Design, Pattern
            </p>
            <p className="text-base">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className="flex flex-col gap-8 bg-white py-5 px-5 pr-10 my-5">
            <p className="text-2xl font-semibold">
              Creating pixel perfect icons in Figma
            </p>
            <p className="flex gap-3">
              12 Feb 2020 <span> | </span> Design, Pattern
            </p>
            <p className="text-base">
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

export default RecentPosts;
