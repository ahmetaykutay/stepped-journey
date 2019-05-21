import React from 'react'
import classes from './HeaderItem.module.scss'
import Button from './Button'

function HeaderItem({ status, title }) {
	return (
		<div
			className={[
				classes.HeaderItem,
				status ? status.className : classes.PASSIVE
			].join(' ')}
		>
			{status === HeaderItem.status.DONE ? (
				<i className="fas fa-check-circle" />
			) : (
				<i
					className={`${
						status === HeaderItem.status.ACTIVE ? 'fas' : 'far'
					} fa-question-circle`}
				/>
			)}
			<div>{title}</div>
		</div>
	)
}

HeaderItem.status = {
	DONE: {
		className: classes.DONE
	},
	ACTIVE: {
		className: classes.ACTIVE
	},
	PASSIVE: {
		className: classes.PASSIVE
	}
}

HeaderItem.Button = Button

export default HeaderItem
