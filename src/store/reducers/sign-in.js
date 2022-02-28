import {action as actionCreator} from 'typesafe-actions';

// Types
export const Types = {
  SAVE_USER_RESPONSE: '@SIGN_IN/TYPES/SAVE_USER_RESPONSE',
  UPDATE_USER_INFO: '@SIGN_IN/TYPES/UPDATE_USER_INFO'
};

const initialState = {
  authToken: undefined,
  userInfo: undefined
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Types.SAVE_USER_RESPONSE:
      return {
        ...state,
        authToken: action.payload.token,
        userInfo: action.payload.user
      };
    case Types.UPDATE_USER_INFO:
      return {
        ...state,
        userInfo: {...action.payload}
      };
    default:
      return state;
  }
}

// Creators
export const Creators = {
  saveUserResponse: response => {
    return actionCreator(Types.SAVE_USER_RESPONSE, response);
  },
  updateUserInfo: userInfo => {
    return actionCreator(Types.UPDATE_USER_INFO, userInfo);
  }
};
