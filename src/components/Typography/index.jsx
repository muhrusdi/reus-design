import React from 'react'
import { css } from '@emotion/core'

const Typography = ({
  className,
  tag = "h1",
  type,
  children,
  font,
  color,
  size,
  weight,
  align,
  ellipsis,
  style}) => {

  let fontFamily
  if (font) {
    fontFamily = `${font}, "Helvetica Neue","Helvetica","Arial",sans-serif`
  }
  const _styles = {
    fontFamily: fontFamily,
    textAlign: align,
    fontWeight: weight,
    color: color,
    fontSize: size 
  }
  let _type
  switch (type) {
    case "headline-standalone": 
      _type = css`
        font-size: 96px;
        line-height: 1.04167;
        font-weight: 600;
        letter-spacing: -.015em;
        @media only screen and (max-width: 1068px) {
          font-size:80px;
          line-height: 1.05;
          font-weight: 600;
          letter-spacing: -.015em;
        }
        @media only screen and (max-width: 735px) {
          font-size:48px;
          line-height: 1.08365;
          font-weight: 600;
          letter-spacing: -.003em;
        }
      `
      break
    case "headline-super": 
      _type = css`
        font-size: 80px;
        line-height: 1.05;
        font-weight: 600;
        letter-spacing: -.015em;
        @media only screen and (max-width: 1068px) {
          font-size:64px;
          line-height: 1.0625;
          font-weight: 600;
          letter-spacing: -.009em;
        }
        @media only screen and (max-width: 735px) {
          font-size:48px;
          line-height: 1.08365;
          font-weight: 600;
          letter-spacing: -.003em;
        }
      `
      break
    case "headline-elevated": 
      _type = css`
        font-size: 64px;
        line-height: 1.0625;
        font-weight: 600;
        letter-spacing: -.009em;
        @media only screen and (max-width: 1068px) {
          font-size:48px;
          line-height: 1.08365;
          font-weight: 600;
          letter-spacing: -.003em;
        }
        @media only screen and (max-width: 735px) {
          font-size:40px;
          line-height: 1.1;
          font-weight: 600;
          letter-spacing: 0em;
        }
      `
      break
    case "headline": 
      _type = css`
        font-size: 48px;
        line-height: 1.08365;
        font-weight: 600;
        letter-spacing: -.003em;
        @media only screen and (max-width: 1068px) {
          font-size:40px;
          line-height: 1.1;
          font-weight: 600;
          letter-spacing: 0em;
        }
        @media only screen and (max-width: 735px) {
          font-size:32px;
          line-height: 1.125;
          font-weight: 600;
          letter-spacing: .004em;
        }
      `
      break
    case "headline-reduced": 
      _type = css`
        font-size: 40px;
        line-height: 1.1;
        font-weight: 600;
        letter-spacing: 0em;
        @media only screen and (max-width: 1068px) {
          font-size:32px;
          line-height: 1.125;
          font-weight: 600;
          letter-spacing: .004em;
        }
        @media only screen and (max-width: 735px) {
          font-size:28px;
          line-height: 1.14286;
          font-weight: 600;
          letter-spacing: .007em;
        }
      `
      break
    case "eyebrow-product-super": 
      _type = css`
        font-size: 44px;
        line-height: 1.09091;
        font-weight: 600;
        letter-spacing: -.002em;
        @media only screen and (max-width: 1068px) {
          font-size:35px;
          line-height: 1.11429;
          font-weight: 600;
          letter-spacing: .003em;
        }
        @media only screen and (max-width: 735px) {
          font-size:28px;
          line-height: 1.14286;
          font-weight: 600;
          letter-spacing: .007em;
        }
      `
      break
    case "eyebrow-product-elevated": 
      _type = css`
        font-size: 40px;
        line-height: 1.1;
        font-weight: 600;
        letter-spacing: 0em;
        @media only screen and (max-width: 1068px) {
          font-size:32px;
          line-height: 1.125;
          font-weight: 600;
          letter-spacing: .004em;
        }
        @media only screen and (max-width: 735px) {
          font-size:24px;
          line-height: 1.16667;
          font-weight: 600;
          letter-spacing: .009em;
        }
      `
      break
    case "eyebrow-product": 
      _type = css`
        font-size: 30px;
        line-height: 1.13353;
        font-weight: 600;
        letter-spacing: .006em;
        @media only screen and (max-width: 1068px) {
          font-size:28px;
          line-height: 1.14286;
          font-weight: 600;
          letter-spacing: .007em;
        }
        @media only screen and (max-width: 735px) {
          font-size:22px;
          line-height: 1.18182;
          font-weight: 600;
          letter-spacing: .01em;
        }
      `
      break
    case "eyebrow-product-reduced": 
      _type = css`
        font-size: 28px;
        line-height: 1.14286;
        font-weight: 600;
        letter-spacing: .007em;
        @media only screen and (max-width: 1068px) {
          font-size:24px;
          line-height: 1.16667;
          font-weight: 600;
          letter-spacing: .009em;
        }
        @media only screen and (max-width: 735px) {
          font-size:21px;
          line-height: 1.19048;
          font-weight: 600;
          letter-spacing: .011em;
        }
      `
      break
    case "eyebrow-super": 
    _type = css`
      font-size: 32px;
      line-height: 1.125;
      font-weight: 600;
      letter-spacing: .004em;
      @media only screen and (max-width: 1068px) {
        font-size:28px;
        line-height: 1.14286;
        font-weight: 600;
        letter-spacing: .007em;
      }
      @media only screen and (max-width: 735px) {
        font-size:24px;
        line-height: 1.16667;
        font-weight: 600;
        letter-spacing: .009em;
      }
    `
    break
      case "eyebrow-elevated": css`
        font-size: 28px;
        line-height: 1.14286;
        font-weight: 600;
        letter-spacing: .007em;
        @media only screen and (max-width: 1068px) {
          font-size:24px;
          line-height: 1.16667;
          font-weight: 600;
          letter-spacing: .009em;
        }
        @media only screen and (max-width: 735px) {
          font-size:21px;
          line-height: 1.19048;
          font-weight: 600;
          letter-spacing: .011em;
        }
      `
      break
    case "typography-eyebrow": 
      _type = css`
        font-size: 24px;
        line-height: 1.16667;
        font-weight: 600;
        letter-spacing: .009em;
        @media only screen and (max-width: 1068px) {
          font-size:21px;
          line-height: 1.19048;
          font-weight: 600;
          letter-spacing: .011em;
        }
      `
      break
    case "eyebrow-reduced": 
      _type = css`
        font-size: 21px;
        line-height: 1.19048;
        font-weight: 600;
        letter-spacing: .011em;
        @media only screen and (max-width: 735px) {
          font-size:19px;
          line-height: 1.21053;
          font-weight: 600;
          letter-spacing: .012em;
        }
      `
      break
    case "intro-product-super": 
      _type = css`
        font-size: 40px;
        line-height: 1.1;
        font-weight: 400;
        letter-spacing: 0em;
        @media only screen and (max-width: 1068px) {
          font-size:30px;
          line-height: 1.13353;
          font-weight: 400;
          letter-spacing: .006em;
        }
        @media only screen and (max-width: 735px) {
          font-size:24px;
          line-height: 1.16667;
          font-weight: 400;
          letter-spacing: .009em;
        }
      `
      break
    case "intro-product-elevated": 
      _type = css`
        font-size: 32px;
        line-height: 1.125;
        font-weight: 400;
        letter-spacing: .004em;
        @media only screen and (max-width: 1068px) {
          font-size:28px;
          line-height: 1.14286;
          font-weight: 400;
          letter-spacing: .007em;
        }
        @media only screen and (max-width: 735px) {
          font-size:22px;
          line-height: 1.18182;
          font-weight: 400;
          letter-spacing: .01em;
        }
      `
      break
    case "intro-product": 
      _type = css`
        font-size: 28px;
        line-height: 1.14286;
        font-weight: 400;
        letter-spacing: .007em;
        @media only screen and (max-width: 1068px) {
          font-size:24px;
          line-height: 1.16667;
          font-weight: 400;
          letter-spacing: .009em;
        }
        @media only screen and (max-width: 735px) {
          font-size:21px;
          line-height: 1.19048;
          font-weight: 400;
          letter-spacing: .011em;
        }
      `
      break
    case "intro-product-reduced": 
      _type = css`
        font-size: 24px;
        line-height: 1.16667;
        font-weight: 400;
        letter-spacing: .009em;
        @media only screen and (max-width: 1068px) {
          font-size:22px;
          line-height: 1.18182;
          font-weight: 400;
          letter-spacing: .01em;
        }
        @media only screen and (max-width: 735px) {
          font-size:19px;
          line-height: 1.21053;
          font-weight: 400;
          letter-spacing: .012em;
        }
      `
      break
    case "intro-elevated": 
      _type = css`
        font-size: 24px;
        line-height: 1.33349;
        font-weight: 400;
        letter-spacing: .009em;
        @media only screen and (max-width: 1068px) {
          font-size:21px;
          line-height: 1.38105;
          font-weight: 400;
          letter-spacing: .011em;
        }
        @media only screen and (max-width: 735px) {
          font-size: 21px;
          line-height: 1.38105;
          font-weight: 400;
          letter-spacing: .011em;
        }
      `
      break
    case "intro": 
      _type = css`
        font-size: 21px;
        line-height: 1.38105;
        font-weight: 400;
        letter-spacing: .011em;
        @media only screen and (max-width: 735px) {
          font-size:19px;
          line-height: 1.42115;
          font-weight: 400;
          letter-spacing: .012em;
        }
      `
      break
    case "quote": 
      _type = css`
        font-size: 40px;
        line-height: 1.2;
        font-weight: 400;
        letter-spacing: 0em;
        @media only screen and (max-width: 1068px) {
          font-size:32px;
          line-height: 1.25;
          font-weight: 400;
          letter-spacing: .004em;
        }
        @media only screen and (max-width: 735px) {
          font-size:28px;
          line-height: 1.28595;
          font-weight: 400;
          letter-spacing: .007em;
        }
      `
      break
    case "quote-reduced": 
      _type = css`
        font-size: 32px;
        line-height: 1.25;
        font-weight: 400;
        letter-spacing: .004em;
        @media only screen and (max-width: 1068px) {
          font-size:28px;
          line-height: 1.28595;
          font-weight: 400;
          letter-spacing: .007em;
        }
        @media only screen and (max-width: 735px) {
          font-size:24px;
          line-height: 1.33349;
          font-weight: 400;
          letter-spacing: .009em;
        }
      `
      break
    case "callout": 
      _type = css`
        font-size: 32px;
        line-height: 1.125;
        font-weight: 600;
        letter-spacing: .004em;
        @media only screen and (max-width: 1068px) {
          font-size:28px;
          line-height: 1.14286;
          font-weight: 600;
          letter-spacing: .007em;
        }
        @media only screen and (max-width: 735px) {
          font-size:24px;
          line-height: 1.16667;
          font-weight: 600;
          letter-spacing: .009em;
        }
      `
      break
    case "manifesto": 
      _type = css`
        font-size: 32px;
        line-height: 1.25;
        font-weight: 600;
        letter-spacing: .004em;
        @media only screen and (max-width: 1068px) {
          font-size:28px;
          line-height: 1.28595;
          font-weight: 600;
          letter-spacing: .007em;
        }
        @media only screen and (max-width: 735px) {
          font-size:24px;
          line-height: 1.33349;
          font-weight: 600;
          letter-spacing: .009em;
        }
      `
      break
    case "label": 
      _type = css`
        font-size: 24px;
        line-height: 1.16667;
        font-weight: 600;
        letter-spacing: .009em;
        @media only screen and (max-width: 1068px) {
          font-size:21px;
          line-height: 1.19048;
          font-weight: 600;
          letter-spacing: .011em;
        }
        @media only screen and (max-width: 735px) {
          font-size:24px;
          line-height: 1.33349;
          font-weight: 600;
          letter-spacing: .009em;
        }
      `
      break
    case "tout": 
      _type = css`
        font-size: 19px;
        line-height: 1.21053;
        font-weight: 600;
        letter-spacing: .012em;
      `
      break
    case "body": 
      _type = css`
        font-size: 17px;
        line-height: 1.47059;
        font-weight: 400;
        letter-spacing: -.022em;
      `
      break
    case "body-reduced": 
      _type = css`
        font-size: 14px;
        line-height: 1.42861;
        font-weight: 400;
        letter-spacing: -.016em;
      `
      break
    case "caption": 
      _type = css`
        font-size: 12px;
        line-height: 1.33341;
        font-weight: 400;
        letter-spacing: -.01em;
      `
      break
    case "sosumi": 
      _type = css`
        font-size: 11px;
        line-height: 1.36364;
        font-weight: 400;
        letter-spacing: -.008em;
      `
      break
    default: 
      break
  }

  let _reset

  if (
    tag === 'h1' ||
    tag === 'h2' ||
    tag === 'h3' ||
    tag === 'h4' ||
    tag === 'h5' ||
    tag === 'h6' || 
    tag === 'p'
  ) {
    _reset = css`
      & + * {
        margin-top: .8em;
      }
    `
  }

  let Element = tag
  let _children = children
  let _ellipsisStyle
  let spreadStyle = {
    className: className,
    css: [_reset, _type, _styles, style]
  }

  if (ellipsis) {
    Element = 'div'
    const ChildElement = tag
    _children = <ChildElement {...spreadStyle}>{children}</ChildElement>
    _ellipsisStyle = css`
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: ${ellipsis};
      -webkit-box-orient: vertical;  
    `
    spreadStyle.css = [_ellipsisStyle]
  }

  return (
    <Element {...spreadStyle}>
      { _children }
    </Element>
  )
}

export default Typography