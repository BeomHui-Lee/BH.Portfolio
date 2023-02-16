"use client";

import Image from "next/image";
import Link from "next/link";
import { ROUTE } from "@/constants/route";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, FreeMode } from "swiper";
import "swiper/css";

type ImgArr = {
  src: string;
  companyName: string;
  date: string;
  detail1: string;
  detail2: string;
};

const ImgSet: ImgArr[] = [
  {
    src: "/images/greenlabs-logo.png",
    companyName: "그린랩스",
    date: "2021.10 ~ 재직중",
    detail1: "자재플랫폼개발실",
    detail2: "팀원",
  },
  {
    src: "/images/douzone-logo.svg",
    companyName: "더존비즈온",
    date: "2018.05 ~ 2021.04",
    detail1: "플랫폼사업부문 서비스개발센터",
    detail2: "주임연구원",
  },
  {
    src: "",
    companyName: "",
    date: "",
    detail1: "",
    detail2: "",
  },
];

const CareerCard = ({ src = "", companyName, date, detail1, detail2 }: ImgArr) => {
  return (
    <div className="relative h-[350px] w-[400px] overflow-hidden rounded-lg bg-gradient-to-b from-fuchsia-100 to-purple-100 text-[#262626]">
      <Image src={src} width={350} height={100} alt={"img"} style={{ objectFit: "contain" }} className="m-4" />
      <div className="absolute top-[120px] mx-4 text-[20px] text-[#1F2024] font-semibold">
        <div className="line-clamp-2 mr-2.5 mt-[12px] min-h-[23px] break-all">회사명 : {companyName}</div>
        <div className="line-clamp-2 mr-2.5 mt-[12px] min-h-[23px] break-all">재직 기간 : {date}</div>
        <div className="line-clamp-2 mr-2.5 mt-[12px] min-h-[23px] break-all">부서 : {detail1}</div>
        <div className="line-clamp-2 mr-2.5 mt-[12px] min-h-[23px] break-all">역할 : {detail2}</div>
      </div>
    </div>
  );
};

const CareerSection = () => {
  const visibleCount = 2;
  // const beltScrollImage = () => {
  //   return ImgSet.map((img: ImgArr, index: number) => {
  //     return (
  //       <SwiperSlide className="first:ml-4 last:mr-4 mr-2" key={index}>
  //         <div className="h-[50px] w-[40px] overflow-hidden rounded-lg bg-[#F7F8FA]">
  //           <Image src={img.src} width={35} height={77} alt={"img"} className="m-4" />
  //         </div>
  //       </SwiperSlide>
  //     );
  //   });
  // };

  const beltScrollImage = () => {
    return ImgSet.map((img: ImgArr, index: number) => {
      if (index < visibleCount) {
        return (
          <div className="w-fit" key={index}>
            <CareerCard {...img} />
          </div>
        );
      } else if (index === visibleCount) {
        return (
          <div key={index} className="w-full text-center col-span-2 h-[40px]">
            <Link href={ROUTE.CAREER}>
              <div className="w-full rounded-lg border border-[#DCDFE3] bg-white px-4 py-[8.5px] text-center">
                <p className="text-[15px] font-medium text-[#1F2024]">경력 사항 자세히 보기</p>
              </div>
            </Link>
          </div>
        );
      }
    });
  };

  return (
    // <Swiper
    //   modules={[Mousewheel, FreeMode]}
    //   slidesPerView={"auto"}
    //   mousewheel={{
    //     forceToAxis: true,
    //     releaseOnEdges: true,
    //   }}
    //   initialSlide={0}
    //   freeMode={{
    //     enabled: true,
    //     sticky: true,
    //   }}
    //   // onAfterInit={afterSwiperInit}
    //   // onSlideChange={swiper => handleSlideChange(swiper)}
    // >
    //   {beltScrollImage()}
    // </Swiper>
    <div className="absolute z-40 top-[2000px] justify-center grid no-scrollbar w-full overflow-x-auto">
      <div className="no-scrollbar w-full">
        <div className="grid grid-cols-2 gap-x-6 gap-y-6 w-fit">{beltScrollImage()}</div>
      </div>
      <div className="text-[40px] text-white mt-[200px] justify-self-center">꼭 함께 일할 수 있으면 좋겠습니다.</div>
      <div className="text-[20px] text-white mt-[40px] text-[#e1e1e1] justify-self-center">
        연락처: huina0901@naver.com
      </div>
    </div>
  );
};

export default CareerSection;
