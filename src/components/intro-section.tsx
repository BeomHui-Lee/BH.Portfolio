import Image from "next/image";

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
      <div className="absolute top-[10px] w-full text-[56px] font-semibold text-white text-center">
        <span>
          프론트엔드 개발자. <br />
        </span>
        <span>
          경력 4년 <br />
        </span>
        <span>이범희의 포트폴리오.</span>
      </div>
    </div>
  );
};

export default IntroSection;
