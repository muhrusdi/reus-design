import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

const Button = ({children, type, size, disabled, ...props}) => {
  const _default = css`
    line-height: 1.499;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    outline: none;
    user-select: none;
    transition: all .3s cubic-bezier(.645, .045, .355, 1);
    position: relative;
    
  `
  let _type
  switch (type) {
    case 'primary':
      _type = css`
        color: #fff;
        background-color: #1890ff;
        border-color: #1890ff;
        text-shadow: 0 -1px 0 rgba(0,0,0,0.12);
        box-shadow: 0 2px 0 rgba(0,0,0,0.045);
        &:hover {
          color: #fff;
          background-color: #40a9ff;
          border-color: #40a9ff;
        }
      `
      break
    case 'success':
      _type = css`
        color: #fff;
        background-color: #46c93a;
        border-color: #46c93a;
        text-shadow: 0 -1px 0 rgba(0,0,0,0.12);
        box-shadow: 0 2px 0 rgba(0,0,0,0.045);
        &:hover {
          color: #fff;
          background-color: #5bd450;
          border-color: #46c93a;
        }
      `
      break
    case 'warning':
      _type = css`
        color: #fff;
        background-color: #FFBA00;
        border-color: #FFBA00;
        text-shadow: 0 -1px 0 rgba(0,0,0,0.12);
        box-shadow: 0 2px 0 rgba(0,0,0,0.045);
        &:hover {
          color: #fff;
          background-color: #ffcb49;
        }
      `
      break
    case 'danger':
      _type = css`
        color: #f5222d;
        background-color: #f5f5f5;
        border-color: #d9d9d9;
        &:hover {
          color: #fff;
          background-color: #ff4d4f;
          border-color: #ff4d4f;
        }
      `
      break
    default:
      _type = css`
        box-shadow: 0 2px 0 rgba(0,0,0,0.015);
        color: rgba(0,0,0,0.65);
        background-color: #fff;
        border-color: #d9d9d9;
        &:hover {
          color: #40a9ff;
          background-color: #fff;
          border-color: #40a9ff;
        }
      `
  }

  let _size
  switch (size) {
    case 'large':
      _size = css`
        padding: 0 15px;
        font-size: 16px;
        border-radius: 4px;
        height: 40px;
        label: large;
      `
      break
    case 'small':
      _size = css`
        padding: 0 7px;
        font-size: 14px;
        border-radius: 4px;
        height: 24px;
        label: small;
      `
      break
    default:
      _size = css`
        padding: 0 15px;
        font-size: 14px;
        border-radius: 4px;
        height: 32px;
        label: default;
      `
  }

  let _disabled
  if (disabled) {
    _disabled = css`
      color: rgba(0,0,0,0.25);
      background-color: #f5f5f5;
      border-color: #d9d9d9;
      cursor: not-allowed;
      text-shadow: none;
      -webkit-box-shadow: none;
      box-shadow: none;
      &:hover {
        color: rgba(0,0,0,0.25);
        background-color: #f5f5f5;
        border-color: #d9d9d9;
        text-shadow: none;
        -webkit-box-shadow: none;
        box-shadow: none;
      }
    `
  }
  return (
    <button  {...{disabled, ...props}} css={[_default, _type, _size, _disabled]}>
      {children}
    </button>
  )
}

export default Button

Button.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool
}