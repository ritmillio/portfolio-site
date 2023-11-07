import React, { useRef, useEffect, Fragment } from "react";
import { chars } from "../../public/svg-intro";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { reveal } from "../../reveal";

const Intro: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const refTypewriter = useRef<HTMLDivElement>(null);
  const refScrollDown = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    async function animate() {
      const sr = (await require("scrollreveal")).default(reveal);
      if (refTypewriter.current) {
        sr.reveal(refTypewriter.current, {
          reset: "false",
        });
      }
      if (refScrollDown.current) {
        sr.reveal(refScrollDown.current, {
          delay: 7300,
          reset: "false",
        });
      }
    }
    animate();
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen dark:bg-happyhues_4-background-primary bg-happyhues_11-background-secondary"
    >
      <div className="h-screen container mx-auto flex flex-col items-center justify-center">
        {/* Add h1 tag for better SEO */}
        <h1 className="absolute invisible">
          Zoltan Fodor - Frontend & Ecommerce Developer
        </h1>

        {/* Framer SVG Animation Medium and Larger screens */}
        {/* Dark Mode Intro */}
        <div className="hidden dark:block">
          <svg
            className="w-[312px] intro-svg sm:w-[620px] md:w-[740px] lg:w-[990px] h-auto z-10"
            viewBox="0 0 690 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {chars.map((character, index) => (
              <Fragment key={character}>
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: index / 10, duration: 1 }}
                  d={character}
                  fill="none"
                  stroke="#FFF"
                  strokeWidth="1"
                ></motion.path>
                <motion.path
                  initial={{ fill: "#ffffff00" }}
                  animate={{ fill: "#ffffff" }}
                  transition={{ delay: 0.6 + index / 10, duration: 0.7 }}
                  fill="none"
                  d={character}
                ></motion.path>
              </Fragment>
            ))}
          </svg>
        </div>

        {/* Light Mode Intro */}
        <div className="dark:hidden block">
          <svg
            className="w-[312px] intro-svg sm:w-[620px] md:w-[740px] lg:w-[990px] h-auto z-10"
            viewBox="0 0 690 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {chars.map((character, index) => (
              <Fragment key={character}>
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: index / 10, duration: 1 }}
                  d={character}
                  fill="none"
                  stroke="#000"
                  strokeWidth="1"
                ></motion.path>
                <motion.path
                  initial={{ fill: "#00000ff" }}
                  animate={{ fill: "#000" }}
                  transition={{ delay: 0.6 + index / 10, duration: 0.7 }}
                  fill="none"
                  d={character}
                ></motion.path>
              </Fragment>
            ))}
          </svg>
        </div>
        <div
          ref={refTypewriter}
          className="text-base max-w-lg mx-auto text-center sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl break-normal dark:text-happyhues_4-text-headline text-happyhues_11-text-headline overflow-clip"
        >
          {/* <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString(`.map(${chars.find('')})`).start();
            }}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Intro;
