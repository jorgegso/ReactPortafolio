import React, { useState } from "react";
import {Link} from 'react-scroll'
import { HiArrowNarrowRight } from "react-icons/hi";
const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div name="home" className="w-full h-screen bg-[#01010D]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <p className="text-pink-600 text-2xl mt-8">Hi, my name is</p>
        <h1 className="text-4xl sm:text-8xl font-bold text-[#ccd6f6] mt-6">
          Jorge Sosa
        </h1>
        <h2 className="text-2xl sm:text-4xl font-bold text-[#8892b0] mt-4">
          Im a full stack developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w[700px]">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>

        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
          View work
          </Link>
            
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
