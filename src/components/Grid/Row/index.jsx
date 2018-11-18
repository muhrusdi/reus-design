import React from 'react'
import styles from './styles.css'

const Row = ({children, gutter, style, justify, align}) => {
  return (
    <div 
      style={{
        marginLeft: gutter ? -gutter : 0,
        marginRight: gutter ? -gutter : 0,
        justifyContent: justify,
        alignItems: align,
        ...style
      }}
      className={styles.row}
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