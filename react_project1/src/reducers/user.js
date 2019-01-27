import { USER_LOGGED_IN, USER_LOGGED_OUT, USER_FETCHED } from "../types";
export default function user(state = { loaded: false }, action = {}) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.user;
      break;
    case USER_LOGGED_OUT:
      return { loaded: true };
      break;
    case USER_FETCHED:
      return { ...state, ...action.user, loaded: true };
      break;
    default:
      return state;
  }
}
