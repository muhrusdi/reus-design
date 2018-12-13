/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'

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
        React.Children.map(children, child => {
            return React.cloneElement(child, { gutter }) 
          })
      }
    </div>
  )
}

export default Row

Row.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.object
    ])
  }))
}