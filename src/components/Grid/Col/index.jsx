import React from 'react'
import styles from './styles'

const Col = ({ 
  style,
  children, 
  gutter,
  xl,
  lg,
  md,
  sm,
  col
}) => {
  const classes = []

  if (!sm && !md && !lg && !xl)
    classes.push(styles[`col`])
  
  if (col)
    classes.push(styles[`col-${col}`])
  
  if (sm)
    classes.push(styles[`col-sm-${sm}`])
  
  if (md)
    classes.push(styles[`col-md-${md}`])
  
  if (lg)
    classes.push(styles[`col-lg-${lg}`])
    
  if (xl)
    classes.push(styles[`col-xl-${xl}`])
    
  return (
    <div 
      className={classes.join(' ')}
      style={{
        paddingLeft: gutter,
        paddingRight: gutter,
        ...style
      }
    }>
      { children }
    </div>
  )
}

export default Col