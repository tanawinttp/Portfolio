import React, {useState} from 'react';
// icon image
import LogoNavbar from "./Image/LogoNavbar.png";
import Menuicon from "./Image/Menuicon.png";
import Exiticon from "./Image/Exiticon.png";
import LinkedinIcon from "./Image/LinkedinIcon.png"
import GithubIcon from "./Image/GithubIcon.png"
import EmailIcon from "./Image/EmailIcon.png"
import ResumeIcon from "./Image/ResumeIcon.png"

const Navbar = () => {
    const [nav , setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[100px] flex justify-between items-center px-4 bg-navcolor">
      <div className="object-cover">
        <img
          src={LogoNavbar}
          alt="Tanawin P. Logo Image"
          style={{ width: "100%" }}
        />
      </div>

      {/* menu */}
      <div className="hidden md:flex mr-5">
        <ul className="hidden md:flex">
          <li className='font-Caveat text-[32px]'>Home</li>
          <li className='font-Caveat text-[32px] mx-2'>About</li>
          <li className='font-Caveat text-[32px] mx-2'>Skills</li>
          <li className='font-Caveat text-[32px] mr-4'>Project</li>
          <li className='rounded-full bg-[#ffffff] border-[2px] border-bodycolor text-bodycolor text-[20px] md:w-[7.5rem] flex items-center hover:text-[#FFFFFF] hover:bg-bodycolor duration-500'>Say Hello</li>
        </ul>
      </div>

      {/* menu mobile icon */}
      <div onClick={handleClick} className="md:hidden w-[35px] z-10">
        {!nav ? <img className='w-[100%]' src={Menuicon} alt="icon menu" /> : <img className='w-[100%]' src={Exiticon} alt="exit menu"/>}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#419197] flex flex-col justify-center items-center'}>
        <li className="py-6 font-Caveat text-[#FFFFFF] text-[2.5rem]">Home</li>
        <li className="py-6 font-Caveat text-[#FFFFFF] text-[2.5rem]">About</li>
        <li className="py-6 font-Caveat text-[#FFFFFF] text-[2.5rem]">Skills</li>
        <li className="py-6 font-Caveat text-[#FFFFFF] text-[2.5rem]">Project</li>
        <li className="py-6 font-Caveat text-[#FFFFFF] text-[2.5rem]">Contact</li>
      </ul>

      {/* Social icons */}
      <div className="hidden md:flex fixed flex-col top-[35%] left-0">
        <ul>

          <li className='w-[165px] h-[70px] flex justify-between items-center ml-[-88px] hover:ml-[0px] duration-[200ms] rounded-t-lg hover:rounded-br-lg bg-[#BBD6FF]'>
            <a className='flex justify-between items-center w-full font-Mogra' href="https://www.linkedin.com/in/tanawin/" target="_blank" rel="noopener noreferrer">
              Linkedin  <img className='w-[55px] mr-[-3px]' src={LinkedinIcon} alt="Linked logo" />
            </a>
          </li>

          <li className='w-[165px] h-[70px] flex justify-between items-center ml-[-88px] hover:ml-[0px] duration-[200ms]  hover:rounded-r-lg bg-[#D6E5E5]'>
            <a className='flex justify-between items-center w-full font-Mogra' href="/" target="_blank" rel="noopener noreferrer">
              Git hub <img className='w-[55px] mr-[-3px]' src={GithubIcon} alt="Github logo" />
            </a>
          </li>

          <li className='w-[165px] h-[70px] flex justify-between items-center ml-[-88px] hover:ml-[0px] duration-[200ms]  hover:rounded-r-lg bg-[#FF9393]'>
            <a className='flex justify-between items-center w-full font-Mogra' href="/" target="_blank" rel="noopener noreferrer">
              Email <img className='w-[55px] mr-[-3px]' src={EmailIcon} alt="Email logo" />
            </a>
          </li>

          <li className='w-[165px] h-[70px] flex justify-between items-center ml-[-88px] hover:ml-[0px] duration-[200ms] rounded-b-lg hover:rounded-r-lg bg-[#C4E3B5]'>
            <a className='flex justify-between items-center w-full font-Mogra' href="/" target="_blank" rel="noopener noreferrer">
              Resume <img className='w-[55px] mr-[-3px]' src={ResumeIcon} alt="Resume logo" />
            </a>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;
