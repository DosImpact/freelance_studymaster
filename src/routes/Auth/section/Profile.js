import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import {
  Button,
  TextInput,
  DropDownButton,
} from "components/common/Inputs/index";

const Login = () => {
  return (
    <Container>
      <InnerContainer>
        <div className="wrapper">
          <div className="later">나중에 하기</div>
          <form className="signInForm">
            <div className="title">프로필 등록</div>

            <div className="section scoreSection">
              <div className="name">
                공인 영어 점수<span className="mainColor"> *</span>
              </div>

              <div className="row">
                <DropDownButton
                  variant="normal"
                  className="dropDownButton"
                  text="종류 선택"
                >
                  <DropDownButton.Item>TOEIC</DropDownButton.Item>
                  <DropDownButton.Item>TOEIC Speaking</DropDownButton.Item>
                  <DropDownButton.Item>TEPS</DropDownButton.Item>
                </DropDownButton>
                <TextInput
                  className="textinput"
                  placeholder="점수를 입력해주세요"
                />
                <img
                  className="deleteButton"
                  alt="xbox.png"
                  src={process.env.PUBLIC_URL + "/assets/icons/xbox.png"}
                ></img>
              </div>

              <div className="row">
                <DropDownButton
                  variant="normal"
                  className="dropDownButton"
                  text="종류 선택"
                >
                  <DropDownButton.Item>TOEIC</DropDownButton.Item>
                  <DropDownButton.Item>TOEIC Speaking</DropDownButton.Item>
                  <DropDownButton.Item>TEPS</DropDownButton.Item>
                </DropDownButton>
                <TextInput
                  className="textinput"
                  placeholder="점수를 입력해주세요"
                />
                <img
                  className="deleteButton"
                  alt="xbox.png"
                  src={process.env.PUBLIC_URL + "/assets/icons/xbox.png"}
                ></img>
              </div>

              <div className="row">
                <DropDownButton
                  variant="normal"
                  className="dropDownButton"
                  text="TOEIC"
                >
                  <DropDownButton.Item>TOEIC</DropDownButton.Item>
                  <DropDownButton.Item>TOEIC Speaking</DropDownButton.Item>
                  <DropDownButton.Item>TEPS</DropDownButton.Item>
                </DropDownButton>
                <TextInput
                  className="textinput"
                  placeholder="점수를 입력해주세요"
                />
                <img
                  className="deleteButton"
                  alt="xbox.png"
                  src={process.env.PUBLIC_URL + "/assets/icons/xbox.png"}
                ></img>
              </div>

              <div className="row addExamRow">
                <Button
                  className="addExamButton"
                  variant="disable"
                  text=" + 시험추가"
                  type="submit"
                ></Button>
              </div>
            </div>

            <div className="section purposSection">
              <div className="name"></div>

              <div className="row">
                <div className="checkBoxContainer">
                  <input
                    className="checkBoxInput"
                    type="checkbox"
                    id="op1"
                  ></input>
                  <label className="checkBoxLabel" htmlFor="op1">
                    취업 준비
                  </label>
                </div>

                <div className="checkBoxContainer">
                  <input
                    className="checkBoxInput"
                    type="checkbox"
                    id="op2"
                  ></input>
                  <label className="checkBoxLabel" htmlFor="op2">
                    유학 준비
                  </label>
                </div>

                <div className="checkBoxContainer">
                  <input
                    className="checkBoxInput"
                    type="checkbox"
                    id="op3"
                  ></input>
                  <label className="checkBoxLabel" htmlFor="op3">
                    영어 실력 유지 및 향상
                  </label>
                </div>

                <div className="checkBoxContainer">
                  <div className="checkBoxRow">
                    <input
                      className="checkBoxInput"
                      type="checkbox"
                      id="op3"
                    ></input>
                    <label className="checkBoxLabel" htmlFor="op3">
                      영어 실력 유지 및 향상
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="submitContent">
              <Button
                className="button"
                variant="disable"
                text="등록완료"
                type="submit"
              ></Button>
              {/* <pre>{JSON.stringify(formik, null, 2)}</pre> */}
            </div>
          </form>
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
  max-width: 468px;
  padding: 0 30px;
  & .wrapper {
    .later {
      ${(props) => props.theme.ColorMain};
      text-decoration: underline;
      margin-bottom: 11px;
      text-align: end;
    }
    .title {
      font-size: 40px;
      font-weight: 500;
      color: #000000;
    }
    /* 섹션 공통 CSS  */
    .section {
      input[type="checkbox"] {
        position: relative;
        cursor: pointer;
      }

      margin-top: 60px;
      .name {
        font-weight: 500;
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
        .errorMsg {
          font-size: 12px;
          letter-spacing: -0.12px;
          text-align: right;
          color: #e02020;
        }
      }
    }
    /* 섹션 특수 CSS */
    .scoreSection {
      .dropDownButton {
        width: 150px;
        margin-right: 14px;
      }
      .textinput {
        width: 208px;
        margin-right: 14px;
      }
      .deleteButton {
        width: 22px;
        height: auto;
        cursor: pointer;
      }
      .addExamRow {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        .addExamButton {
          width: 96px;
          height: 36px;
        }
      }
    }
    .purposSection {
      .row {
        display: flex;
        flex-flow: column nowrap;
        border: solid #e4e4e4;
        border-width: 1px 1px 0px 1px;
        .checkBoxContainer {
          width: 100%;
          min-height: 46px;
          ${(props) => props.theme.flexHC}
          border-bottom: 1px solid #e4e4e4;
          padding-left: 18px;
          .checkBoxInput {
          }
          input.checkBoxInput[type="checkbox"]:checked + label {
            color: black;
          }
          .checkBoxLabel {
            margin-left: 5px;
            color: #bbbbbb;
          }
        }
      }
    }

    .submitContent {
      ${(props) => props.theme.flexVC};
      justify-content: center;
      align-items: center;
      .button {
        margin-top: 32px;
        width: 408px;
        height: 36px;
      }
    }
  }
`;
