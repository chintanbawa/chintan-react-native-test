import {all, takeLatest} from '@redux-saga/core/effects';

// import {Types as signInTypes} from './reducers/user';

export default function* rootSaga() {
  return yield all([
    // // User
    // takeLatest(signInTypes.SEND_OTP, sendOTPSaga),
    // // Sign out
    // takeLatest(signOutTypes.SIGNOUT_USER_FROM_SERVER, signOutUserFromServer)
  ]);
}
