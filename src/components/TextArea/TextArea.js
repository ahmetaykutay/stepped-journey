import React, { useState } from 'react'
import classes from './styles.module.scss'

export default function TextArea({ onChange, placeholder, wordCount = 0 }) {
	const [currentWordCount, setWordCount] = useState(0)
	const [value, setValue] = useState('')
	return (
		<div className={classes.container}>
			<textarea
				className={classes.textarea}
				value={value}
				onChange={e => {
					const newWC = e.currentTarget.value.length
					const newVal = e.currentTarget.value
					if(wordCount > 0 && newWC > wordCount) return null
					setWordCount(newWC)
					onChange(newVal)
					setValue(newVal)
				}}
				placeholder={placeholder}
			/>
			{wordCount ? <span>{`${currentWordCount}/${wordCount}`}</span> : null}
		</div>
	)
}
