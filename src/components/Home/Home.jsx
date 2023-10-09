import React from "react";
import { TypeAnimation } from "react-type-animation";
// import image
import Computer from "./image/Computer.png";
import Catinbox from "./image/Catinbox.png";
import Arrow from "./image/Arrow.png";

const Home = () => {
  return (
    <div name="home" className="w-full h-auto bg-bodycolor ">
      {/* Container */}
      <div className="max-w-[1200px] mx-auto px-8 flex flex-col justify-center">
        {/* image computer */}
        <div
          className="flex justify-center mt-[5rem]"
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          <img className="w-[200px] md:w-[300px]" src={Computer} alt="" />
        </div>
        {/* text description */}
        <p className="font-Caveat text-3xl text-[#F5FCCD] md:text-5xl">
          <TypeAnimation
            sequence={["Hi 👋 my name is", 2000, "👋 Hello my name is", 2000]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
          />
        </p>
        <h1 className="font-Caveat text-3xl md:text-6xl text-[#FFFFFF]">
          <TypeAnimation
            sequence={[
              "Tanawin Pocharoenchai",
              2000,
              "Toy.ToY.TOY",
              2000,
              "3oy.3oy.3oy.",
              2000,
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
          />
        </h1>
        <h2 className="font-Caveat text-2xl md:text-5xl text-[#FFFFFF]">
          I'm a Junior Software Developer.
        </h2>
        <p className="font-Caveat text-[1.5rem] text-[#FFFFFF] py-4 max-w-[700px]">
          I'm a Junior Software Developer specializing in building (and
          occasionally designing) exceptional digital experiences, Currenttly.
          I'm focused on building responsive Full-stack web applications.
        </p>

        <div>
          {/* Button View Work*/}
          <button className="font-Mogra group text-[1.5rem] text-[#FFFFFF] border-2 px-6 py-3 my-2 flex items-center hover:bg-navcolor hover:border-[#F5FCCD] hover:text-bodycolor">
            View Work
            <span className="w-[2.5rem] ml-3 group-hover:rotate-90 duration-300">
              <img src={Arrow} alt="" />
            </span>
          </button>
        </div>
        {/* image cat in box */}
        <div className="flex justify-end">
          <img className="w-[200px] md:w-[250px]" src={Catinbox} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
