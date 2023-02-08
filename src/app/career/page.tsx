import { map, pipe, toArray } from "@fxts/core";
import {TitleBox} from "@/stories/title-box";
import {descArr} from "@/docs/career-greenlabs";

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
        return (
          decArr.length === index ?
            <li key={index} className="mt-1 marker:text-[13px]">
              <span className="text-base font-bold text-[#1F2024]"> 평가: {v.replaceAll("-", "")}</span>
            </li> :
          <li key={index} className="mt-1 marker:text-[13px]">
            <span className="text-base font-normal text-[#1F2024]">{v.replaceAll("-", "")}</span>
          </li>
        );
      }),
      toArray,
    );
  };

  return (
    <div className="max-w-3xl w-full m-auto flex flex-col">
      <div className="font-bold text-[40px] mt-20">경력</div>
      <div className="font-bold text-[30px] mt-10">그린랩스 (2021.10.25 ~ 재직중)</div>
      <div className="text-[15px]">자재플랫폼 개발실 / 팀원</div>
      <div className="font-bold text-[20px] mt-10">주요 성과</div>
      <div className="flex flex-col mt-2">
        {descArr.map((v, index: number) => {
          return (
            <div key={v.descTitle} id={`tab${[index]}`} className="mt-14 w-full first:mt-2">
              <TitleBox text={v.descTitle} subText={v.descSubTitle || ""}/>
              <ul className="mt-4 ml-8 list-outside list-disc pr-4 pt-1" style={{ listStyle: "disc" }}>
                {makeDec(v.desc)}
              </ul>
            </div>
          );
        })}

        {/*<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>*/}
        {/*<textarea*/}
        {/*  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"*/}
        {/*  value={""}*/}
        {/*  readOnly={true}*/}
        {/*></textarea>*/}
      </div>
    </div>
  );
};

export default Career;
