import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <InnerContainer className="wrapper">
        <div className="row">
          <div className="logoItem">studymaster</div>
          <ul className="navItem">
            <li>내 스터디</li>
          </ul>
        </div>
      </InnerContainer>
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

const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 1130px;
  padding: 0 30px;
  width: 100%;
  height: 100%;
`;
