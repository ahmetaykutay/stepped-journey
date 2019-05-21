import React from 'react'
import classes from './HeaderItem.module.scss'

export default function Button({ showExit, onExit, onBack }) {
	return (
		<div
			onClick={showExit ? onExit : onBack}
			className={[classes.HeaderItem, classes.Button].join(' ')}
		>
			{showExit ? (
				<div className={classes.exit}>
					<i className="fas fa-times-circle" />
					<p>Exit</p>
				</div>
			) : (
				<i className="fas fa-chevron-circle-left" />
			)}
		</div>
	)
}
