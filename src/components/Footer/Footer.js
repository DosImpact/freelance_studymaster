import React from "react";
import { down } from "styled-breakpoints";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <InnerContainer>
        <ul className="row">
          <li className="column">
            <div className="profile">
              <div className="profileName">스터디마스터</div>
              <div className="profileList">
                대표 홍길동 | 사업자등록번호 000-00-000000
              </div>
              <div className="profileList">
                서울특별시 서초구 양재동 000 | 1500-1588
              </div>
              <div className="profileList">
                통신판매업신고 2000-서울서초-0000
              </div>
            </div>
          </li>
          <li className="column">
            <div className="navGrid">
              <div className="gridItem">스터디 찾기</div>
              <div className="gridItem">개인정보처리방침</div>
              <div className="gridItem">내 스터디</div>
              <div className="gridItem">이용약관</div>
            </div>
          </li>
        </ul>
      </InnerContainer>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background-color: ${(props) => props.theme.GreyColor1};
  min-height: 227px;

  ${down("sm")}  {
    padding-bottom: 68px;
  }
`;

const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 1130px;
  padding: 0 30px;
  width: 100%;

  & .row {
    display: flex;
    flex-flow: row nowrap;
    /* height: 100%; */
    justify-content: space-between;

    ${down("sm")}  {
      flex-flow: column wrap;
    }

    & .profile {
      margin-top: 55px;
      opacity: 0.8;
      color: ${(props) => props.theme.GreyColor2};
      .profileName {
        font-size: 20px;
        margin-bottom: 15px;
      }
      .profileList {
        margin-top: 4px;
        font-size: 16px;
      }
    }
    & .navGrid {
      margin-top: 55px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 17px;
      color: rgba(0, 0, 0, 0.85);
      .gridItem {
        font-size: 18px;
        cursor: pointer;
      }
    }
  }
`;
