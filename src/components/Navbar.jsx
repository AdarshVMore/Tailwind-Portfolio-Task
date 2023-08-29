import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" py-8 px-16 fixed md:absolute z-5 right-0">
      <div className="container mx-auto flex items-center justify-between">
        <div></div>
        <div className="md:hidden ">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? "" : <AiOutlineMenu color="black" size={24} />}
          </button>
        </div>
        <div
          className={`md:flex ${
            isOpen
              ? "block backdrop-filter backdrop-blur-md w-[80vw] md:w-auto ease-in-out duration-500 px-8 py-6 rounded-lg"
              : "hidden"
          }`}
        >
          <button
            className="md:hidden lg:hidden mb-2"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <GrClose color="black" />
          </button>
          <a
            href="#featured-work"
            className="block font-semibold md:inline-block md:mt-0  mr-10"
          >
            Works
          </a>
          <a
            href="#recent-posts"
            className="block font-semibold  md:inline-block md:mt-0 mr-10"
          >
            Blog
          </a>
          <a
            href="#footer"
            className="block font-semibold md:inline-block md:mt-0 "
          >
            Content
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
