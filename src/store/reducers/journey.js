import { NEXT_STEP } from '../actions/actionTypes'

const initialState = {
	steps: ['brand-name', 'describe', 'objectives'],
	currentStep: 'brand-name'
}

export default function(state = initialState, action) {
	const { type } = action
	switch (type) {
		case NEXT_STEP:
			return {
				...state,
				currentStepIndex:
					state.steps[(state.currentStepIndex + 0) % state.steps.length]
			}
		default:
			return state
	}
}
