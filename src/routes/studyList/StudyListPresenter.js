import React from "react";
import GridCard from "./section/GridCard";

const StudyListPresenter = () => {
  const dummyDatas = [
    {
      imgSrc: `${process.env.PUBLIC_URL}/assets/cardImg2.png`,
      recommand: "👍🏼 추천",
      title: "공무원/어휘2000 향상...",
      subTitle: "격주 금, 토, 일 오후 3시 - 오후 6시 ",
      tag: "#공무원영어 #스터디모임 #어휘",
      status: "모집중",
      level: "Lv.4 이상 추천",
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/assets/cardImg3.png`,
      recommand: "👍🏼 추천",
      title: "김영편입 AT(상)",
      subTitle: "격주 금, 토, 일 오후 3시 - 오후 6시 ",
      tag: "#김영편입 #편입생스터디 #김영상반",
      status: "모집중",
      level: "Lv.4 이상 추천",
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/assets/cardImg4.png`,
      recommand: "👍🏼 추천",
      title: "강남TNC 독해력 강화 스터디 ",
      subTitle: "격주 금, 토, 일 오후 3시 - 오후 6시 ",
      tag: "#공무원영어 #스터디모임 #어휘",
      status: "모집중",
      level: "Lv.4 이상 추천",
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/assets/cardImg4.png`,
      recommand: "👍🏼 추천",
      title: "강남TNC 독해력 강화 스터디 .",
      subTitle: "격주 금, 토, 일 오후 3시 - 오후 6시 ",
      tag: "#TNC2기 #강남스터디 #독해",
      status: "모집중",
      level: "Lv.4 이상 추천",
    },
  ];

  return (
    <div>
      <GridCard CardItems={dummyDatas} title="주말도 알차게" />

      <GridCard
        CardItems={dummyDatas}
        title="직장인들 모여라"
        more="전체보기"
      />

      <GridCard CardItems={dummyDatas} title="랜선 모임" more="전체보기" />

      <GridCard
        CardItems={dummyDatas}
        title="진행중인 스터디"
        more="전체보기"
      />

      <GridCard CardItems={dummyDatas} title="모든 모임 보기" more="전체보기" />
    </div>
  );
};

export default StudyListPresenter;
