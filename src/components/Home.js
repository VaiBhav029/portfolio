import React from "react";
import { AiFillFilePdf } from "react-icons/ai";
import Resume from "../assets/VaibhavShetty.pdf";

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
          Im a FullStack Developer
        </h2>
        <p className="mx-w-[500px] text-[#8892b0] py-4 ">
          We highly recommend using Vite, Parcel, Next.js, or Remix instead of
          Create React App. They provide an equivalent or better developer
          experience but with more flexibility, giving you more control over how
          Tailwind and PostCSS are configured.
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
