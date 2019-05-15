import { NEXT_STEP, UPDATE_STEP } from '../actions/actionTypes'

const initialState = {
	steps: [
		{
			title: 'brand name',
			name: 'brand-name',
			value: null,
			description: 'What is Your brand name?'
		},
		{
			title: 'describe',
			name: 'describe',
			value: null,
			description: 'Tell us about your brand'
		},
		{
			title: 'objectives',
			name: 'objectives',
			value: [],
			description: 'What business objectives do you want to accomplish?'
		}
	],
	currentStepIndex: 2,
	done: false
}

function getUpdatedSteps(steps, newValue, stepIndex) {
	const newSteps = [...steps]
	newSteps[stepIndex].value = newValue
	return newSteps
}

export default function(state = initialState, action) {
	const { type, payload } = action
	switch (type) {
		case NEXT_STEP:
			const newStep = state.currentStepIndex + 1
			const done = newStep === state.steps.length
			return {
				...state,
				currentStepIndex: newStep,
				done
			}
		case UPDATE_STEP:
			return {
				...state,
				steps: getUpdatedSteps(state.steps, payload, state.currentStepIndex)
			}
		default:
			return state
	}
}
