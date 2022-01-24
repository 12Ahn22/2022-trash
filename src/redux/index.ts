import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { watchAndLog, watchAndLogTake } from './_take';

// 리듀서
export const rootReducer = combineReducers({

});


// 사가
export function* rootSaga() {
  yield all([
    watchAndLog(),
    watchAndLogTake()
  ]);
};