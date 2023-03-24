import React, { useState } from "react";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Logo from "../assets/snaplogo.jpg";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleChange = () => setNav(!nav);
  return (
    <div className="fixed flex justify-between items-center px-4 w-full h-[80px] bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="logo" style={{ width: "50px" }} />
      </div>
      {/* menu */}
      <div>
        <ul className="hidden md:flex">
          <li>
            <Link to="home" spy={true} smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link to="about" spy={true} smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            {" "}
            <Link to="skills" spy={true} smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            {" "}
            <Link to="work" spy={true} smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li>
            {" "}
            <Link to="contact" spy={true} smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* hamburger */}
      <div className="md:hidden z-10" onClick={handleChange}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl" >
          <Link to="home" spy={true} smooth={true} duration={500} onClick={handleChange}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="about" spy={true} smooth={true} duration={500}  onClick={handleChange}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="skills" spy={true} smooth={true} duration={500} onClick={handleChange}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="work" spy={true} smooth={true} duration={500} onClick={handleChange}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="contact" spy={true} smooth={true} duration={500} onClick={handleChange}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Social icons */}
      <div className="hidden lg:flex fixed top-[35%] left-0  flex-col ">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077B5]">
            <a
              href={process.env.REACT_APP_LINKEDIN}
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0a192f]">
            <a
              href={process.env.REACT_APP_GITHUB}
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#989898]">
            <a
              href={`mailto:${process.env.REACT_APP_EMAIL}`}
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <AiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
