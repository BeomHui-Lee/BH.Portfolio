import IconSection from "@/components/icon-section";
import IntroSection from "@/components/intro-section";
import CareerSection from "@/components/career-section";

const Home = () => {
  return (
    <main className="bg-black min-h-screen h-full relative">
      <IconSection />
      <IntroSection />
      <CareerSection />
    </main>
  );
};

export default Home;
