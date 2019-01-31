import React from 'react'
import { css } from '@emotion/core'

const Flex = ({type = 'flex',gutter, align, justify, children, ...props}) => {
  return (
    <div css={css`
      display: ${type};
      align-items: ${align};
      justify-content: ${justify};
      margin-left: -${gutter}px;
      margin-right: -${gutter}px;
      & > * {
        padding-left: ${gutter}px;
        padding-right: ${gutter}px;
      }
    `} {...props}>
      {children}
    </div>
  )
}

export default Flex