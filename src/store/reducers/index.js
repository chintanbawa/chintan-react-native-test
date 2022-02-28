import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import signIn from './sign-in';
import user from './user';
import signOut from './sign-out';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['signIn']
};

const appReducer = combineReducers({
  signIn,
  user,
  signOut
});

const rootReducer = (state, action) => {
  if (state !== undefined) {
    if (state.signOut.isDisconnected === true) {
      const clearState = {
        ...appReducer(undefined, action)
      };
      clearState.user.authToken = undefined;
      clearState.user.userInfo = undefined;
      clearState.signOut.Disconnected = false;
      return appReducer(clearState, action);
    }
  }
  return appReducer(state, action);
};

export default persistReducer(rootPersistConfig, rootReducer);
