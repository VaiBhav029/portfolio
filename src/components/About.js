import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full px-6">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-green-500">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8">
          <div>
            <p className="sm:text-5xl text-4xl font-bold">
              Hi.I'm vaibhav , Nice to meat you.Please take look around!{" "}
            </p>
          </div>
          <div>
            <p>
            Java Developer with 3 years of experience in Object oriented programming in BFSI domain. 
            Skilled in front-end and back-end Java technologies, Spring frameworks, REST API, 
            database management and UI development with React, HTML5, and CSS3. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
