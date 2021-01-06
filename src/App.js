import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import MainContainer from "./routes/Main/MainContainer";
import AuthContainer from "routes/Auth/AuthContainer";
import MyPageContainer from "routes/MyPage/MyPageContainer";
import MyStudyContainer from "routes/MyStudy/MyStudyContainer";
import StudyListContainer from "routes/StudyList/StudyListContainer";
import StudyPostContainer from "routes/StudyPost/StudyPostContainer";

// Route - 디자인 순서대로 작성함.

// 0.OnBorading       auth
// 1. main
// 2. 스터디 찾기/들록 studypost studypost
// 3. 내스터디        mystudy
// 4. 마이 페이지     mypage

import Footer from "components/common/Footer";
import Header from "components/common/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/auth" component={AuthContainer}></Route>
        <Route exact path="/" component={MainContainer}></Route>

        <Route exact path="/studypost" component={StudyPostContainer}></Route>
        <Route exact path="/studylist" component={StudyListContainer}></Route>

        <Route exact path="/mystudy" component={MyStudyContainer}></Route>

        <Route exact path="/mypage" component={MyPageContainer}></Route>

        <Redirect from="*" to="/"></Redirect>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
