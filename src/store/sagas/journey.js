import { fork, takeEvery, put } from 'redux-saga/effects'
import { SET_BRAND_NAME, SET_DESCRIPTION } from '../actions/actionTypes'
import { nextStep } from '../actions/journey'

function* goToNextStep() {
	try {
		yield put(nextStep())
	} catch (error) {
		yield console.log(error)
	}
}

function* watch() {
	yield takeEvery(SET_BRAND_NAME, goToNextStep)
	yield takeEvery(SET_DESCRIPTION, goToNextStep)
}

export default fork(watch)
