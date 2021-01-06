import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import {
  Button,
  TextInput,
  DropDownButton,
} from "components/common/Inputs/index";

const Profile = () => {
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
                    업무상 필요
                  </label>
                </div>

                <div className="checkBoxContainer">
                  <input
                    className="checkBoxInput"
                    type="checkbox"
                    id="op4"
                  ></input>
                  <label className="checkBoxLabel" htmlFor="op4">
                    영어 실력 유지 및 향상
                  </label>
                </div>

                <div
                  className="checkBoxContainer"
                  style={{ borderBottom: "none" }}
                >
                  <div className="checkBoxRow">
                    <input
                      className="checkBoxInput"
                      type="checkbox"
                      id="op5"
                    ></input>
                    <label className="checkBoxLabel" htmlFor="op5">
                      기타
                    </label>
                  </div>
                </div>

                <div
                  className="checkBoxContainer"
                  style={{ padding: "0px 24px 24px 24px" }}
                >
                  <div className="checkBoxRow" style={{ width: "100%" }}>
                    <TextInput
                      style={{ width: "100%" }}
                      className="textinput"
                      placeholder="직접 입력해주세요."
                    ></TextInput>
                  </div>
                </div>
              </div>
            </div>

            <div className="section selfCheck">
              <div className="name">
                자가진단<span className="mainColor"> *</span>
              </div>

              <div className="row">
                {Array.from([
                  `영어 공부는 처음이에요.`,
                  `영어 알파벳을 알고, 매우 기초적인 영어단어(예: 색깔, 음식, 계절 등)나 구문(예: 오늘 날씨가 어떠한가요?)을 이해할 수 있어요.`,
                  `일상생활 속 친숙한 주제(예: 자기소개, 가족 등)에 관한 영어 문장을 이해하고 사용할 수 있어요.`,
                  `친숙한 주제(예: 경험, 교우 관계, 여행 등)에 관한 짧은 글이나 대화를 이해하고자신의의견이나 감정을 쉬운 언어로 표현할 수 있어요.`,
                  `개인 관심사 및 학원 관련 주제(예: 진로 문제, 전공 선택 등)에 관한 글이나 대화를 이해하고 자신의 의견이나 감정을 표현할 수 있어요.`,
                  `일반적 주제(예: 정치, 경제, 글로벌 에티켓 등)의 글이나 담화를 이해하고 자신의 의견을 적절하게 표현할 수 있어요.`,
                  `전문 주제(예: 인문학, 자연 과학, 예술 분야 등)또는 추상적 주제의 글이나담화를 이해하고 자신의 의견을 명확하고 유창하게 표현할 수 있어요.`,
                ]).map((e, idx) => {
                  return (
                    <div className="checkBoxContainer" key={idx}>
                      <input
                        className="checkBoxInput"
                        type="checkbox"
                        id={`ops-${idx}`}
                      ></input>
                      <label className="checkBoxLabel" htmlFor={`ops-${idx}`}>
                        {e}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="submitContent">
              <Button
                className="button"
                variant="able"
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

export default Profile;

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

    .selfCheck {
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
          padding: 10px 18px;

          input.checkBoxInput[type="checkbox"]:checked + label {
            color: black;
          }
          .checkBoxLabel {
            margin-left: 11px;
            /* height: 66px; */
            font-size: 14px;
            line-height: 1.57;
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
