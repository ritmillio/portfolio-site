"use client";

import React, { useRef, useEffect } from "react";
import { reveal } from "../../reveal";
import AboutLogos from "./AboutLogos";

const About: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function animate() {
      const sr = (await require("scrollreveal")).default(reveal);
      if (headingRef.current) {
        sr.reveal(headingRef.current);
      }
      if (imageRef.current) {
        sr.reveal(imageRef.current, {
          origin: "left",
          distance: "40px",
        });
      }
    }
    animate();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center dark:bg-happyhues_4-background-secondary bg-happyhues_11-background-primary">
      <div id="about"></div>
      <div className="py-20 px-2 sm:px-4">
        <h2
          className="w-fit uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl dark:text-happyhues_4-text-headline text-happyhues_11-text-headline"
          ref={headingRef}
        >
          About
        </h2>
        <h6 className="underline pt-2 pl-[1px] italic">Who am I ?</h6>
        <div className="flex flex-row-reverse items-center justify-center">
          <div className="flex flex-col lg:ml-12 pt-4">
            <p className="dark:text-happyhues_4-text-headline text-happyhues_11-text-headline text-lg md:text-xl max-w-2xl text-left lg:text-justify tracking-wider lg:mr-20 md:leading-relaxed lg:leading-relaxed">
              I was first introduced to computer science when I had the
              opportunity to build a business from scratch, a mobile
              application. However, my team and I faced a major obstacle: our
              lack of knowledge about coding. This motivated me to learn how to
              code, and I started to master it on my own.
            </p>
            <p className="dark:text-happyhues_4-text-headline text-happyhues_11-text-headline text-lg md:text-xl max-w-2xl text-left lg:text-justify tracking-wider lg:mr-20 md:leading-relaxed lg:leading-relaxed">
              I decided to pursue a career in Frontend Development, specifically
              in building custom Shopify and Medusa js webshops, as I have
              always loved using the browser as a canvas. My focus is on helping
              companies, from small local businesses to large e-commerce giants,
              to build a better UI experience and enhance their online presence.
              Additionally, I am also interested in animating the web and am
              constantly developing myself and learning new things such as
              Locomotive Scroll, GSAP, and Three.js.
            </p>
            <p className="pt-4 text-lg md:text-xl lg:text-2xl italic">
              Some tools/libraries/frameworks/technologies I like to use
            </p>
            <AboutLogos />
          </div>
          {/* <div ref={imageRef} className='relative h-[400px] w-[250px] mr-auto hidden lg:block ml-20'>
                  <Image 
                      className='absolute rounded-md'
                      src='https://zoltanfodor.b-cdn.net/zoltan-fodor-resi-prof.jpeg'
                      layout='fill'
                      loading='lazy'
                      alt='Zoltan Fodor - Creative Developer'
                  />
                </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
