import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";
import { ROUTE } from "@/constants/route";

const Navbar = () => {
  return (
    <div className="w-full bg-[#161617] h-[44px] grid grid-cols-12 text-center items-center justify-center text-white pt-2 sm:pt-0">
      <div className="col-span-4 sm:col-span-3 text-left ml-2 sm:ml-10 text-[14px] sm:text-[16px]">
        이범희의 포트폴리오
      </div>
      <div className="col-span-8 sm:col-span-6 flex flex-row justify-center">
        <Link href={ROUTE.MAIN}>
          <HomeIcon className="h-6 w-6" />
        </Link>
        <div className="ml-1 sm:ml-6">기술 스택</div>
        <Link href={ROUTE.CAREER}>
          <div className="ml-1 sm:ml-6">경력 사항</div>
        </Link>
        <div className="ml-1 sm:ml-6">기타 사항</div>
      </div>
      <div className="col-span-0 sm:col-span-3"></div>
    </div>
  );
};

export default Navbar;
