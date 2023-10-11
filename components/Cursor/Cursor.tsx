"use client";

import dynamic from "next/dynamic";
import React, { useEffect } from "react";

const AnimatedCursor: any = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const Cursor: React.FC = () => {
  //Check if user is on mobile/tablet
  let touchScreen;
  useEffect(() => {
    touchScreen = window.matchMedia("(pointer:coarse)").matches;
  });

  if (!touchScreen) {
    return (
      <AnimatedCursor
        innerSize={8}
        outerSize={70}
        innerScale={1.2}
        outerScale={1.7}
        outerAlpha={0}
        hasBlendMode={true}
        outerStyle={{
          border: "3px solid var(--cursor_border_color)",
        }}
        innerStyle={{
          backgroundColor: "var(--cursor_background_color)",
        }}
      />
    );
  } else {
    return null;
  }
};

export default Cursor;
