import { HomeIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <div className="w-full bg-[#161617] h-[44px] grid grid-cols-12 text-center items-center justify-center text-white">
      <div className="col-span-2 text-left ml-10">이범희의 포트폴리오</div>
      <div className="col-span-8 flex flex-row justify-center">
        <HomeIcon className="h-6 w-6" />
        <div className="ml-6">기술 스택</div>
        <div className="ml-6">경력 사항</div>
        <div className="ml-6">기타 사항</div>
      </div>
      <div className="col-span-2"></div>
    </div>
  );
};

export default Navbar;
