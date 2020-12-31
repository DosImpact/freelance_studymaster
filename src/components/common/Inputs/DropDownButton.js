import React from "react";
import styled from "styled-components";

// 일반 입력
// variant : normal, disable, able
//
const SDropDownButton = ({
  className,
  variant = "normal",
  text,
  children,
  ...props
}) => {
  return (
    <Container className={className} {...props}>
      <Button variant={variant} onClick={(e) => e.preventDefault()}>
        {text}
      </Button>
      <ul className="dropdownUl">{children}</ul>
    </Container>
  );
};

const Item = ({ children, ...props }) => {
  return <li {...props}>{children}</li>;
};

SDropDownButton.Item = Item;

export default SDropDownButton;

const Button = styled.button``;

const Container = styled.div`
  position: relative;
  width: 100%;
  ${Button} {
    all: unset;
    box-sizing: border-box;

    text-align: center;
    min-height: 36px;
    padding: 0px 4px;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;

    border: solid 1px #d8d8d8;
    width: 100%;
    ${(props) => props.variant === "normal" && props.theme.ButtonNormal}
    ${(props) => props.variant === "able" && props.theme.ButtonAble}
    ${(props) => props.variant === "disable" && props.theme.ButtonDisable}

    &:focus + ul {
      opacity: 1;
      visibility: visible;
      /* pointer-events: all; */
      transform: translateY(0px);
    }
  }
  & ul.dropdownUl {
    position: absolute;
    width: 100%;
    border: solid 1px #d8d8d8;
    background-color: white;
    display: flex;
    flex-flow: column nowrap;
    transform: translateY(10px);
    transition: all 0.4s ease-in-out;
    opacity: 0;
    visibility: hidden;
    /* pointer-events: none; */
    border-radius: 5px;

    li {
      min-height: 36px;
      ${(props) => props.theme.centering};
      cursor: pointer;
      &:hover {
        background-color: rgba(109, 114, 120, 0.1);
      }
    }
  }
`;
