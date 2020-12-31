import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import {
  Button,
  TextInput,
  DropDownButton,
} from "components/common/Inputs/index";

const Login = () => {
  // const formik = useFormik({
  //   initialValues: { email: "", ph: "", phValid: "", nickname: "" },
  //   onSubmit: (data, { setSubmitting }) => {
  //     setSubmitting(true);
  //     console.log(data);
  //     setSubmitting(false);
  //   },
  //   validationSchema: Yup.object().shape({
  //     email: Yup.string()
  //       .email("* 이메일 주소를 확인해주세요")
  //       .required("* 이메일 주소가 필요합니다."),
  //     ph: Yup.string().required("* 전화 번호가 필요합니다."),
  //     phValid: Yup.string(),
  //     nickname: Yup.string().required("* 닉네임이 필요합니다."),
  //   }),
  // });

  return (
    <Container>
      <InnerContainer>
        <div className="wrapper">
          <form className="signInForm">
            <div className="title">프로필 등록</div>

            <div className="section score">
              <div className="name">
                공인 영어 점수<span className="mainColor"> *</span>
              </div>
              <div className="row">
                <DropDownButton
                  variant="normal"
                  className="button"
                  text="공인 영어"
                >
                  <DropDownButton.Item>TOEIC</DropDownButton.Item>
                  <DropDownButton.Item>TOEIC Speaking</DropDownButton.Item>
                  <DropDownButton.Item>TEPS</DropDownButton.Item>
                </DropDownButton>

                <TextInput
                  className="textinput"
                  placeholder="전화번호를 인증해주세요"
                  id="ph"
                />
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
    .score {
      .textinput {
        width: 300px;
      }
      .button {
        width: 96px;
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
