"use client";

import React from "react";
import { useTheme } from "next-themes";
import LucideIcon from "@/components/LucideIcon/Icon";

const ProgressBar: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="absolute top-0 right-0 mr-2 mt-2 sm:mr-4 sm:mt-4 md:mr-8 md:mt-8">
      {theme === "light" ? (
        <LucideIcon
          name="sun"
          width={25}
          height={25}
          onClick={() => setTheme("dark")}
        />
      ) : (
        <LucideIcon
          name="moon"
          width={25}
          height={25}
          onClick={() => setTheme("light")}
        />
      )}
    </div>
  );
};

export default ProgressBar;
