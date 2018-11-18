import React from 'react'
import styles from './styles.css'

const Row = ({children, gutter, style}) => {
  return (
    <div 
      style={{
        marginLeft: gutter ? -gutter : 0,
        marginRight: gutter ? -gutter : 0,
        ...style
      }}
      className={styles.row}
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