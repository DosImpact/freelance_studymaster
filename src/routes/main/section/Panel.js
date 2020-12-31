import React from "react";
import styled from "styled-components";

const Panel = () => {
  return (
    <Container>
      <InnerContainer>
        <li className="row">
          <div className="col profile">
            <div className="titleRow">Find Group </div>
            <div className="titleRow">
              <div className="titleImg">in</div>
              <img
                className="titleImg"
                src={process.env.PUBLIC_URL + "assets/logo.png"}
                alt="titleImg"
              />
            </div>

            <div className="subTitle">
              스터디마스터에서 맞는 그룹을 찾아보세요.
            </div>

            <div className="blackBox">
              지금 핫한 스터디의 토픽이 궁금하다면?
            </div>
          </div>

          <div className="col">
            <img
              className="mainImage"
              src={process.env.PUBLIC_URL + "assets/mainStudy.png"}
              alt="mainImage"
            />
          </div>
        </li>
      </InnerContainer>
    </Container>
  );
};

export default Panel;

const Container = styled.div`
  background-color: ${(props) => props.theme.MainColor1};
  height: 620px;
`;

const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 1130px;
  padding: 0 30px;
`;
