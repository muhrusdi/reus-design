import React from 'react'
import styles from './styles'
import classnames from 'classnames'

const Badge = ({dot, count, children, style, overflowCount}) => {
  let child = null
  let rendered = null

  if (!dot) {
    child = count
    child = overflowCount ? 
      (child > overflowCount ? (`${child - (child - overflowCount)}+`): child) : child

    if (count !== 0) {
      rendered = 
        <sup className={classnames(styles.badge, styles.badgeDefault)}>
          {child}
        </sup>
    }
  } else {
    rendered = 
      <sup className={classnames(styles.badge, styles.badgeDot)}/>
  }

  return (
    <div style={style} className={styles.badgeWrapper}>
      {children}
      {rendered}
    </div>
  )
}

export default Badge