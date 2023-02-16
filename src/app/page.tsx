import IconSection from "@/components/icon-section";
import IntroSection from "@/components/intro-section";
import CareerSection from "@/components/career-section";
import Image from "next/image";

const Home = () => {
  return (
    <main className="bg-black min-h-screen h-full relative">
      <IconSection />
      <div className="relative">
        <Image
          src={"/images/bgImg1.png"}
          unoptimized={true}
          quality={100}
          className="w-full h-[1500px]"
          alt="backImg"
          width={1440}
          height={1500}
        />
        <IntroSection />
        <CareerSection />
        <Image
          src={"/images/bgImg1.png"}
          unoptimized={true}
          quality={100}
          className="w-full h-[1500px] rotate-180 mt-[-1px]"
          alt="backImg"
          width={1440}
          height={1500}
        />
      </div>
    </main>
  );
};

export default Home;
