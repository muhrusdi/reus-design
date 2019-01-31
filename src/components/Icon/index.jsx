import React from 'react'
import { css } from '@emotion/core'
import { icons } from './_icons'

const Icon = ({component, type, className, ...props}) => {
  let Svg
  const _props = {
    className
  }
  if (type)
    Svg = icons[type].Svg
  return (
    <i css={css`
      display: inline-block;
      font-style: normal;
      vertical-align: middle;
      text-align: center;
      text-transform: none;
      line-height: 0;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      & > * {
        line-height: 1;
      }
      & > svg {
        display: inline-block;
      }
    `}
    {..._props}
    >
      {
        component ? component : 
          type ? <Svg {...props}/> : null
      }
    </i>
  )
}

export default Icon