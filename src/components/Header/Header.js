import React from "react";
import styled from "styled-components";

import Wrapper from "components/Wrapper";

const Header = () => {
  return (
    <Container>
      <Wrapper className="wrapper">
        <div className="row">
          <div className="logoItem">studymaster</div>
          <ul className="navItem">
            <li>내 스터디</li>
          </ul>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 72px;
  & .row {
    height: 100%;
  }
  & .wrapper {
    height: 100%;
    width: 100%;
  }
`;
