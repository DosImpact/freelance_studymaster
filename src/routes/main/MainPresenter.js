import React from "react";
import GridMainCard from "./section/GridMainCard";
import Panel from "./section/Panel";
import Privacy from "./section/Privacy";

const MainPresenter = () => {
  const dummyData = [
    {
      src: `${process.env.PUBLIC_URL}/assets/cardImg1.png`,
      title: "스터디 모임에서 간단히 헬퍼와 토픽을 지정해보세…",
      subTitle:
        "스터디마스터에서는, 모임을 찾는 것은 물론 각 헬퍼를 지정하고 토픽을 추가할 수 있어요. 클릭 몇번으로, 시간을 절약하는 꿀팁을 공…  ",
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/cardImg2.png`,
      title: "스터디 모임에서 간단히 헬퍼와 토픽을 지정해보세…",
      subTitle:
        "스터디마스터에서는, 모임을 찾는 것은 물론 각 헬퍼를 지정하고 토픽을 추가할 수 있어요. 클릭 몇번으로, 시간을 절약하는 꿀팁을 공…  ",
    },
  ];

  return (
    <div>
      {/* 메인 화면 상단 패널 */}
      <Panel />

      {/* Section Card 영역 + 전체보기 */}
      <GridMainCard
        cardItems={dummyData}
        title={"스터디마스터 100% 활용하기 ✍🏼"}
        more={"전체보기"}
        moreRoute={`${process.env.PUBLIC_URL}+"/`}
      />
      {/* Section Card 영역 */}
      <GridMainCard
        cardItems={Array.from([
          ...dummyData,
          ...dummyData,
          ...dummyData,
          ...dummyData,
        ])}
        // title={"스터디마스터 100% 활용하기 ✍🏼"}
        // more={"전체보기"}
        moreRoute={`${process.env.PUBLIC_URL}+"/`}
      />
      <Privacy />
    </div>
  );
};

export default MainPresenter;
