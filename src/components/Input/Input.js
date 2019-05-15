import React from 'react'
import classes from './styles.module.scss'

export default function Input({ placeholder, onChange, style }) {
	return (
		<input
			style={style}
			className={classes.input}
			type="text"
			placeholder={placeholder}
			onChange={e => onChange(e.currentTarget.value)}
		/>
	)
}
