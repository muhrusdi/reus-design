import React, { Component } from 'react'
import { css } from 'emotion'

class Container extends Component {
  render() {
    const { 
      children,
      gutter,
      xl,
      lg,
      md,
      sm
    } = this.props

    const classes = []
      
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
        className={css`
          width: 100%;
          margin-right: auto;
          margin-left: auto;
          padding-left: ${gutter ? gutter : 0}px;
          padding-right: ${gutter ? gutter : 0}px;
          label: container;
          ${classes};
        `}>
        { children }
      </div>
    )
  }
}

export default Container