import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { keyframes } from "@emotion/core";

const rcSwitchOn = keyframes`
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.25);
    }
    100% {
      transform: scale(1.1);
    }
  `;

const rcSwitchOff = keyframes`
    0% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  `;
const _checked = css`
  border: 1px solid #87d068;
  background-color: #87d068;

  // .@{switchPrefixCls}-inner {
  //   left: 6px;
  // }

  &:after {
    left: 22px;
  }
`;
const _disabled = css`
  cursor: no-drop;
  background: #ccc;
  border-color: #ccc;

  &:after {
    background: #9e9e9e;
    animation-name: none;
    cursor: no-drop;
  }

  &:hover:after {
    transform: scale(1);
    animation-name: none;
  }
`;
const Button = styled.button`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 44px;
  height: 22px;
  line-height: 20px;
  padding: 0;
  vertical-align: middle;
  border-radius: 20px 20px;
  border: 1px solid #ccc;
  background-color: #ccc;
  cursor: pointer;
  transition: all 1s cubic-bezier(0.35, 0, 0.25, 1);
  &:after {
    position: absolute;
    width: 18px;
    height: 18px;
    left: 2px;
    top: 1px;
    border-radius: 50% 50%;
    background-color: #fff;
    content: " ";
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
    transform: scale(1);
    transition: all 1s cubic-bezier(0.35, 0, 0.25, 1);
    animation-timing-function: cubic-bezier(0.35, 0, 0.25, 1);
    animation-duration: 1s;
    animation-name: ${rcSwitchOff};
    transition: left 0.3s ease;
  }
  &:hover:after {
    transform: scale(1.1);
    animation-name: ${rcSwitchOn};
  }

  &:focus {
    box-shadow: 0 0 0 2px tint(#2db7f5, 80%);
    outline: none;
  }
  ${({ toggle }) => toggle || _checked}
`;

const Switch = ({ onChange, toggle }) => {
  const [_toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!_toggle);
    onChange(_toggle);
  };

  useEffect(() => {
    setToggle(toggle)
  }, [toggle])

  return (
    <Button toggle={_toggle} onClick={handleToggle} type="button" role="switch">
      <span />
    </Button>
  );
};

export default Switch;
