import {fork} from 'redux-saga/effects';
import {mapSaga} from './Map/Map.sagas';

export function* rootSaga() {
  yield fork(mapSaga);
}
