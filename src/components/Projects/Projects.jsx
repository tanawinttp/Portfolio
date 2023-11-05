import React from "react";
// import react-icon
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
// Import image project
import Rocket from "./image/Rocket.png";
import ReactAssessment from "./image/ReactAssessment.gif";
import Colmar from "./image/Colmar.png";
import Burger from "./image/Burger.png";
import PokeApi from "./image/PokeApi.gif";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full h-auto pt-[5rem] text-[#FFFFFF] bg-bodycolor"
    >
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="font-Caveat text-4xl inline border-b-4 text-[#FFFFFF]">
            Projects
          </p>
          <p className="pt-6 font-Caveat text-4xl">
            Check out some of my recent Projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-fluid gap-4">
          <div className="bg-[#D1E9C2] shadow-lg shadow-[#040c16] rounded-md flex flex-col justify-center items-center mx-auto p-[1rem] hover:scale-110 duration-200">
            {/* Hover Effects */}
            <div className="w-[250px] h-[200px] lg:w-[300px] lg:h-[200px] overflow-hidden rounded-lg">
              <img
                src={Rocket}
                alt=""
                className=" w-full hover:translate-y-[-50%] hover:cursor-pointer delay-150 duration-[3000ms] ease-in-out"
              />
            </div>

            {/* Name Project and description */}
            <div className="flex flex-col items-center lg:mt-5">
              <p className="text-[#64B7B2] font-Mogra">Rocket-Fit</p>
              <div>
                <p className="text-[#A587BD] font-Mogra">
                  Stack :
                  <span className="text-[#64B7B2]">ReactJS,Vite,Tailwind</span>
                </p>
                <p className="text-[#A587BD] font-Mogra">
                  Responsive :
                  <span className="text-[#64B7B2]">Desktop , Mobile</span>
                </p>
              </div>

              {/* button */}
              <div className="flex gap-5 justify-center my-[1rem]">
                <a
                  href="https://github.com/JSD5-Team-13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D8B8E6] rounded-md px-[1.5rem] max-w-[7rem] h-[2.5rem] text-[#E88109] flex items-center justify-center hover:bg-[#C987E9] hover:text-[#F8C78E]"
                >
                  <span className="px-1 font-Mogra flex gap-2">
                    CODE <AiFillGithub />
                  </span>
                </a>
                <a
                  href="https://rocket-fit.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D8B8E6] rounded-md px-[1.5rem] max-w-[7rem] h-[2.5rem] text-[#E88109] flex items-center justify-center hover:bg-[#C987E9] hover:text-[#F8C78E]"
                >
                  <span className="px-2 font-Mogra flex gap-2">
                    LINK <FiExternalLink />
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[#D1E9C2] shadow-lg shadow-[#040c16] rounded-md flex flex-col justify-center items-center mx-auto p-[1rem] hover:scale-110 duration-200">
            {/* Hover Effects */}
            <div className="w-[250px] h-[200px] lg:w-[300px] lg:h-[200px] overflow-hidden rounded-lg">
              <img src={ReactAssessment} alt="" className="h-full" />
            </div>

            {/* Name Project and description */}
            <div className="flex flex-col items-center lg:mt-5">
              <p className="text-[#64B7B2] font-Mogra">ReactAssessment</p>
              <div>
                <p className="text-[#A587BD] font-Mogra">
                  Stack :
                  <span className="text-[#64B7B2]">ReactJS,CRUD,API</span>
                </p>
                <p className="text-[#A587BD] font-Mogra">
                  Responsive :<span className="text-[#64B7B2]">Desktop</span>
                </p>
              </div>

              {/* button */}
              <div className="flex gap-5 justify-center my-[1rem]">
                <a
                  href="https://github.com/tanawinttp/48_Tanawin-React-Assessment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D8B8E6] rounded-md px-[1.5rem] max-w-[7rem] h-[2.5rem] text-[#E88109] flex items-center justify-center hover:bg-[#C987E9] hover:text-[#F8C78E]"
                >
                  <span className="px-1 font-Mogra flex gap-2">
                    CODE <AiFillGithub />
                  </span>
                </a>
                <a
                  href="https://48-tanawin-react-assessment.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D8B8E6] rounded-md px-[1.5rem] max-w-[7rem] h-[2.5rem] text-[#E88109] flex items-center justify-center hover:bg-[#C987E9] hover:text-[#F8C78E]"
                >
                  <span className="px-2 font-Mogra flex gap-2">
                    LINK <FiExternalLink />
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[#D1E9C2] shadow-lg shadow-[#040c16] rounded-md flex flex-col justify-center items-center mx-auto p-[1rem] hover:scale-110 duration-200">
            {/* Hover Effects */}
            <div className="w-[250px] h-[200px] lg:w-[300px] lg:h-[200px] overflow-hidden rounded-lg">
              <img
                src={Colmar}
                alt=""
                className=" w-full hover:translate-y-[-50%] hover:cursor-pointer delay-150 duration-[3000ms] ease-in-out"
              />
            </div>

            {/* Name Project and description */}
            <div className="flex flex-col items-center lg:mt-5">
              <p className="text-[#64B7B2] font-Mogra">Colmar Academy</p>
              <div>
                <p className="text-[#A587BD] font-Mogra">
                  Stack :<span className="text-[#64B7B2]">HTML,CSS</span>
                </p>
                <p className="text-[#A587BD] font-Mogra">
                  Responsive :
                  <span className="text-[#64B7B2]">Desktop , Mobile</span>
                </p>
              </div>

              {/* button */}
              <div className="flex gap-5 justify-center my-[1rem]">
                <a
                  href="https://github.com/tanawinttp/Colmar-Academy-Test-JSD5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D8B8E6] rounded-md px-[1.5rem] max-w-[7rem] h-[2.5rem] text-[#E88109] flex items-center justify-center hover:bg-[#C987E9] hover:text-[#F8C78E]"
                >
                  <span className="px-1 font-Mogra flex gap-2">
                    CODE <AiFillGithub />
                  </span>
                </a>
                <a
                  href="https://colmar-academy-test-jsd-5.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D8B8E6] rounded-md px-[1.5rem] max-w-[7rem] h-[2.5rem] text-[#E88109] flex items-center justify-center hover:bg-[#C987E9] hover:text-[#F8C78E]"
                >
                  <span className="px-2 font-Mogra flex gap-2">
                    LINK <FiExternalLink />
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[#D1E9C2] shadow-lg shadow-[#040c16] rounded-md flex flex-col justify-center items-center mx-auto p-[1rem] hover:scale-110 duration-200">
            {/* Hover Effects */}
            <div className="w-[250px] h-[200px] lg:w-[300px] lg:h-[200px] overflow-hidden rounded-lg">
              <img
                src={Burger}
                alt=""
                className=" w-full hover:translate-y-[-50%] hover:cursor-pointer delay-150 duration-[3000ms] ease-in-out"
              />
            </div>

            {/* Name Project and description */}
            <div className="flex flex-col items-center lg:mt-5">
              <p className="text-[#64B7B2] font-Mogra">Burger</p>
              <div>
                <p className="text-[#A587BD] font-Mogra">
                  Stack :
                  <span className="text-[#64B7B2]">ReactJS,Vite,Tailwind</span>
                </p>
                <p className="text-[#A587BD] font-Mogra">
                  Responsive :
                  <span className="text-[#64B7B2]">Desktop , Mobile</span>
                </p>
              </div>

              {/* button */}
              <div className="flex gap-5 justify-center my-[1rem]">
                <a
                  href="https://github.com/tanawinttp/burger"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D8B8E6] rounded-md px-[1.5rem] max-w-[7rem] h-[2.5rem] text-[#E88109] flex items-center justify-center hover:bg-[#C987E9] hover:text-[#F8C78E]"
                >
                  <span className="px-1 font-Mogra flex gap-2">
                    CODE <AiFillGithub />
                  </span>
                </a>
                <a
                  href="https://burger-puce.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D8B8E6] rounded-md px-[1.5rem] max-w-[7rem] h-[2.5rem] text-[#E88109] flex items-center justify-center hover:bg-[#C987E9] hover:text-[#F8C78E]"
                >
                  <span className="px-2 font-Mogra flex gap-2">
                    LINK <FiExternalLink />
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[#D1E9C2] shadow-lg shadow-[#040c16] rounded-md flex flex-col justify-center items-center mx-auto p-[1rem] hover:scale-110 duration-200">
            {/* Hover Effects */}
            <div className="w-[250px] h-[200px] lg:w-[300px] lg:h-[200px] overflow-hidden rounded-lg">
              <img src={PokeApi} alt="" className="h-full" />
            </div>

            {/* Name Project and description */}
            <div className="flex flex-col items-center lg:mt-5">
              <p className="text-[#64B7B2] font-Mogra">Poke-Api</p>
              <div>
                <p className="text-[#A587BD] font-Mogra">
                  Stack :
                  <span className="text-[#64B7B2]">ReactJS,Api,Tailwind</span>
                </p>
                <p className="text-[#A587BD] font-Mogra">
                  Responsive :<span className="text-[#64B7B2]">Desktop</span>
                </p>
              </div>

              {/* button */}
              <div className="flex gap-5 justify-center my-[1rem]">
                <a
                  href="https://github.com/tanawinttp/Try-playing-PokeApi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D8B8E6] rounded-md px-[1.5rem] max-w-[7rem] h-[2.5rem] text-[#E88109] flex items-center justify-center hover:bg-[#C987E9] hover:text-[#F8C78E]"
                >
                  <span className="px-1 font-Mogra flex gap-2">
                    CODE <AiFillGithub />
                  </span>
                </a>
                <a
                  href="https://try-playing-poke-api.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D8B8E6] rounded-md px-[1.5rem] max-w-[7rem] h-[2.5rem] text-[#E88109] flex items-center justify-center hover:bg-[#C987E9] hover:text-[#F8C78E]"
                >
                  <span className="px-2 font-Mogra flex gap-2">
                    LINK <FiExternalLink />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
