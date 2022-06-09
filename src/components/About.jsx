import React from "react";
import { motion } from "framer-motion";

const About = () => {
  //trancition
  const [lastYPos, setLastYPos] = React.useState(0);
  const [shouldShowActions, setShouldShowActions] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos > lastYPos;

      setShouldShowActions(isScrollingUp);
      setLastYPos(yPos);
    }
    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);
  //moment

  return (
    <div name="about" className="w-full h-screen bg-[#0E1117] text-gray-300 ">
      <div className=" flex flex-col justify-center items-center w-full h-full ">
        <div className="w-full max-w-[1000px] grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <motion.div
              className="actions"
              initial={{ x: -200 }}
              animate={{x: 1 }}
              transition={{ repeat: Infinity ,repeatType: "reverse",
              duration: 4 }}>
              <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                About
              </p>
            </motion.div>
          </div>
          <div></div>
        </div>
        <div className="w-full max-w-[1000px]  grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <motion.div
              className="actions"
              initial={{ opacity: 0 }}
              animate={{ opacity: shouldShowActions ? 1 : 0 }}
              transition={{ opacity: { duration: 1.9 } }}>
              <p>hi nice to meet you. Please take a look around.</p>
            </motion.div>
          </div>
          <div>
            <motion.div
              className="actions"
              initial={{ opacity: 0 }}
              animate={{ opacity: shouldShowActions ? 1 : 0 }}
              transition={{ opacity: { duration: 1.9 } }}>
              <p>
                I’m a full-stack developer specializing in building (and
                occasionally designing) exceptional digital experiences.
                Currently, I’m focused on building responsive full-stack web
                applications.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
