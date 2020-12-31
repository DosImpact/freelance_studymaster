import React from "react";
import Login from "./section/Login";
import SignIn from "./section/SignIn";
const AuthPresenter = () => {
  return (
    <div>
      {/* 로그인 쇼 케이스  */}
      <Login />
      {/* 회원가입 쇼 케이스
        - button,textInput 은 variant 로 able,disable,normal 로 3가지 상태를 스타일링 mixin 했습니다.
        - formik을 이용해서 error 메시지 확인 가능합니다.
      */}
      <SignIn />
    </div>
  );
};

export default AuthPresenter;
