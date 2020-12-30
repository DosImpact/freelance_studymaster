import React from "react";
import styled from "styled-components";

// 일반 입력
const SButton = ({ className, text, ...props }) => {
  return (
    <Button className={className} {...props}>
      {text}
    </Button>
  );
};

export default SButton;

const Button = styled.button`
  all: unset;
  box-sizing: border-box;

  min-height: 36px;
  padding: 0px 4px;
  border-radius: 6px;
  border: solid 1px #d8d8d8;
  font-size: 14px;
  color: ${(props) => props.theme.ColorPlaceHolder};
  cursor: pointer;
`;
