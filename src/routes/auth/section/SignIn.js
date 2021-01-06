import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Link } from "react-router-dom";
import { Button, TextInput } from "components/common/inputs/index";

const Login = () => {
  const formik = useFormik({
    initialValues: { email: "", ph: "", phValid: "", nickname: "" },
    onSubmit: (data, { setSubmitting }) => {
      setSubmitting(true);
      console.log(data);
      setSubmitting(false);
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("* 이메일 주소를 확인해주세요")
        .required("* 이메일 주소가 필요합니다."),
      ph: Yup.string().required("* 전화 번호가 필요합니다."),
      phValid: Yup.string(),
      nickname: Yup.string().required("* 닉네임이 필요합니다."),
    }),
  });

  return (
    <Container>
      <InnerContainer>
        <div className="wrapper">
          <form className="signInForm" onSubmit={formik.handleSubmit}>
            <div className="title">가입하기</div>

            <div className="section ph">
              <div className="name">
                전화번호<span className="mainColor"> *</span>
              </div>
              <div className="row">
                <TextInput
                  className="textinput"
                  placeholder="전화번호를 인증해주세요"
                  id="ph"
                  value={formik.values.ph}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <Button
                  variant="outline"
                  className="button"
                  type="button"
                  text="인증번호 받기"
                ></Button>
              </div>
              <div className="row">
                <TextInput
                  className="textinput"
                  placeholder="인증번호를 입력해주세요."
                  id="phValid"
                  value={formik.values.phValid}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <Button
                  variant="normal"
                  className="button"
                  type="button"
                  text="확인"
                ></Button>
              </div>
            </div>

            {/* variant="disable" 는 비활성화 입니다. */}
            <div className="section email">
              <div className="name">
                이메일<span className="mainColor"> *</span>
              </div>
              <div className="row">
                <TextInput
                  className="textinput"
                  placeholder="이메일을 입력해주세요."
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  variant="disable"
                />
              </div>
              <div className="row">
                {formik.errors.email && formik.touched.email && (
                  <div className="errorMsg">{formik.errors.email}</div>
                )}
              </div>
              <div className="row">
                <div className="errorMsg">
                  {"* 중복된 이메일 주소입니다. 이메일 주소를 확인해주세요."}
                </div>
              </div>
            </div>

            <div className="section name">
              <div className="name">
                닉네임<span className="mainColor"> *</span>
              </div>
              <div className="row">
                <TextInput
                  className="textinput"
                  placeholder="닉네임 입력해주세요."
                  id="nickname"
                  value={formik.values.nickname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <Button
                  type="button"
                  className="button"
                  text="중복확인"
                ></Button>
              </div>
              <div className="row">
                {formik.errors.nickname && formik.touched.nickname && (
                  <div className="errorMsg">{formik.errors.nickname}</div>
                )}
              </div>
            </div>

            <div className="notice">
              회원가입 진행 시 스터디마스터의
              <br />
              <BlueLink to="/">이용약관</BlueLink> 및{" "}
              <BlueLink to="/">개인정보처리방침</BlueLink>에 동의하신 것으로
              간주됩니다.
            </div>
            <div className="submitContent">
              <Button
                className="button"
                text="회원가입"
                type="submit"
                variant={formik.dirty && formik.isValid ? "able" : "disable"}
                disabled={formik.isSubmitting}
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

const BlueLink = styled(Link)`
  color: #0091ff;
  text-decoration: underline;
`;

const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 468px;
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
    .ph {
      .textinput {
        width: 300px;
      }
      .button {
        width: 96px;
      }
    }
    .email {
      .textinput {
        width: 100%;
      }
    }
    .name {
      .textinput {
        width: 300px;
      }
      .button {
        width: 96px;
      }
    }
    .notice {
      line-height: 1.57;
      margin-top: 80px;
      font-size: 14px;
      font-weight: 500;
    }
    .submitContent {
      ${(props) => props.theme.flexVC};
      justify-content: center;
      align-items: center;
      .button {
        margin-top: 32px;
        width: 145px;
        height: 36px;
      }
    }
  }
`;
