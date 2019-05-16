import React from 'react'
import classes from './styles.module.scss'

export default function Chip({ text, children, onDelete, style }) {
	return (
		<div style={style} className={classes.chip}>
			<span>{children || text}</span>
			<span onClick={onDelete} className={classes.delete}>
				x
			</span>
		</div>
	)
}
