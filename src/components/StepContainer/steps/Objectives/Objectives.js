import React, { useState } from 'react'
import Input from '../../../Input/Input'
import Chip from '../../../Chip/Chip'
import classes from './styles.module.scss'

function Objectives({ updateStepValue }) {
	const [newObjective, setNewObjective] = useState('')
	const [objectives, setObjectives] = useState([])

	const addObjective = () => {
		const objtvArr = [...objectives]
		objtvArr.push(newObjective)
		setObjectives(objtvArr)
		updateStepValue(objtvArr)
		setNewObjective('')
	}

	return (
		<div style={{ width: '70%' }}>
			<Input
				rounded
				placeholder="We want to go viral"
				onChange={setNewObjective}
				onAdd={addObjective}
				isAddDisabled={newObjective === ''}
				value={newObjective}
			/>
			<div className={classes.chipContainer}>
				{objectives.map(o => (
					<Chip key={o} text={o} />
				))}
			</div>
		</div>
	)
}

export default Objectives
