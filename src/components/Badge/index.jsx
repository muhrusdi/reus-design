import React from 'react'
import { css } from '@emotion/core'
import '../../styles.css'

const Badge = ({dot, count, children, overflowCount, style, className}) => {
  let child = null
  let rendered = null

  const badge = css`
    box-shadow: 0 0 0 1px #fff;
    overflow: hidden;
    position: absolute;
    right: 0;
  `

  const badgeDefault = css`
    transform: translateX(50%);
    transform-origin: 100%;
    padding: 0 8px;
    top: -10px;
    height: 20px;
    border-radius: 10px;
    min-width: 20px;
    background: #f5222d;
    color: #fff;
    line-height: 20px;
    text-align: center;
    padding: 0 6px;
    font-size: 12px;
    font-weight: 400;
    white-space: nowrap;
  `

  const badgeDot = css`
    top: -3px;
    height: 6px;
    line-height: 0;
    vertical-align: baseline;
    width: 6px;
    border-radius: 100%;
    background: #f5222d;
    z-index: 10;
  `

  if (!dot) {
    child = count
    child = overflowCount ? 
      (child > overflowCount ? (`${child - (child - overflowCount)}+`): child) : child

    if (count !== 0) {
      rendered = 
        <sup css={[badge, badgeDefault]}>
          {child}
        </sup>
    }
  } else {
    rendered = 
      <sup css={[badge, badgeDot]}/>
  }

  return (
    <div 
      className={className}
      css={[css`
        font-family: Chinese Quote,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif;
        font-size: 14px;
        font-variant: tabular-nums;
        line-height: 1.5;
        color: rgba(0,0,0,.65);
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
        position: relative;
        display: inline-block;
        position: relative;
        line-height: 1;
        color: initial;
        label: badge;
      `, style]}>
        {children}
        {rendered}
      </div>
  )
}

export default Badge