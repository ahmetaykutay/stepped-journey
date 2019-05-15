import { NEXT_STEP, SET_BRAND_NAME } from '../actions/actionTypes'

const initialState = {
	steps: ['brand-name', 'describe', 'objectives'],
	currentStepIndex: 0,
	brandName: null
}

export default function(state = initialState, action) {
	const { type, payload } = action
	switch (type) {
		case SET_BRAND_NAME:
			return { ...state, brandName: payload }
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
