/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const Container = ({ 
  children,
  gutter,
  xl,
  lg,
  md,
  sm
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
      css={[css`
        width: 100%;
        margin-right: auto;
        margin-left: auto;
        padding-left: ${gutter ? gutter : 0}px;
        padding-right: ${gutter ? gutter : 0}px;
        label: container;
      `, css(classes)]}>
      { children }
    </div>
  )

}

export default Container