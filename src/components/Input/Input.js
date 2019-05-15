import React from 'react'
import classes from './styles.module.scss'

export default function Input({
	placeholder,
	onChange,
	style,
	rounded,
	onAdd,
	isAddDisabled
}) {
	return (
		<div style={style} className={classes.container}>
			<input
				className={[classes.input, rounded ? classes.rounded : null].join(' ')}
				type="text"
				placeholder={placeholder}
				onChange={e => onChange(e.currentTarget.value)}
			/>
			{typeof onAdd === 'function' ? (
				<div
					onClick={() => {
						!isAddDisabled && onAdd()
					}}
					className={[
						classes.addBtn,
						isAddDisabled ? null : classes.active
					].join(' ')}
				>
					<span>+</span>
				</div>
			) : null}
		</div>
	)
}
