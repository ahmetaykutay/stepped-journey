import React from 'react'
import classes from './styles.module.scss';

export default function Input({placeholder, onChange}) {
  return (
    <input className={classes.input} type="text" placeholder={placeholder} onChange={e => onChange(e.currentTarget.value)} />
  )
}
