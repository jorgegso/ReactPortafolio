import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  // FaFacebook,
} from "react-icons/fa";

import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import {Link} from 'react-scroll'

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-l from-pink-700">
      <div>
        <img src={Logo} alt="logo imagen" style={{ width: "72px" }} />
      </div>
      {/* Full Menu */}
      <ul className="hidden md:flex text-[#8892b0]">
        <li className="hover:text-[#bec8e4] duration-400">
          <Link to="home" smooth={true} duration={500}>
          Home
          </Link>
        </li>
        <li className=" hover:text-[#bec8e4] duration-400">
          <Link to="about" smooth={true} duration={500}>
          About
          </Link>
        </li>
        <li className=" hover:text-[#bec8e4] duration-400">
          <Link to="skill" smooth={true} duration={500}>
          Skill
          </Link>
        </li>
        <li className=" hover:text-[#bec8e4] duration-400">
          <Link to="work" smooth={true} duration={500}>
          Work
          </Link>
        </li>
        <li className=" hover:text-[#bec8e4] duration-400">
          <Link to="contact" smooth={true} duration={500}>
          Contact
          </Link>
        </li>
      </ul>
      {/* Hamburguer */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* movil menu */}
      <ul className={ !nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#4c4a66] flex flex-col justify-center items-center"}>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li  className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li  className="py-6 text-4xl">
          <Link onClick={handleClick} to="skill" smooth={true} duration={500}>
            Skill
          </Link>
        </li> 
        <li  className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li  className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className="lg:flex fixed flex-col top-[35%] left-0">
        <ul className="w-[300px]">
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-113px] hover:ml-[-10px] duration-300">
            <a className="flex justify-between items-center  text-gray-300"
              href="https://www.linkedin.com/in/jorge-sosa-arg"><span className="mr-2">Linkedin</span><FaLinkedin size={30} /></a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/jorgegso">
              GitHud <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:hajorge2012@gmail.com">
              Mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-111px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center text-gray-300"
              href="/reactPortafolio/cv"> <div className="mr-2"> Resume</div> <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
