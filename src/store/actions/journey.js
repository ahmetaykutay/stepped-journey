import { NEXT_STEP, SET_BRAND_NAME } from './actionTypes'

export const nextStep = () => ({
  type: NEXT_STEP
})

export const setBrandName = payload => ({
  type: SET_BRAND_NAME,
  payload
})
