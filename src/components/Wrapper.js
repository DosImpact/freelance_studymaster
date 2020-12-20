import React from "react";
import styled from "styled-components";

const Wrapper = ({ children, className, ...props }) => {
  return (
    <Container className={className} props={props}>
      <InnerContainer>{children}</InnerContainer>
    </Container>
  );
};

export default Wrapper;

const Container = styled.div`
  background-color: aliceblue;
  height: 100%;
  width: 100%;
`;

const InnerContainer = styled.div`
  background-color: whitesmoke;
  margin: 0 auto;
  max-width: 1130px;
  padding: 0 30px;
  width: 100%;
  height: 100%;
`;
