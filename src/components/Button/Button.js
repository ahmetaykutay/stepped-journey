import React from 'react'
import classes from './styles.module.scss'

export default function Button({ children, text, disabled, onClick }) {
	return (
		<button
			className={[classes.button, disabled ? classes.disabled : null].join(' ')}
      disabled={disabled}
		>
			{children || text}
		</button>
	)
}
