import React from "react";
import styled from "styled-components";

// 일반 입력
// variant : normal, disable, able, outline
//
const SButton = ({ className, variant = "normal", text, ...props }) => {
  return (
    <Button className={className} variant={variant} {...props}>
      {/* <div variant={variant}>hahah</div> */}
      {text}
    </Button>
  );
};

export default SButton;

const Button = styled.button`
  all: unset;
  box-sizing: border-box;

  text-align: center;
  min-height: 36px;
  padding: 0px 4px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;

  border: solid 1px #d8d8d8;

  ${(props) => props.variant === "normal" && props.theme.ButtonNormal}
  ${(props) => props.variant === "able" && props.theme.ButtonAble}
  ${(props) => props.variant === "disable" && props.theme.ButtonDisable}
  ${(props) => props.variant === "outline" && props.theme.ButtonOutline}
`;
