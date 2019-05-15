import React, { useState } from 'react'
import { connect } from 'react-redux'
import { actions } from '../../store'
import classes from './styles.module.scss'
import Title from '../Title/Title'
import Text from '../Text/Text'
import Button from '../Button/Button'
import Pagination from '../Pagination/Pagination'
import BrandName from './steps/BrandName/BrandName'
import Describe from './steps/Describe/Describe'
import Objectives from './steps/Objectives/Objectives'

const stepComponentMap = {
	'brand-name': props => <BrandName {...props} />,
	describe: props => <Describe {...props} />,
	objectives: props => <Objectives {...props} />
}

function StepContainer({
	currentStepIndex,
	totalSteps,
	updateStep,
	currentStep
}) {
	const [stepValue, setStepValue] = useState(null)
	const isLastStep = currentStepIndex + 1 === totalSteps

	return (
		<div className={classes.container}>
			<Title>{currentStep.title}</Title>
			<Pagination page={currentStepIndex + 1} totalPage={totalSteps} />
			<Text>{currentStep.description}</Text>
			{stepComponentMap[currentStep.name]({ updateStepValue: setStepValue })}
			<Button
				disabled={!stepValue}
				onClick={() => {
					updateStep(stepValue)
				}}
			>
				{isLastStep ? 'Finish Objectives' : 'Next'}
			</Button>
		</div>
	)
}

const mapStateToProps = state => ({
	currentStepIndex: state.journey.currentStepIndex,
	totalSteps: state.journey.steps.length,
	currentStep: state.journey.steps[state.journey.currentStepIndex]
})

const mapDispatchToProps = dispatch => ({
	updateStep: val => dispatch(actions.journey.updateStep(val))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StepContainer)
