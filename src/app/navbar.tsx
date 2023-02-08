import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";
import {ROUTE} from "@/constants/route";

const Navbar = () => {
  return (
    <div className="w-full bg-[#161617] h-[44px] grid grid-cols-12 text-center items-center justify-center text-white">
      <div className="col-span-2 text-left ml-10">이범희의 포트폴리오</div>
      <div className="col-span-8 flex flex-row justify-center">
        <Link href={ROUTE.MAIN}><HomeIcon className="h-6 w-6" /></Link>
        <div className="ml-6">기술 스택</div>
        <Link href={ROUTE.CAREER}><div className="ml-6">경력 사항</div></Link>
        <div className="ml-6">기타 사항</div>
      </div>
      <div className="col-span-2"></div>
    </div>
  );
};

export default Navbar;
