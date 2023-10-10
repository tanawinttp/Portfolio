import React from "react";

// import image
import SUSU from "./image/SUSU.png";
import Map from "./image/Map.png";

const Contact = () => {
  return (
    <div className="w-full h-auto bg-bodycolor pt-5 px-4">
      {/* img susu */}
      <div className="flex justify-end">
        <div className="w-[100px] md:w-[150px] xl:w-[200px] mr-[1rem] lg:mr-[3rem]">
          <img src={SUSU} alt="" />
        </div>
      </div>
      {/* Description */}
      <div
        name="contact"
        className="font-Caveat text-[#FFFFFF] mx-auto max-w-[1100px]"
      >
        <p className="text-4xl inline border-b-4">Contact</p>
        <p className="text-2xl md:text-4xl pt-4">
          Submit the form below or shoot me an email
        </p>
        <p className="text-2xl md:text-4xl">tanawin.ttp@gmail.com</p>
      </div>

      <form
        method="POST"
        action="https://getform.io/f/6ca2ae1d-a5a5-476c-a1b0-3d092c548623"
        className="my-4 mx-auto max-w-[650px] min-[1335px]:mt-[5rem] sm:flex sm:flex-col sm:justify-center"
      >
        <div className="flex flex-col">
          <label className="font-Caveat text-[#FFFFFF] text-xl" htmlFor="name">
            Your Name :
          </label>
          <input
            className="font-Caveat text-[#707070] bg-[#F5FCCD] rounded-lg p-[5px] py-[7px]  mt-1"
            type="text"
            id="name"
            placeholder="Name"
            name="name"
          />
        </div>
        <div className="flex flex-col my-4">
          <label className="font-Caveat text-[#FFFFFF] text-xl" htmlFor="email">
            Your Email :
          </label>
          <input
            className="font-Caveat text-[#707070] bg-[#F5FCCD] rounded-lg p-[5px] py-[7px]  mt-1"
            type="email"
            id="email"
            placeholder="Email"
            name="email"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="font-Caveat text-[#FFFFFF] text-xl"
          >
            Your Message :
          </label>
          <textarea
            className="font-Caveat text-[#707070] bg-[#F5FCCD] rounded-lg p-[5px] mt-1"
            name="message"
            id="message"
            rows="6"
            placeholder="Message"
          ></textarea>
        </div>
        <button className="font-Mogra text-[#FFFFFF] bg-[#419197] rounded-xl px-4 py-3 my-5 mx-auto flex items-center hover:bg-navcolor hover:text-[#003229] duration-200">
          Let's Collaborate
        </button>
      </form>
      <div className="w-[250px] md:w-full md:pl-[2rem] xl:pl-[10rem]">
        <img src={Map} alt="" />
      </div>
    </div>
  );
};

export default Contact;
