import React from "react";
import styled from "styled-components";

// 일반 입력
const TextInput = ({ className, children, ...props }) => {
  return (
    <Input className={className} {...props}>
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

  &::placeholder {
    color: ${(props) => props.theme.ColorPlaceHolder};
  }
`;
