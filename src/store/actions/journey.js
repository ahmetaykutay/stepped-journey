import { NEXT_STEP, UPDATE_STEP } from './actionTypes'

export const nextStep = () => ({
  type: NEXT_STEP
})

export const updateStep = payload => ({
  type: UPDATE_STEP,
  payload
})
