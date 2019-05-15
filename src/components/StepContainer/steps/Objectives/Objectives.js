import React, { useState } from 'react'
import Input from '../../../Input/Input'

function Objectives({ updateStepValue }) {
	const [newObjective, setNewObjective] = useState('')
	const [objectives, setObjectives] = useState([])

	const addObjective = () => {
		const objtvArr = [...objectives]
		objtvArr.push(newObjective)
		setObjectives(objtvArr)
		updateStepValue(objtvArr)
	}

	return (
		<div style={{ width: '70%' }}>
			<Input
				rounded
				placeholder="We want to go viral"
				onChange={setNewObjective}
				onAdd={addObjective}
				isAddDisabled={newObjective === ''}
			/>
			{objectives.map(o => (
				<p key={o}>{o}</p>
			))}
		</div>
	)
}

export default Objectives
