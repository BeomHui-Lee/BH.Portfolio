import { map, pipe, toArray } from "@fxts/core";
import { TitleBox } from "@/stories/title-box";
import { descArrGreenlabs } from "@/docs/career-greenlabs";
import { descArrDouzone } from "@/docs/career-douzone";

const Career = () => {
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
      <div className="font-bold text-[40px] mt-20">경력</div>
      <div className="font-bold text-[30px] mt-10">그린랩스 (2021.10 ~ 재직중)</div>
      <div className="text-[15px]">자재플랫폼 개발실 / 팀원</div>
      <div className="font-bold text-[20px] mt-10">주요 성과</div>
      <div className="flex flex-col mt-2">
        {descArrGreenlabs.map((v, index: number) => {
          return (
            <div key={v.descTitle} id={`tab${[index]}`} className="mt-14 w-full first:mt-2">
              <TitleBox text={v.descTitle} subText={v.descSubTitle || ""} />
              <ul className="mt-4 ml-8 list-outside list-disc pr-4 pt-1" style={{ listStyle: "disc" }}>
                {makeDec(v.desc)}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="font-bold text-[30px] mt-[100px]">더존비즈온 (2018.05 ~ 2021.04)</div>
      <div className="text-[15px]">플랫폼사업부문 서비스개발센터 / 주임연구원</div>
      <div className="font-bold text-[20px] mt-10">주요 성과</div>
      <div className="flex flex-col mt-2 mb-[100px]">
        {descArrDouzone.map((v, index: number) => {
          return (
            <div key={v.descTitle} id={`tab${[index]}`} className="mt-14 w-full first:mt-2">
              <TitleBox text={v.descTitle} subText={v.descSubTitle || ""} />
              <ul className="mt-4 ml-8 list-outside list-disc pr-4 pt-1" style={{ listStyle: "disc" }}>
                {makeDec(v.desc)}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Career;
