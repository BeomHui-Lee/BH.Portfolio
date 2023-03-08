"use client";

import { map, pipe, toArray } from "@fxts/core";
import { TitleBox } from "@/stories/title-box";
import Image from "next/image";
import { useAtom } from "jotai";
import { deviceAtom } from "@/constants/common";

const iconSrcArr1: iconSrcArr[] = [
  { src: "/icons/HTML.svg", className: "", x: "1", top: "300px", text: "HTML" },
  { src: "/icons/JavaScript.svg", className: "", x: "1", top: "500px", text: "JavaScript" },
  { src: "/icons/TypeScript.svg", className: "", x: "1", top: "600px", text: "TypeScript" },
  { src: "/icons/ReScript.png", className: "", x: "1", top: "700px", text: "ReScript" },
];

const iconSrcArr2: iconSrcArr[] = [
  { src: "/icons/NextJS-Light.svg", className: "", x: "1", top: "300px", text: "NextJS" },
  { src: "/icons/React-Light.svg", className: "", x: "1", top: "500px", text: "React" },
  { src: "/icons/VueJS-Light.svg", className: "", x: "1", top: "600px", text: "VueJS" },
];

const iconSrcArr3: iconSrcArr[] = [
  { src: "/icons/TailwindCSS-Light.svg", className: "", x: "1", top: "300px", text: "TailwindCSS" },
  { src: "/icons/Bootstrap.svg", className: "", x: "1", top: "500px", text: "Bootstrap" },
  { src: "/icons/Sass.svg", className: "", x: "1", top: "600px", text: "Sass" },
];

const iconSrcArr4: iconSrcArr[] = [
  { src: "/icons/Vercel-Light.svg", className: "", x: "1", top: "300px", text: "Vercel" },
  { src: "/icons/Sentry.svg", className: "", x: "1", top: "500px", text: "Sentry" },
  { src: "/icons/Figma-Light.svg", className: "", x: "1", top: "500px", text: "Figma" },
];

// const iconSrcArr5: iconSrcArr[] = [
//   { src: "/icons/GraphQL-Light.svg", className: "", x: "1", top: "300px", text: "GraphQL" },
//   { src: "/icons/Sentry.svg", className: "", x: "1", top: "500px", text: "Sentry" },
//   { src: "/icons/Figma-Light.svg", className: "", x: "1", top: "500px", text: "Figma" },
// ];

// { src: "/icons/Vercel-Light.svg", className: "", x: "3", top: "400px", text: "Vercel" },
// { src: "/icons/Sentry.svg", className: "", x: "3", top: "500px", text: "Sentry" },
// { src: "", className: "", x: "3", top: "600px", text: "..." },
// { src: "", className: "", x: "3", top: "700px", text: "더 자세히 보기" },

const Skill = () => {
  const [mobile] = useAtom(deviceAtom);

  const makeDec = (arr: iconSrcArr[]) => {
    let index = 0;
    return pipe(
      arr,
      map(v => {
        index++;
        return (
          <div className="mx-3">
            <Image
              src={v.src}
              width={mobile ? 40 : 100}
              height={mobile ? 40 : 100}
              alt={v.src}
              className="drop-shadow-lg"
            />

            <div key={index} className="mt-1 text-center">
              <span className="text-sm sm:text-base font-bold text-[#1F2024]"> {v.text}</span>
            </div>
          </div>
        );
      }),
      toArray,
    );
  };

  return (
    <div className="max-w-3xl w-full m-auto flex flex-col px-2">
      <div className="font-bold text-[40px] mt-20">기술</div>
      <div className="mt-4">
        <div className="text-[20px]">Language</div>
        <div className="flex flex-row mt-4">{makeDec(iconSrcArr1)}</div>
      </div>

      <div className="mt-10">
        <div className="text-[20px]">Framework & Library</div>
        <div className="flex flex-row mt-4">{makeDec(iconSrcArr2)}</div>
      </div>

      <div className="mt-10">
        <div className="text-[20px]">Style</div>
        <div className="flex flex-row mt-4">{makeDec(iconSrcArr3)}</div>
      </div>

      <div className="mt-10">
        <div className="text-[20px]">Tool</div>
        <div className="flex flex-row mt-4">{makeDec(iconSrcArr4)}</div>
      </div>

      {/*<div className="mt-10">*/}
      {/*  <div className="text-[20px]">Etc</div>*/}
      {/*  <div className="flex flex-row mt-4">{makeDec(iconSrcArr5)}</div>*/}
      {/*</div>*/}
    </div>
  );
};

export default Skill;
