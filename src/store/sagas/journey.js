import { fork, takeEvery, put, all } from 'redux-saga/effects'
import { SET_BRAND_NAME } from '../actions/actionTypes'
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
}

export default fork(watch)
