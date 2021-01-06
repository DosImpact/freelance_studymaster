import React from "react";
import styled from "styled-components";

const Panel = () => {
  return (
    <Container>
      <InnerContainer>
        <li className="row">
          <div className="col profileCol">
            <div className="titleRow">Find Group </div>
            <div className="titleRow">
              <div>in</div>
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

          <div className="col mainImageCol">
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
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
`;

const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 1220px;
  width: 100%;
  padding: 0 30px;
  height: 100%;

  & .row {
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    width: 100%;
    & .col {
      width: 49%;
    }
    & .profileCol {
      display: flex;
      flex-direction: column;
      .titleRow:first-child {
        margin-top: 140px;
      }
      .titleRow:nth-child(2) {
        display: flex;
        flex-flow: row nowrap;
        position: relative;
        .titleImg {
          margin-left: 10px;
          background-position-x: 10px;
          position: absolute;
          left: 45px;
          top: 4px;
          height: 48px;
          width: auto;
        }
      }
      .titleRow {
        font-size: 48px;
        font-weight: 500;
        letter-spacing: -0.48px;
      }
      .subTitle {
        margin-top: 32px;
        font-size: 32px;
        font-weight: 500;
        letter-spacing: -0.32px;
        color: #6d7278;
      }
      .blackBox {
        margin-top: 100px;
        padding: 18px 38px;
        border-radius: 6px;
        background-color: #342e19;
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        color: #ffffff;
      }
    }
    & .mainImageCol {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      .mainImage {
        width: 919px;
        height: 488px;
        object-fit: contain;
      }
    }
  }
`;
