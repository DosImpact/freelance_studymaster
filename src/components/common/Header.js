import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <InnerContainer className="wrapper">
        <div className="row">
          <Link to="/">
            <img
              alt="logo"
              className="logoItem"
              src={process.env.PUBLIC_URL + "assets/logo.png"}
            ></img>
          </Link>
          <ul className="navItem">
            <Link to={process.env.PUBLIC_URL + "/search"}>
              <li className="itemList">스터디 찾기</li>
            </Link>
            <Link to={process.env.PUBLIC_URL + "/mystudy"}>
              <li className="itemList">내 스터디</li>
            </Link>
            <Link to={process.env.PUBLIC_URL + "/auth"}>
              <li className="itemList">회원가입</li>
            </Link>
            <Link to={process.env.PUBLIC_URL + "/auth"}>
              <li className="itemList mainColor w7">로그인</li>
            </Link>
          </ul>
        </div>
      </InnerContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 72px;
  ${(props) => props.theme.boxShadow};
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
`;

const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 1130px;
  padding: 0 30px;
  width: 100%;
  height: 100%;
  & .row {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & .logoItem {
      width: 242px;
      height: 40px;
      object-fit: contain;
    }
    & .navItem {
      ${(props) => props.theme.flexH}
      color:  ${(props) => props.theme.GreyColor2};
      & .itemList {
        margin-right: 24px;
        font-family: SpoqaHanSans;
        font-size: 14px;
        letter-spacing: -0.47px;
        cursor: pointer;
      }
    }
  }
`;
