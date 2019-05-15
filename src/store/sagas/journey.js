import { fork, takeEvery, put } from 'redux-saga/effects'
import { UPDATE_STEP } from '../actions/actionTypes'
import { nextStep } from '../actions/journey'

function* goToNextStep() {
	try {
		yield put(nextStep())
	} catch (error) {
		yield console.log(error)
	}
}

function* watch() {
	yield takeEvery(UPDATE_STEP, goToNextStep)
}

export default fork(watch)
