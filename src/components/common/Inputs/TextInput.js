import React from "react";
import styled from "styled-components";

// 일반 입력
// variant : normal, disable, able

const TextInput = ({ className, variant = "normal", children, ...props }) => {
  return (
    <Input className={className} variant={variant} {...props}>
      {children}
    </Input>
  );
};

export default TextInput;

const Input = styled.input`
  border-radius: 3px;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  padding: 7px;
  min-height: 36px;

  ${(props) => props.variant === "normal" && props.theme.TextInputNormal}
  ${(props) => props.variant === "able" && props.theme.TextInputAble}
  ${(props) => props.variant === "disable" && props.theme.TextInputDisable}

  &::placeholder {
    color: ${(props) => props.theme.ColorPlaceHolder};
  }
  &:focus {
    border: ${(props) => props.theme.borderMain};
  }
`;
