import {
	NEXT_STEP,
	SET_BRAND_NAME,
	SET_DESCRIPTION
} from '../actions/actionTypes'

const initialState = {
	steps: ['brand-name', 'describe', 'objectives'],
	currentStepIndex: 1,
	brandName: null,
	description: null
}

export default function(state = initialState, action) {
	const { type, payload } = action
	switch (type) {
		case SET_BRAND_NAME:
			return { ...state, brandName: payload }
		case SET_DESCRIPTION:
			return { ...state, description: payload }
		case NEXT_STEP:
			return {
				...state,
				currentStepIndex: (state.currentStepIndex + 1) % state.steps.length
			}
		default:
			return state
	}
}
