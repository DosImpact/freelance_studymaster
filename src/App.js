import React from "react";

import MainContainer from "./routes/main/MainContainer";
import AuthContainer from "routes/Auth/AuthContainer";
import MyPageContainer from "routes/MyPage/MyPageContainer";
import MyStudyContainer from "routes/MyStudy/MyStudyContainer";
import StudyListContainer from "routes/StudyList/StudyListContainer";
import StudyPostContainer from "routes/StudyPost/StudyPostContainer";

import DetailPageContainer from "./routes/DetailPageContainer";


import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainContainer}></Route>
        <Route exact path="/auth" component={AuthContainer}></Route>
        <Route exact path="/mypage" component={MyPageContainer}></Route>
        <Route exact path="/mystudy" component={MyStudyContainer}></Route>
        <Route exact path="/studylist" component={StudyListContainer}></Route>
        <Route exact path="/studypost" component={StudyPostContainer}></Route>

        <Route exact path="/test" component={DetailPageContainer}></Route>

        <Redirect from="*" to="/"></Redirect>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
