"use client";

import Image from "next/image";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline, SplitChars } from "react-gsap";
import { map, pipe, toArray } from "@fxts/core";

const iconSrcArr: iconSrcArr[] = [
  { src: "/icons/HTML.svg", className: "", x: "20%", top: "300px", text: "HTML" },
  { src: "/icons/CSS.svg", className: "", x: "20%", top: "400px", text: "CSS" },
  { src: "/icons/JavaScript.svg", className: "", x: "20%", top: "500px", text: "JavaScript" },
  { src: "/icons/TypeScript.svg", className: "", x: "20%", top: "600px", text: "TypeScript" },
  { src: "/icons/ReScript.png", className: "", x: "20%", top: "700px", text: "ReScript" },
  { src: "/icons/React-Light.svg", className: "", x: "45%", top: "300px", text: "React" },
  { src: "/icons/VueJS-Light.svg", className: "", x: "45%", top: "400px", text: "VueJS" },
  { src: "/icons/NextJS-Light.svg", className: "", x: "45%", top: "500px", text: "NextJS" },
  { src: "/icons/TailwindCSS-Light.svg", className: "", x: "45%", top: "600px", text: "TailwindCSS" },
  { src: "/icons/Sass.svg", className: "", x: "45%", top: "700px", text: "Sass" },
  { src: "/icons/Bootstrap.svg", className: "", x: "70%", top: "300px", text: "Bootstrap" },
  { src: "/icons/Vercel-Light.svg", className: "", x: "70%", top: "400px", text: "Vercel" },
  { src: "/icons/Sentry.svg", className: "", x: "70%", top: "500px", text: "Sentry" },
  { src: "", className: "", x: "70%", top: "600px", text: "..." },
  { src: "", className: "", x: "70%", top: "700px", text: "더 자세히 보기" },
];

const IntroSection = () => {
  return (
    <div className="relative">
      <Image
        src={"/images/bgImg1.png"}
        unoptimized={true}
        quality={100}
        className="w-full"
        alt="backImg"
        width={1440}
        height={1500}
      />
      <div className="absolute top-[10px] w-full text-[30px] sm:text-[56px] font-semibold bg-clip-text text-transparent bg-gradient-to-b from-pink-400 via-pink-500 to-violet-500 text-center">
        <div className="">
          <span>
            안녕하세요.
            <br />
          </span>
          <span>
            경력 4년 프론트엔드 개발자
            <br />
          </span>
          <span>이범희 입니다.</span>
        </div>
      </div>
      <div className="absolute top-[300px] w-full h-[500px] text-center">
        <Controller>
          <Scene duration={800} pin={true} enabled={true}>
            <div className="sticky text-black text-[24px] sm:text-[50px]">
              <div className="z-30 font-bold">
                <span>
                  먼저, 제가 사용할 수 있는 기술은 <br />
                </span>
                <span>
                  다음과 같습니다. <br />
                </span>
              </div>
            </div>
          </Scene>
        </Controller>

        {/*<Controller>*/}
        {/*  <Scene pin={false} reverse={true} duration={500} offset={-300}>*/}
        {/*    <Tween*/}
        {/*      wrapper={<div className="textContainer" />}*/}
        {/*      staggerFrom={{*/}
        {/*        left: -2000,*/}
        {/*        rotation: -720,*/}
        {/*        opacity: 0,*/}
        {/*        color: "#ff0000",*/}
        {/*        ease: "Expo.easeOut",*/}
        {/*      }}*/}
        {/*      stagger={0.15}*/}
        {/*      onCompleteAll={() => {*/}
        {/*        console.log("on complete all");*/}
        {/*      }}*/}
        {/*    >*/}
        {/*      <SplitChars wrapper={<span className="text-white"></span>}>{"AIIIGHT"}</SplitChars>*/}
        {/*    </Tween>*/}
        {/*  </Scene>*/}
        {/*  <div className="section" />*/}
        {/*</Controller>*/}
      </div>
      <div className="absolute top-[50px] w-full h-[500px] text-center">
        <Controller>
          <div>
            <Scene triggerHook="onLeave" duration={1000} pin>
              {(progress: any) => (
                <div className="sticky z-40 w-full h-[800px]">
                  <Timeline totalProgress={progress} paused>
                    {pipe(
                      iconSrcArr,
                      map(v => (
                        <Tween from={{ opacity: 0, x: "50%", top: "0%" }} to={{ opacity: 1, x: v.x, top: v.top }}>
                          <div className="flex animation absolute w-screen h-[80px]">
                            {!!v.src ? (
                              <>
                                <Image src={v.src} width={80} height={80} alt={v.src} className="drop-shadow-lg" />
                                <div className="ml-4 text-[20px] self-center">{v.text}</div>
                              </>
                            ) : (
                              <div
                                className={
                                  v.text === "더 자세히 보기"
                                    ? "rounded-[16px] bg-purple-200 shadow-lg shadow-indigo-500/50 place-self-center w-[160px]"
                                    : ""
                                }
                              >
                                <div className="text-[20px] self-center">{v.text}</div>
                              </div>
                            )}
                          </div>
                        </Tween>
                      )),
                      toArray,
                    )}
                  </Timeline>
                </div>
              )}
            </Scene>
          </div>
        </Controller>
      </div>
      <div className="absolute t-[-50px] z-40 w-full h-[500px] text-center">
        {/*<Controller>*/}
        {/*  <Scene duration={1000} pin={true} enabled={true}>*/}
        {/*    <div className="sticky text-black text-[24px] sm:text-[50px]">*/}
        {/*      <div className="z-30 font-bold">*/}
        {/*        <span>*/}
        {/*          그리고 저는 아래와 같은 <br />*/}
        {/*        </span>*/}
        {/*        <span>*/}
        {/*          경력이 있습니다.*/}
        {/*          <br />*/}
        {/*        </span>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </Scene>*/}
        {/*</Controller>*/}
      </div>
      <Image
        src={"/images/bgImg1.png"}
        unoptimized={true}
        quality={100}
        className="w-full rotate-180 mt-[-1px]"
        alt="backImg"
        width={1440}
        height={1500}
      />
    </div>
  );
};

export default IntroSection;
