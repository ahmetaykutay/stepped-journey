import { NEXT_STEP, SET_BRAND_NAME, SET_DESCRIPTION } from './actionTypes'

export const nextStep = () => ({
  type: NEXT_STEP
})

export const setBrandName = payload => ({
  type: SET_BRAND_NAME,
  payload
})

export const setDescription = payload => ({
  type: SET_DESCRIPTION,
  payload
})
