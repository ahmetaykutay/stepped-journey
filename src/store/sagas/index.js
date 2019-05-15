import { all } from 'redux-saga/effects'
import journey from './journey'

export default function* () {
  yield all([journey])
}
