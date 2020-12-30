import React from "react";
import styled from "styled-components";

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
              <input
                className="textinput"
                placeholder="전화번호를 인증해주세요"
              ></input>
              <button>인증번호 받기</button>
            </div>
          </div>

          <div className="section">
            <div className="name">
              이메일<span className="mainColor">*</span>
            </div>
            <div className="row">
              <input
                className="textinput"
                placeholder="이메일을 입력해주세요."
              ></input>
            </div>
          </div>

          <div className="section">
            <div className="name">
              전화번호<span className="mainColor">*</span>
            </div>
            <div className="row">
              <input
                className="textinput"
                placeholder="전화번호를 인증해주세요"
              ></input>
              <button>인증번호 받기</button>
            </div>
          </div>
        </div>
      </InnerContainer>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  margin-top: 120px;
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
      }
      .row {
      }
    }
  }
`;
