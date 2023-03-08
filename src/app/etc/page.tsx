import { map, pipe, toArray } from "@fxts/core";
import { TitleBox } from "@/stories/title-box";
import { descArrGreenlabs } from "@/docs/career-greenlabs";
import { descArrDouzone } from "@/docs/career-douzone";
import Image from "next/image";

const Etc = () => {
  const makeDec = (decArray: string[] | string, useBrTag: boolean = false) => {
    let decArr = decArray;
    let index = 0;
    if (typeof decArray === "string") {
      if (useBrTag && decArray.length > 0) {
        decArr = decArray.split("<br/>");
      } else {
        decArr = decArray.split("\n");
      }
    }
    return pipe(
      decArr,
      map((v: string) => {
        index++;
        return decArr.length === index ? (
          <li key={index} className="mt-1 marker:text-[13px]">
            <span className="text-base font-bold text-[#1F2024]"> 평가: {v.replaceAll("-", "")}</span>
          </li>
        ) : (
          <li key={index} className="mt-1 marker:text-[13px]">
            <span className="text-base font-normal text-[#1F2024]">{v.replaceAll("-", "")}</span>
          </li>
        );
      }),
      toArray,
    );
  };

  return (
    <div className="max-w-3xl w-full m-auto flex flex-col px-2">
      <div className="font-bold text-[40px] mt-20">기타</div>

      <div className="font-bold text-[30px] mt-10">수상 경력</div>
      <div className="font-bold text-[20px] mt-4">올바름상 (Rightness)</div>
      <div className="text-[20px] mt-1">개발자 RoleModel 부문 - 그린랩스</div>

      <div className="flex flex-row">
        <Image className="mr-2 rounded-2xl" src={"/images/IMG_0523.jpg"} alt={"img1"} width={300} height={400} />
        <Image className="mr-2 rounded-2xl" src={"/images/IMG_0525.jpg"} alt={"img1"} width={300} height={400} />
        <Image className="rounded-2xl" src={"/images/IMG_0528.jpg"} alt={"img1"} width={300} height={400} />
      </div>

      <div className="font-bold text-[30px] mt-[100px]">링크</div>
      <a className="text-[20px] mt-4" href={"https://github.com/BeomHui-Lee"}>
        깃허브
      </a>
      <a className="text-[20px] mt-4" href={"https://frontend-study.tistory.com/"}>
        블로그
      </a>
    </div>
  );
};

export default Etc;
