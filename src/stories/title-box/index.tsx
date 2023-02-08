type TitleBoxV2 = {
  /**
   * 타이틀 박스 텍스트
   */
  text: string;
  subText: string;
  /**
   * 배경 색상
   * (bg-[#ABCDEF] 또는 bg-blue-50 형태로 전달)
   */
  bgColor?: string;
  /**
   * 텍스트 및 아이콘 색상
   * (text-[#ABCDEF] 또는 text-blue-50 형태로 전달)
   */
  textColor?: string;
  /**
   * 아이콘 컴포넌트 형태로 전달 (JSX.Element)
   */
  icon?: JSX.Element;
  /**
   * 좌우 기본 여백을 없앨지 여부 (주로 다른 컴포넌트 내에서 불러올때 true 처리)
   */
  fitStyle?: boolean;
};

export const TitleBox = ({
 bgColor = "bg-white",
 textColor = "text-[#1F2024]",
 text = "",
 subText = "",
 icon,
 fitStyle = false,
}: TitleBoxV2) => {
  return (
    <div className={`h-[50px] items-center ${bgColor} ${textColor}`}>
      <div className={`text-[19px] font-bold ${fitStyle ? "" : "mx-4"}`}>{text}</div>
      {subText && <div className={`text-[15px] ${fitStyle ? "" : "mx-4"}`}>{subText}</div>}
      {icon && <div className="ml-0.5 justify-center">{icon}</div>}
      <div className="flex-1"></div>
    </div>
  );
};
