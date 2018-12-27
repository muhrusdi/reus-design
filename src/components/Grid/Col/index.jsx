import React from 'react'
import { css } from '@emotion/core'

const Col = ({
  children, 
  gutter,
  xl,
  lg,
  md,
  sm,
  style,
  className,
  span
}) => {
  
  const breakPoints = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  }

  const cols = {
    col1: '8.3333333333',
    col2: '16.6666666667',
    col3: '25',
    col4: '33.3333333333',
    col5: '41.6666666667',
    col6: '50',
    col7: '58.3333333333',
    col8: '66.6666666667',
    col9: '75',
    col10: '83.3333333333',
    col11: '91.6666666667',
    col12: '100'
  }

  const classes = []

  if (sm || md || lg || xl) {
    classes.push(
      `
      position: relative;
      width: 100%;
      `
    )
  }
  // if (span) {
  //   classes.push(
  //     `
  //     position: relative;
  //     width: 100%;
  //     `
  //   )
  // } 

  if (span) {
    classes.push(
      `
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
      `
    )
  } 
  
  if (sm) {
    const _col = cols[`col${sm}`]
    classes.push(
      `
      @media (min-width: ${breakPoints.sm}px) {
        flex: 0 0 ${_col}%;
        max-width: ${_col}%;
      }
      `
    )
  }
  
  if (md) {
    const _col = cols[`col${md}`]
    classes.push(
      `
      @media (min-width: ${breakPoints.md}px) {
        flex: 0 0 ${_col}%;
        max-width: ${_col}%;
      }
      `
    )
  }
  
  if (lg) {
    const _col = cols[`col${lg}`]
    classes.push(
      `
      @media (min-width: ${breakPoints.lg}px) {
        flex: 0 0 ${_col}%;
        max-width: ${_col}%;
      }
      `
    )
  }
    
  if (xl) {
    const _col = cols[`col${xl}`]
    classes.push(
      `
      @media (min-width: ${breakPoints.xl}px) {
        flex: 0 0 ${_col}%;
        max-width: ${_col}%;
      }
      `
    )
  }

  return (
    <div
      className={className}
      css={[css(classes), {
        paddingLeft: gutter,
        paddingRight: gutter,
        label: 'col'
      }, style]
    }
    >
      { children }
    </div>
  )
}

export default Col