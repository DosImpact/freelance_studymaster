import React from "react";
import styled from "styled-components";

import { Button, TextInput } from "components/common/Inputs/index";

const Login = () => {
  return (
    <Container>
      <InnerContainer>
        <div className="wrapper">
          <div className="title">로그인하고 스터디마스터 시작하기</div>

          <div className="section">
            <div className="button">
              <img
                className="buttonImg"
                src={process.env.PUBLIC_URL + "assets/loginKakao.png"}
                alt="login"
              ></img>
            </div>

            <div className="button">
              <img
                className="buttonImg"
                src={process.env.PUBLIC_URL + "assets/loginFacebook.png"}
                alt="login"
              ></img>
            </div>

            <div className="button">
              <img
                className="buttonImg"
                src={process.env.PUBLIC_URL + "assets/loginGogle.png"}
                alt="login"
              ></img>
            </div>
          </div>
        </div>
      </InnerContainer>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  margin: 120px 0px;
`;

const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 648px;
  padding: 0 30px;
  ${(props) => props.theme.flexVC}
  & .wrapper {
    .title {
      font-size: 40px;
      font-weight: 500;
      color: #000000;
    }
    .section {
      margin-top: 40px;
      ${(props) => props.theme.flexVC};
      .button {
        margin-top: 32px;
        width: 392px;
        cursor: pointer;
        .buttonImg {
          width: 100%;
          height: auto;
        }
      }
    }
  }
`;
