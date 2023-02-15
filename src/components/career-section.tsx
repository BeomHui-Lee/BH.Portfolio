"use client";

import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, FreeMode } from "swiper";
import { Controller, Scene } from "react-scrollmagic";

type ImgArr = {
  src: string;
};

const ImgSet: ImgArr[] = [{ src: "/images/greenlabs-logo.png" }, { src: "/images/douzone-logo.svg" }];

const CareerSection = () => {
  const beltScrollImage = () => {
    return ImgSet.map((img: ImgArr, index: number) => {
      return (
        <SwiperSlide className="first:ml-4 last:mr-4 mr-2 !w-[88px]" key={index}>
          <div className="h-[500px] w-[400px] overflow-hidden rounded-lg bg-[#F7F8FA]">
            <Image src={img.src} width={350} height={770} alt={"img"} className="m-4" />
          </div>
        </SwiperSlide>
      );
    });
  };

  return (
    <div className="no-scrollbar w-full overflow-x-auto">
      <Swiper
        modules={[Mousewheel, FreeMode]}
        slidesPerView={"auto"}
        mousewheel={{
          forceToAxis: true,
          releaseOnEdges: true,
        }}
        // initialSlide={initSeq || 0}
        freeMode={{
          enabled: true,
          sticky: true,
        }}
        // onAfterInit={afterSwiperInit}
        // onSlideChange={swiper => handleSlideChange(swiper)}
      >
        {beltScrollImage()}
      </Swiper>
    </div>
  );
};

export default CareerSection;
