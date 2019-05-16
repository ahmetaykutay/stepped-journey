import React from 'react'
import classes from './styles.module.scss'

export default function Chip({text, children}) {
  return (
    <div className={classes.chip}>
      <span>{children || text}</span>
      <span className={classes.delete}>x</span>
    </div>
  )
}
