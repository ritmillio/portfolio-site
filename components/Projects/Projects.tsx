import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { reveal } from "../../reveal";

const Projects: React.FC = () => {
  const headerRefComponent = useRef<HTMLHeadingElement>(null);
  const imageRefComponent = useRef<HTMLDivElement>(null);
  const imageSecRefComponent = useRef<HTMLDivElement>(null);
  const imageThirdRefComponent = useRef<HTMLDivElement>(null);
  const imageFourthRefComponent = useRef<HTMLDivElement>(null);
  const imageFifthRefComponent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function animate() {
      const sr = (await require("scrollreveal")).default(reveal);
      if (headerRefComponent.current) {
        sr.reveal(headerRefComponent.current);
      }
      if (imageRefComponent.current) {
        sr.reveal(imageRefComponent.current);
      }
      if (imageSecRefComponent.current) {
        sr.reveal(imageSecRefComponent.current, { delay: 500 });
      }
      if (imageThirdRefComponent.current) {
        sr.reveal(imageThirdRefComponent.current, { delay: 600 });
      }
      if (imageFourthRefComponent.current) {
        sr.reveal(imageFourthRefComponent.current, { delay: 700 });
      }
      if (imageFifthRefComponent.current) {
        sr.reveal(imageFifthRefComponent.current, { delay: 800 });
      }
    }
    animate();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center dark:bg-happyhues_4-background-primary  bg-happyhues_11-background-secondary">
      <div className="container mx-auto py-20 px-4">
        <h2
          className="uppercase text-left sm:text-right text-5xl sm:text-6xl md:text-7xl lg:text-8xl dark:text-happyhues_4-text-headline text-happyhues_11-text-headline"
          ref={headerRefComponent}
        >
          Projects
        </h2>
        <h6 className="underline pt-2 pb-6 pr-[1px] text-left sm:text-right italic">
          Some of the biggest Projects I have been working on.
        </h6>
        <div className="flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-10 xl:gap-12 pt-6 lg:pt-12">
          <a
            href="https://winwithme.hu"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transform-gpu transition-all"
          >
            <div
              ref={imageRefComponent}
              className="relative h-[150px] w-[290px] md:h-[200px] md:w-[350px]"
            >
              <Image
                className="absolute rounded-md"
                src="https://zoltanfodor.b-cdn.net/projects/winwithme-intro.png"
                fill
                loading="lazy"
                alt="Win With Me"
              />
            </div>
          </a>
          <a
            href="https://www.nespresso.com/hu/hu"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transform-gpu transition-all"
          >
            <div
              ref={imageSecRefComponent}
              className="relative h-[150px] w-[290px] md:h-[200px] md:w-[350px] hover:scale-110 transform-gpu transition-all"
            >
              <Image
                className="absolute rounded-md"
                src="https://zoltanfodor.b-cdn.net/projects/nespresso.png"
                fill
                loading="lazy"
                alt="Nespresso Hungary"
              />
            </div>
          </a>
          <a
            href="https://masterofmixes.dk/"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transform-gpu transition-all"
          >
            <div
              ref={imageThirdRefComponent}
              className="relative h-[150px] w-[290px] md:h-[200px] md:w-[350px] hover:scale-110 transform-gpu transition-all"
            >
              <Image
                className="absolute rounded-md"
                src="https://zoltanfodor.b-cdn.net/projects/masterofmixes-dk.png"
                fill
                loading="lazy"
                alt="Master of Mixes Denmark"
              />
            </div>
          </a>
          <a
            href="https://nailster.dk/"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transform-gpu transition-all"
          >
            <div
              ref={imageFourthRefComponent}
              className="relative h-[150px] w-[290px] md:h-[200px] md:w-[350px] hover:scale-110 transform-gpu transition-all"
            >
              <Image
                className="absolute rounded-md"
                src="https://zoltanfodor.b-cdn.net/projects/nailster-dk.png"
                fill
                loading="lazy"
                alt="Nailster Denmark"
              />
            </div>
          </a>
          <a
            href="https://pearlwax.dk/"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transform-gpu transition-all"
          >
            <div
              ref={imageFifthRefComponent}
              className="relative h-[150px] w-[290px] md:h-[200px] md:w-[350px] hover:scale-110 transform-gpu transition-all"
            >
              <Image
                className="absolute rounded-md"
                src="https://zoltanfodor.b-cdn.net/projects/pearlwax-dk.png"
                fill
                loading="lazy"
                alt="Win With Me"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
