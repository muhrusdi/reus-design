import React from 'react'
import { oneOfType, arrayOf, shape, func, object, objectOf } from 'prop-types'
import { css } from '@emotion/core'

const Row = ({children, gutter, justify, align, style, className}) => {
  return (
    <div 
      className={className}
      css={[css`
        margin-left: ${gutter ? -gutter : 0}px;
        margin-right: ${gutter ? -gutter : 0}px;
        justify-content: ${justify};
        align-items: ${align};
        display: flex;
        flex-wrap: wrap;
        label: row;
      `, style]}
    >
      { 
        Array.isArray(children) ? React.Children.map(children, child => {
          return React.cloneElement(child, { gutter }) 
        }) : children
      }
    </div>
  )
}

export default Row

Row.propTypes = {
  children: oneOfType([
    arrayOf(shape({
      type: oneOfType([
        func,
        object
      ])
    })),
    objectOf(shape({
      type: oneOfType([
        func,
        object
      ])
    }))
  ])
}