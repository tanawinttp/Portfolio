import React from "react";
import Sleep from "./image/Sleep.png";

const About = () => {
  return (
    <div className="w-full h-auto pt-[5rem] bg-bodycolor text-[#FFFFFF] flex flex-col justify-center">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="max-w-[1200px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-Caveat inline border-b-4">About</p>
          </div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-Caveat flex items-center">
            <p>Hi. Im Tanawin, nice to meet you. Please take a look around.</p>
          </div>
          <div className="font-Caveat text-2xl">
            <p>
              My experiences as a Junior Full-Stack Developer have prepared me
              for a successful career in the tech industry and I am excited to
              continue learning and growing as a developer. <br />I have gained
              valuable experience in building web applications using a variety
              of technologies. My expertise includes the MERN stack (MongoDB,
              Express, React, and Node.js)
            </p>
          </div>
        </div>
        {/* Image */}
        <div
          name="skills"
          className="md:my-10 "
          data-aos="flip-down"
          data-aos-duration="1500"
        >
          <img className="w-[15rem] md:w-[100%]" src={Sleep} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
