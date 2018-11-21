import React from 'react'
import { css } from 'emotion'

const Row = ({children, gutter, style, justify, align}) => {
  return (
    <div 
      className={css`
        margin-left: ${gutter ? -gutter : 0}px;
        margin-right: ${gutter ? -gutter : 0}px;
        justify-content: ${justify};
        align-items: ${align};
        display: flex;
        flex-wrap: wrap;
        label: row;
        ${style};
      `}
    >
      { 
        typeof children === 'object' ? React.Children.map(children, child => {
          return React.cloneElement(child, { gutter }) 
        }) : children
      }
    </div>
  )
}

export default Row