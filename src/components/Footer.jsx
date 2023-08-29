import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <div
      id="footer"
      className=" pt-24 pb-10 m-auto flex flex-col gap-5 items-center justify-center"
    >
      <div className="flex gap-5 items-center justify-center">
        <AiFillFacebook size={30} />
        <BsInstagram size={25} />
        <BsTwitter size={25} />
        <BsLinkedin size={25} />
      </div>
      <p>Copyright ©2020 All rights reserved </p>
    </div>
  );
}

export default Footer;
