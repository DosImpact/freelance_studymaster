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

const Container = styled.div``;

const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 1130px;
  padding: 0 30px;
  width: 100%;
  height: 100%;
`;
