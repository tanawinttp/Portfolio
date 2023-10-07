import React from "react";
// import image
import Computer from "./image/Computer.png";
import Catinbox from "./image/Catinbox.png";
import Arrow from "./image/Arrow.png";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-bodycolor">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="font-Caveat  text-5xl text-[#F5FCCD]">Hi 👋 my name is</p>
        <h1 className="font-Caveat text-4xl sm:text-7xl text-[#FFFFFF]">
          Tanawin Procharoenchai
        </h1>
        <h2 className="font-Caveat text-4xl sm:text-7xl text-[#FFFFFF]">
          I'm a Junior Software Developer.
        </h2>
        <p className="font-Caveat text-[1.5rem] text-[#FFFFFF] py-4 max-w-[700px]">
          I'm a Junior Software Developer specializing in building (and
          occasionally designing) exceptional digital experiences, Currenttly.
          I'm focused on building responsive Full-stack web applications.
        </p>
        <div>
          <button className="font-Mogra group text-[1.5rem] text-[#FFFFFF] border-2 px-6 py-3 my-2 flex items-center hover:bg-navcolor hover:border-[#F5FCCD]">
            View Work
            <span className="w-[2.5rem] ml-3 group-hover:rotate-90 duration-300">
              <img src={Arrow} alt="" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
