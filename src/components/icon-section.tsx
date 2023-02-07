"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { map, pipe, toArray } from "@fxts/core";

type iconSrcArr = {
  src: string;
  className: string;
  fadeOption: number;
};

const IconSection = () => {
  const [delay1s, setDelay1s] = useState<boolean>(false);
  const [delay2s, setDelay2s] = useState<boolean>(false);
  const [delay3s, setDelay3s] = useState<boolean>(false);

  const iconSrcArr: iconSrcArr[] = [
    { src: "/icons/Bootstrap.svg", className: "ml-[5%] mt-[50px] ", fadeOption: 1 },
    { src: "/icons/CSS.svg", className: "ml-[83%] mt-[70px] ", fadeOption: 1 },
    { src: "/icons/Figma-Light.svg", className: "ml-[35%] mt-[210px] ", fadeOption: 1 },
    { src: "/icons/Github-Light.svg", className: "ml-[40%] mt-[350px] ", fadeOption: 1 },
    { src: "/icons/GraphQL-Light.svg", className: "ml-[59%] mt-[450px] ", fadeOption: 1 },
    { src: "/icons/HTML.svg", className: "ml-[84%] mt-[610px] ", fadeOption: 1 },
    { src: "/icons/JavaScript.svg", className: "ml-[38%] mt-[650px] ", fadeOption: 1 },
    { src: "/icons/NextJS-Light.svg", className: "ml-[42%] mt-[70px] ", fadeOption: 1 },
    { src: "/icons/NodeJS-Light.svg", className: "ml-[17%] mt-[150px] ", fadeOption: 2 },
    { src: "/icons/React-Light.svg", className: "ml-[63%] mt-[100px] ", fadeOption: 2 },
    { src: "/icons/Redux.svg", className: "ml-[7%] mt-[240px] ", fadeOption: 2 },
    { src: "/icons/RollupJS-Light.svg", className: "ml-[76%] mt-[240px] ", fadeOption: 2 },
    { src: "/icons/Sass.svg", className: "ml-[88%] mt-[280px] ", fadeOption: 2 },
    { src: "/icons/Sentry.svg", className: "ml-[67%] mt-[310px] ", fadeOption: 2 },
    { src: "/icons/SVG-Light.svg", className: "ml-[53%] mt-[330px] ", fadeOption: 2 },
    { src: "/icons/TailwindCSS-Light.svg", className: "ml-[25%] mt-[360px] ", fadeOption: 2 },
    { src: "/icons/SVG-Light.svg", className: "ml-[14%] mt-[380px] ", fadeOption: 3 },
    { src: "/icons/TypeScript.svg", className: "ml-[85%] mt-[420px] ", fadeOption: 3 },
    { src: "/icons/Vercel-Light.svg", className: "ml-[52%] mt-[490px] ", fadeOption: 3 },
    { src: "/icons/VisualStudio-Light.svg", className: "ml-[69%] mt-[510px] ", fadeOption: 3 },
    { src: "/icons/Vite-Light.svg", className: "ml-[33%] mt-[540px] ", fadeOption: 3 },
    { src: "/icons/VSCode-Light.svg", className: "ml-[15%] mt-[570px] ", fadeOption: 3 },
    { src: "/icons/VueJS-Light.svg", className: "ml-[60%] mt-[600px] ", fadeOption: 3 },
    { src: "/icons/Webpack-Light.svg", className: "ml-[25%] mt-[620px] ", fadeOption: 3 },
  ];

  useEffect(() => {
    setTimeout(() => {
      setDelay1s(true);
    }, 1000);

    setTimeout(() => {
      setDelay2s(true);
    }, 2000);

    setTimeout(() => {
      setDelay3s(true);
    }, 3000);
  }, []);

  return (
    <div className="relative h-[1000px]">
      {pipe(
        iconSrcArr,
        map(v => (
          <Image
            key={v.src}
            className={`absolute ${v.className} transition-all duration-1000 ${
              v.fadeOption === 1
                ? delay1s
                  ? "opacity-100"
                  : "opacity-0"
                : v.fadeOption === 2
                ? delay2s
                  ? "opacity-100"
                  : "opacity-0"
                : delay3s
                ? "opacity-100"
                : "opacity-0"
            }`}
            src={v.src}
            alt={v.src}
            width={100}
            height={100}
          />
        )),
        toArray,
      )}
    </div>
  );
};

export default IconSection;
