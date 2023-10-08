import React from "react";

// import image skill
import Html from "./image/Html.png";
import Css from "./image/Css.png";
import JavaScript from "./image/JavaScript.png";
import Reactlogo from "./image/Reactlogo.png";
import Bootstrap from "./image/Bootstrap.png";
import Tailwind from "./image/Tailwind.png";
import Nodejs from "./image/Nodejs.png";
import Expressjs from "./image/Expressjs.png";
import Mongodb from "./image/Mongodb.png";
import Git from "./image/Git.png";
import Figma from "./image/Figma.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-bodycolor">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen">
        <div>
          <p className="text-4xl font-Caveat inline border-b-4 text-[#FFFFFF]">
            Skills 🦾
          </p>
          <p className="py-4 font-Caveat text-[#FFFFFF] text-2xl">
            These are the Tech Stacks I learned and used in my project.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8 gap-[1rem]">
          <div data-aos="fade-down-right" data-aos-duration="1200">
            <div className="shadow-md rounded-md shadow-[#040c16] bg-[#F5FCCD] hover:scale-110 duration-500">
              <img className="w-[6rem] mx-auto" src={Html} alt="HTML icon" />
              <p className="my-2 font-Mogra">HTML</p>
            </div>
          </div>

          <div data-aos="fade-down" data-aos-duration="1200">
            <div className="shadow-md rounded-md shadow-[#040c16] bg-[#F5FCCD] hover:scale-110 duration-500">
              <img className="w-[6rem] mx-auto" src={Css} alt="CSS icon" />
              <p className="my-2 font-Mogra">CSS</p>
            </div>
          </div>

          <div data-aos="fade-down" data-aos-duration="1200">
            <div className="shadow-md rounded-md shadow-[#040c16] bg-[#F5FCCD] hover:scale-110 duration-500">
              <img
                className="w-[6rem] mx-auto"
                src={JavaScript}
                alt="JavaScript icon"
              />
              <p className="my-2 font-Mogra">JavaScript</p>
            </div>
          </div>

          <div data-aos="fade-down-left" data-aos-duration="1200">
            <div className="shadow-md rounded-md shadow-[#040c16] bg-[#F5FCCD] hover:scale-110 duration-500">
              <img
                className="w-[6rem] mx-auto"
                src={Reactlogo}
                alt="React icon"
              />
              <p className="my-2 font-Mogra">React</p>
            </div>
          </div>

          <div data-aos="fade-right" data-aos-duration="1200">
            <div className="shadow-md rounded-md shadow-[#040c16] pt-[20px] bg-[#F5FCCD] hover:scale-110 duration-500">
              <img
                className="w-[4.5rem] mx-auto"
                src={Bootstrap}
                alt="Bootstrap icon"
              />
              <p className="my-2 font-Mogra">Bootstrap</p>
            </div>
          </div>

          <div data-aos="flip-up" data-aos-duration="1200">
            <div className="shadow-md rounded-md shadow-[#040c16] bg-[#F5FCCD] hover:scale-110 duration-500">
              <img
                className="w-[6rem] mx-auto"
                src={Tailwind}
                alt="Tailwind icon"
              />
              <p className="my-2 font-Mogra">Tailwind</p>
            </div>
          </div>

          <div data-aos="flip-up" data-aos-duration="1200">
            <div className="shadow-md rounded-md shadow-[#040c16] bg-[#F5FCCD] hover:scale-110 duration-500">
              <img
                className="w-[6rem] mx-auto"
                src={Nodejs}
                alt="Nodejs icon"
              />
              <p className="my-2 font-Mogra">Nodejs</p>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-duration="1200">
            <div className="shadow-md rounded-md shadow-[#040c16] bg-[#F5FCCD] hover:scale-110 duration-500">
              <img
                className="w-[5rem] mx-auto pt-[5px]"
                src={Expressjs}
                alt="Expressjs icon"
              />
              <p className="my-2 font-Mogra">Express</p>
            </div>
          </div>

          <div data-aos="fade-up-right" data-aos-duration="1200">
            <div className="shadow-md rounded-md shadow-[#040c16] bg-[#F5FCCD] hover:scale-110 duration-500">
              <img
                className="w-[5.5rem] mx-auto pt-[5px]"
                src={Mongodb}
                alt="MongoDB icon"
              />
              <p className="my-2 font-Mogra">MongoDB</p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="1200">
            <div className="shadow-md rounded-md shadow-[#040c16] bg-[#F5FCCD] hover:scale-110 duration-500">
              <img
                className="w-[5rem] mx-auto pt-[10px]"
                src={Git}
                alt="Git icon"
              />
              <p className="my-2 font-Mogra">Git</p>
            </div>
          </div>

          <div data-aos="fade-up-left" data-aos-duration="1200">
            <div className="shadow-md rounded-md shadow-[#040c16] bg-[#F5FCCD] hover:scale-110 duration-500">
              <img
                className="w-[5rem] mx-auto pt-[10px] "
                src={Figma}
                alt="Figma icon"
              />
              <p className="my-2 font-Mogra">Figma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
