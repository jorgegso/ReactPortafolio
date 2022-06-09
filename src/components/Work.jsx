import React from "react";
import Calculator from "../assets/calculator.png";
import Map from "../assets/map.png";
import Robots from "../assets/robots.jpg";
import Weather from "../assets/weatherApp.png";
import Face from "../assets/Face.png";
import { motion } from "framer-motion";

// import realState from "../assets/realstate.jpg";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0E1117]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <motion.div
            className="actions"
            initial={{ x: -200 }}
            animate={{ x: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 4,
            }}>
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
              Work
            </p>
          </motion.div>

          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Project 1 */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${Calculator})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className=" font-bold text-white tracking-wider">
                Calculator
              </span>
              <div className="pt-8 text-center">
                <a href="https://jorgegso.github.io/calculatorJs/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/jorgegso/calculatorJs">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* project 2  */}
          <div
            style={{ backgroundImage: `url(${Map})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className=" font-bold text-white tracking-wider">
                Mapbox app
              </span>
              <div className="pt-8 text-center">
                <a href="https://jorgegso.github.io/apiMapBox/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/jorgegso/apiMapBox">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* 3 work */}
          <div
            style={{ backgroundImage: `url(${Face})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className=" font-bold text-white tracking-wider">
                Face ID
              </span>
              <div className="pt-8 text-center">
                <a href="https://ssmart-brainn.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/jorgegso/faceRecognitionApp">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* 4 work */}
          <div
            style={{ backgroundImage: `url(${Robots})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className=" font-bold text-white tracking-wider">
                Robots searcher
              </span>
              <div className="pt-8 text-center">
                <a href="https://jorgegso.github.io/robotsfriendss/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/jorgegso/robotFr">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Weather})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className=" font-bold text-white tracking-wider">
                Weather app
              </span>
              <div className="pt-8 text-center">
                <a href="https://comfy-rabanadas-9df527.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/jorgegso/wetherappReact">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
