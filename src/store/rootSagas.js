import {all, takeLatest} from '@redux-saga/core/effects';

import {Types as usersTypes, getUsersSaga} from './reducers/user';

export default function* rootSaga() {
  return yield all([
    // User
    takeLatest(usersTypes.GET_USERS, getUsersSaga)
  ]);
}
