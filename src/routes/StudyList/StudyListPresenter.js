import React from "react";
import GridCard from "./section/GridCard";

const StudyListPresenter = () => {
  const dummyDatas = [
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
      <GridCard CardItems={dummyDatas} />
    </div>
  );
};

export default StudyListPresenter;
