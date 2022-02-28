import {action as actionCreators} from 'typesafe-actions';

export const Types = {
  SIGNOUT_USER_FROM_APP: '@SIGN_OUT/SIGNOUT_USER_FROM_APP'
};

export default function (state = {isDisconnected: false}, action) {
  if (action.type === Types.SIGNOUT_USER_FROM_APP) {
    state = {isDisconnected: true};
    return state;
  }
  return state;
}

export const Creators = {
  signOutUserFromApp: () => {
    return actionCreators(Types.SIGNOUT_USER_FROM_APP);
  }
};
