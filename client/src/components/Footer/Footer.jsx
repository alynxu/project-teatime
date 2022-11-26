import React from "react";
import { FaMugHot } from 'react-icons/fa';
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";

const Footer = () => (
  <footer className="bg-light p-3 text-center">
    <FaMugHot />
    <div>
      Share your tea time with us!
    </div>
    <div>
      Social: <BsInstagram /> <BsTwitter />
    </div>
    <hr />
    <div>Copyright <BiCopyright /> Teatime 2022</div>
  </footer>
);

export default Footer;
