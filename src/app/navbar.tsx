import { HomeIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <div className="w-full bg-[#161617] h-[44px] flex flex-row text-center items-center justify-center text-white">
      <HomeIcon className="h-6 w-6"/>
      <div className="ml-6">기술 스택</div>
      <div className="ml-6">경력 사항</div>
      <div className="ml-6">기타 사항</div>
    </div>
  )
}

export default Navbar;