import React, { useState } from 'react'
import { connect } from 'react-redux'
import { actions } from '../../../../store'
import StepContainer from '../../StepContainer'
import Title from '../../../Title/Title'
import Text from '../../../Text/Text'
import Button from '../../../Button/Button'
import Pagination from '../../../Pagination/Pagination'
import TextArea from '../../../TextArea/TextArea'

function BrandName({ currentStepIndex, totalSteps, setDescription }) {
	const [newDescription, setNewDescription] = useState('')

	return (
		<StepContainer>
			<Title>objective</Title>
			<Pagination page={currentStepIndex + 1} totalPage={totalSteps} />
			<Text>Tell us about your brand</Text>
			<TextArea wordCount={500} onChange={setNewDescription} />
			<Button
				disabled={newDescription === ''}
				onClick={() => {
					// setDescription(newDescription)
				}}
			>
				Next
			</Button>
		</StepContainer>
	)
}

const mapStateToProps = state => ({
	currentStepIndex: state.journey.currentStepIndex,
	totalSteps: state.journey.steps.length
})

const mapDispatchToProps = dispatch => ({
	setDescription: desc => dispatch(actions.journey.setDescription(desc))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BrandName)
