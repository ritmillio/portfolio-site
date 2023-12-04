import React from "react";
import ContactMe from "./ContactMe";
import SocialLinks from "./SocialLinks";

const Footer: React.FC = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute top-0 -mt-8 h-10 w-full mx-auto"></div>
        <div className="pt-12 dark:bg-[#101218] bg-happyhues_11-background-secondary">
          <ContactMe />
          <SocialLinks />
          <div className="flex flex-col items-center justify-center py-2">
            <p
              className="
            text-neutral-200"
            >
              © Zoltan Fodor {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
