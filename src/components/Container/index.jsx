import React, { Component } from 'react'
import styles from './styles.css'

class Container extends Component {
  render() {
    const { 
      children,
      gutter,
      fluid,
      xl,
      lg,
      md,
      sm
    } = this.props

    const classes = []

    if (fluid) 
      classes.push(styles['container-fluid'])
      
    if (xl) 
      classes.push(styles['container-xl'])

    if (lg) 
      classes.push(styles['container-lg'])

    if (md) 
      classes.push(styles['container-md'])

    if (sm) 
      classes.push(styles['container-sm'])
    
    return (
      <div 
        style={{
          paddingLeft: gutter,
          paddingRight: gutter,
          margin: '0 auto'
        }}
        className={classes.join(' ')}>
        { children }
      </div>
    )
  }
}

export default Container