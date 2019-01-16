import { USER_LOGGED_IN } from "../types";
import api from "../api";
export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});
export const login = credentials => dispatch =>
  api.user
    .login(credentials)
    .then(user => {
      if (user.data.returnCode === "000000") {
        return user;
      } else {
        return Promise.reject(user.data.returnMessage);
      }
    })
    .then(user => dispatch(userLoggedIn(user)));
