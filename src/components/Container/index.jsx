import React from 'react'
import { css } from '@emotion/core'

const Container = ({
  className,
  children,
  gutter = 16,
  xl,
  lg,
  md,
  sm,
  style
}) => {

  let classes = []
    
  if (xl) 
    classes.push(`max-width: 1140px;`)

  if (lg) 
    classes.push(`max-width: 960px;`)

  if (md) 
    classes.push(`max-width: 720px;`)

  if (sm) 
    classes.push(`max-width: 540px;`)
  
  return (
    <div 
      className={className}
      css={[css`
        width: 100%;
        margin-right: auto;
        margin-left: auto;
        padding-left: ${gutter}px;
        padding-right: ${gutter}px;
        label: container;
      `, css(classes), style]}>
      { children }
    </div>
  )

}

export default Container