import React from "react";
import { AiFillFilePdf } from "react-icons/ai";
import Resume from "../assets/Vaibhavshetty.pdf";
import Animated from "./Animated";

const Home = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f]" name="home">
      {/* container */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-green-500">Hi,my name is</p>
        <h1 className="text-4xl font-bold sm:text-7xl text-[#ccd6f6]">
          Vaibhav Shetty
        </h1>
        <h2 className="text-4xl font-bold sm:text-7xl text-[#8892b0]">
          {/* Im a Java Developer */}
          <Animated />
        </h2>
        <p className="mx-w-[500px] text-[#8892b0] py-4 ">
        Java Developer with 3 years of experience in Object oriented programming in BFSI domain. Skilled in front-end and back-end Java 
        technologies, Spring frameworks, REST API, database management and UI development with React, HTML5, and CSS3. 
        </p>
        <div>
          <a href={Resume} download="VaibhavShetty">
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-green-500 hover:border-green-600">
              Resume
              <span>
                <AiFillFilePdf className="ml-2" />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
