import React from "react";
import styled from "styled-components";

import { Button, TextInput } from "components/common/Inputs/index";

const Login = () => {
  return (
    <Container>
      <InnerContainer>
        <div className="wrapper">
          <div className="title">가입하기</div>

          <div className="section">
            <div className="name">
              전화번호<span className="mainColor">*</span>
            </div>
            <div className="row">
              <TextInput
                className="textinput"
                placeholder="전화번호를 인증해주세요"
              />
              <Button className="button" text="인증번호 받기"></Button>
            </div>
          </div>

          <div className="section">
            <div className="name">
              이메일<span className="mainColor">*</span>
            </div>
            <div className="row">
              <TextInput
                className="textinput"
                placeholder="이메일을 입력해주세요."
              />
            </div>
          </div>

          <div className="section">
            <div className="name">
              닉네임<span className="mainColor">*</span>
            </div>
            <div className="row">
              <TextInput
                className="textinput"
                placeholder="닉네임 입력해주세요."
              />
              <Button className="button" text="중복확인"></Button>
            </div>
          </div>

          <div>
            회원가입 진행 시 스터디마스터의 이용약관 및 개인정보처리방침에
            동의하신 것으로 간주됩니다.
          </div>

          <Button className="button" text="회원가입"></Button>
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
  max-width: 408px;
  padding: 0 30px;
  & .wrapper {
    .title {
      font-size: 40px;
      font-weight: 500;
      color: #000000;
    }
    .section {
      margin-top: 60px;
      .name {
        font-size: 22px;
        letter-spacing: -0.22px;
        color: #000000;
      }
      .row {
        margin-top: 12px;
        ${(props) => props.theme.flexHC};
        .textinput {
        }
        .button {
          margin-left: 12px;
        }
      }
    }
  }
`;
