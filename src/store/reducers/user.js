import {action as actionCreator} from 'typesafe-actions';
import {put, call} from '@redux-saga/core/effects';
import axios from 'axios';

// Types
export const Types = {
  GET_USERS: '@USERS/TYPES/GET_USERS',
  UPDATE_USERS_LIST: '@USERS/TYPES/UPDATE_USERS_LIST'
};

const initialState = {
  users: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Types.UPDATE_USERS_LIST:
      return {
        ...state,
        users: [...action.payload]
      };
    default:
      return state;
  }
}

// Creators
export const Creators = {
  getUsers: () => {
    return actionCreator(Types.GET_USERS);
  },
  updateUsersList: users => {
    return actionCreator(Types.UPDATE_USERS_LIST, users);
  }
};

/**
 * Get Users via api
 *
 *
 * */
export function* getUsersSaga() {
  try {
    const response = yield call(
      axios.get,
      'https://jsonplaceholder.typicode.com/users'
    );

    yield put(Creators.updateUsersList(response.data));
  } catch (error) {
    alert(error);
  }
}
