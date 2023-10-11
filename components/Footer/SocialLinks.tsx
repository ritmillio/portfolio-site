"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { reveal } from "../../reveal";

const SocialLinks: React.FC = () => {
  const logoRefYoutube = useRef<HTMLAnchorElement>(null);
  const logoRefLinkedIn = useRef<HTMLAnchorElement>(null);
  const logoRefGithub = useRef<HTMLAnchorElement>(null);
  const logoRefMedium = useRef<HTMLAnchorElement>(null);
  const logoRefSpotify = useRef<HTMLAnchorElement>(null);
  const logoRefBuyMeACoffee = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    async function animate() {
      const sr = (await require("scrollreveal")).default(reveal);

      if (logoRefYoutube.current) {
        sr.reveal(logoRefYoutube.current, {
          origin: "top",
        });
      }
      if (logoRefLinkedIn.current) {
        sr.reveal(logoRefLinkedIn.current, {
          origin: "top",
          delay: 450,
        });
      }
      if (logoRefGithub.current) {
        sr.reveal(logoRefGithub.current, {
          origin: "top",
          delay: 550,
        });
      }
      if (logoRefMedium.current) {
        sr.reveal(logoRefMedium.current, {
          origin: "top",
          delay: 650,
        });
      }
      if (logoRefSpotify.current) {
        sr.reveal(logoRefSpotify.current, {
          origin: "top",
          delay: 750,
        });
      }
      if (logoRefBuyMeACoffee.current) {
        sr.reveal(logoRefBuyMeACoffee.current, {
          origin: "top",
          delay: 850,
        });
      }
    }
    animate();
  }, []);

  return (
    <>
      <div className="h-36 sm:h-40 md:h-48 lg:h-56 dark:bg-happyhues_4-background-secondary bg-happyhues_11-background-primary md:mt-20 lg:mt-24">
        <div className="h-full flex items-center justify-center">
          {/* <a ref={logoRefYoutube} className="mx-2 sm:mx-4  lg:mx-6" href="#" target="_blank" rel="noreferrer">
                <Image
                        loading="lazy"
                        src="https://zoltanfodor.b-cdn.net/youtube-icon.png"
                        width={50}
                        height={50}
                        alt="Follow me on YouTube"
                />
              </a> */}
          <a
            ref={logoRefLinkedIn}
            className="mx-2 sm:mx-4  lg:mx-6"
            href="https://www.linkedin.com/in/zoltan-fodor-007/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="hidden lg:block">
              <Image
                loading="lazy"
                src="https://zoltanfodor.b-cdn.net/linkedin-long-log.svg"
                width={165}
                height={100}
                alt="Follow me on LinkedIn"
              />
            </div>
            <div className="lg:hidden block">
              <Image
                loading="lazy"
                src="https://zoltanfodor.b-cdn.net/linkedin-short.svg"
                width={50}
                height={50}
                alt="Follow me on LinkedIn"
              />
            </div>
          </a>
          <a
            ref={logoRefGithub}
            className="mx-2 sm:mx-4  lg:mx-6"
            href="https://github.com/ritmillio"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              loading="lazy"
              src="https://zoltanfodor.b-cdn.net/github-logo-octopus.png"
              width={50}
              height={50}
              alt="Follow me on github and check out my work"
            />
          </a>
          <a
            ref={logoRefMedium}
            className="mx-2 sm:mx-4  lg:mx-6"
            href="https://medium.com/@zoltan_fodor_"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              loading="lazy"
              src="https://zoltanfodor.b-cdn.net/medium-logo.png"
              width={50}
              height={50}
              alt="Follow me on Medium"
            />
          </a>
          <a
            ref={logoRefSpotify}
            className="mx-2 sm:mx-4  lg:mx-6"
            href="https://open.spotify.com/playlist/1DgMS1ijBNF6DXwFYEkqYf?si=f566169303a84109"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              loading="lazy"
              src="https://zoltanfodor.b-cdn.net/spotify-3771073-3147690.png"
              width={50}
              height={50}
              alt="Listen my dev music chanel on spotify"
            />
          </a>
          <a
            ref={logoRefBuyMeACoffee}
            className="mx-2 sm:mx-4 lg:mx-6"
            href="https://www.buymeacoffee.com/zoltanfodor"
            target="_blank"
            rel="noreferrer"
          >
            <div className="hidden lg:block">
              <Image
                loading="lazy"
                src="https://zoltanfodor.b-cdn.net/bmac-logo-long.svg"
                width={165}
                height={100}
                alt="Support me via Buymeacoffee.com but just if you like my content"
              />
            </div>
            <div className="lg:hidden block">
              <Image
                loading="lazy"
                src="https://zoltanfodor.b-cdn.net/bmac-logo-small.svg"
                width={50}
                height={50}
                alt="Support me via Buymeacoffee.com but just if you like my content"
              />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default SocialLinks;
