import React from 'react'
import classes from './styles.module.scss'

export default function StepContainer({ children }) {
	return <div className={classes.container}>{children}</div>
}
