import { map, pipe, toArray } from "@fxts/core";

const Career = () => {
  const descArr = [
    {
      descTitle:
        "[자재 플랫폼 서비스 마이그레이션] (목표: 브이하우스 어드민 페이지를 기반으로 자재 플랫폼 어드민 서비스 전체 기능의 마이그레이션을 수행하고 테스트를 완료 한다, 달성도: 100%, 평가: Meet Expectation)",
      desc:
        "기존 vue로 구성된 브이하우스의 어드민 페이지들을 react를 이용하여 마이그레이션 하였으며, 전반적인 레이아웃 구성 (sidebar, navbar 등) 및 UI 를 담당하여 진행 하였습니다.\n" +
        "수익성 모델 관리 및 등록,수정등 수익성 등록 파트의 마이그레이션을 담당하여 진행 하였습니다.\n" +
        "내 프로필 및 조직원 관리등 사용자/조직 관리 파트의 마이그레이션을 담당하여 진행 하였습니다.\n" +
        "DevExtreme라는 데이터 그리드 라이브러리를 사용하여 폼을 만드는데, 해당 폼을 이 프로젝트에 맞게 간편하게 사용 할 수 있도록 공통 컴포넌트화 하였습니다.\n" +
        "(평가 사유) : 전체적으로 일정과 목적에 부합하는 성과를 달성했으며 특별한 이슈 없이 해당 프로젝트의 개발을 완료 하였습니다.",
    },
    {
      descTitle:
        "[자재 플랫폼 서비스 마이그레이션] (목표: 브이하우스 어드민 페이지를 기반으로 자재 플랫폼 어드민 서비스 전체 기능의 마이그레이션을 수행하고 테스트를 완료 한다, 달성도: 100%, 평가: Meet Expectation)",
      desc:
        "전반적인 레이아웃 구성 및 컴포넌트 재활용을 고안하며 구조를 구성하였습니다.\n" +
        "디자인에 없던 내용 (예: 로딩패널) 을 UX를 고려하여 융통성있게 추가 하였습니다.\n" +
        "팀장님이신 경식님이 만들어주신 모노레포를 기반으로 하여 공통 컴포넌트를 카테고리화 하여 디자인 시스템 패키지 폴더로 구성 하였습니다.\n" +
        "cypress를 이용한 자동화 테스트 소스를 작성 하였습니다.\n" +
        "(평가 사유) : 단순 POC로 끝날수도 있었던 프로젝트 였지만, 막연하게 빠른 개발에만 초점을 두지않고 속도와 추후 재활용 가능성 및 확장 가능성을 고려하여 작업 하였고, 개발 과정에 있어 테스트 앱을 통한 주기적인 디자인 QA 요청과 이에 대한 빠른 피드백 반영으로 디자이너분들의 좋은 평가를 얻었고, 이는 하반기 뿐만 아니라 앞으로의 모든 프로젝트에 영향을 주는바 이러한 평가를 내렸습니다."
    },
    {
      descTitle:
        "[자재 플랫폼 서비스 마이그레이션] (목표: 브이하우스 어드민 페이지를 기반으로 자재 플랫폼 어드민 서비스 전체 기능의 마이그레이션을 수행하고 테스트를 완료 한다, 달성도: 100%, 평가: Meet Expectation)",
      desc:
        "버저닝을 해주는 피쳐플래그 기능의 역할을 하는 공통 유틸 함수를 만들어 이전 버전과의 간섭없이 상호 개발이 용이하도록 처리 하였습니다.\n" +
        "진단 결과 페이지의 전반적인 UI구성을 변경 하면서 추천 농약 미리보기 기능을 추가 하였습니다.\n" +
        "진단 결과 상세 페이지의 노출 조건 로직이 변경 되면서 해당 로직을 전면적으로 수정 하였습니다.\n" +
        "메인 페이지에 신규 디자인을 적용 하며, 지원 작물 팝업 구성및 기타 버그등을 수정 하였습니다.\n" +
        "추천 농약 리스트페이지를 SEO를 고려한 무한 스크롤을 사용하여 구현 하였으며, 각 농약에 대한 상세 정보 페이지를 신규 개발 하였습니다.\n" +
        "GTM 이벤트 로깅을 위한 로직을 작성 하였습니다.\n" +
        "(평가 사유) : 개발 산정 기간에 맞추어 무리 없이 작업 하였고 본인에게 할당된 작업만을 고려하지 않고 나아가 다른 개발자들의 작업 시간에 영향을 줄수 있는 공통 컴포넌트 작업에 투자하여 향후 다른 프로젝트에까지 지속적인 영향을 주는 작업을 하였기에 이러한 평가를 내렸습니다.",
    },
    {
      descTitle:
        "[자재 플랫폼 서비스 마이그레이션] (목표: 브이하우스 어드민 페이지를 기반으로 자재 플랫폼 어드민 서비스 전체 기능의 마이그레이션을 수행하고 테스트를 완료 한다, 달성도: 100%, 평가: Meet Expectation)",
      desc:
        "기존 시공사 찾기 프로젝트에 별도의 라우트처리를 하여 농약사 찾기 기능에 접근 할 수 있도록 개발 하였습니다.\n" +
        "라우트 히스토리 관리를 위해 빈페이지를 활용한 별도 로직을 추가 작성 하였습니다.\n" +
        "(평가 사유): 기존 시설팀에서 개발한 시공사 찾기 앱에 농약사 찾기 기능을 더한 앱을 만듦에 있어, 공통 이슈를 처리하고 시설팀에서 놓친 소소한 부분 또한 함께 병행하여 처리 하였고 별다른 딜레이 없이 일정을 완수하였기에 해당 평가를 내렸습니다.",
    },
    {
      descTitle:
        "[자재 플랫폼 서비스 마이그레이션] (목표: 브이하우스 어드민 페이지를 기반으로 자재 플랫폼 어드민 서비스 전체 기능의 마이그레이션을 수행하고 테스트를 완료 한다, 달성도: 100%, 평가: Meet Expectation)",
      desc:
        "구글 맵 API를 사용하여 다른 앱에서도 사용 할 수 있도록 공통 컴포넌트로 구성하고 이를 병해충 진단앱에 적용 시켰습니다.\n" +
        "신규 진단 건수 안내 추가 및 내 진단 결과, 전체 진단 결과 페이지를 개발 하였습니다.\n" +
        "내 진단 결과, 내 주변 진단 결과 및 전체 진단 결과등 공통 되는 페이지를 같은 컴포넌트를 사용하도록 처리 하였습니다.\n" +
        "(평가 사유) : 점점 더 복잡해지고 고도화 되어가는 병해충 처방앱을 개발함에 있어 빠르고 효율적으로 개발을 진행 하였고, 코드 리뷰를 통한 피드백을 빠르게 적용 하고, 디자인 QA 피드백, 팜모닝 이벤트 로그(GTM)로 인한 재수정등 일정에 포함 되어있지 않았던 사항 또한 처리하였기에 해당 평가를 책정하였습니다.",
    },
    {
      descTitle:
        "[자재 플랫폼 서비스 마이그레이션] (목표: 브이하우스 어드민 페이지를 기반으로 자재 플랫폼 어드민 서비스 전체 기능의 마이그레이션을 수행하고 테스트를 완료 한다, 달성도: 100%, 평가: Meet Expectation)",
      desc:
        "진단 결과와 진단 상세 결과 페이지의 신규 UI 를 반영하고 관련 로직을 전부 재구성 하였습니다.\n" +
        "제품(비료 및 영양제)에 관한 추천 제품 컴포넌트를 만들고, 제품 상세 정보 페이지를 작성 하였습니다.\n" +
        "IOS이슈 및 특별한 상황에서 발생하는 이슈를 대응 하였습니다.\n" +
        "진단 상세 결과 노출 조건이 변경됨에 따라 관련 의존성이 있는 로직을 최대한 기존 로직을 살리면서 재구성 하였습니다.\n" +
        "(평가 사유) : 한정된 기간과 변경되는 사항들로 인해 다소 빠듯한 일정이 되었으나, 추가 시간을 할애하여 개발 일정을 앞당겼고, 개발자 자체 QA를 진행하는 시간도 확보 할 수 있었습니다. 이로 인해 제품 출시 일정을 맞추는데에 공헌하였다고 생각하고 제가 낼 수 있는 최대한의 역량을 내었기 때문에 이러한 평가를 내렸습니다.",
    },
  ];

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
        return (
          <li key={index++} className="mt-1 marker:text-[13px]">
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
      <div className="text-[15px] mt-2">자재플랫폼 개발실 / 팀원</div>
      <div className="font-bold text-[15px] mt-10">주요 성과</div>
      <div className="flex flex-col mt-4">
        {descArr.map((v, index: number) => {
          return (
            <div key={v.descTitle} id={`tab${[index]}`} className="mt-6 w-full">

              <ul className="ml-8 list-outside list-disc pr-4 pt-1" style={{ listStyle: "disc" }}>
                {makeDec(v.desc)}
              </ul>
            </div>
          );
        })}

        {/*<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>*/}
        {/*<textarea*/}
        {/*  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"*/}
        {/*  placeholder="Write your thoughts here..."*/}
        {/*></textarea>*/}
      </div>
    </div>
  );
};

export default Career;
