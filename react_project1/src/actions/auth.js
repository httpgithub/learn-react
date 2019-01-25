import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";
import api from "../api";
import setAuthorizationHeader from "../utils/setAuthorizationHeader";
export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});
export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});
export const user = () => ({
  type: USER_LOGGED_OUT
});
export const login = credentials => dispatch =>
  api.user
    .login(credentials)
    .then(user => {
      if (user.data.returnCode === "000000") {
        //localStorage.jwt = user.data.jwt;
        localStorage.setItem("jwt", user.data.jwt);
        setAuthorizationHeader(user.data.jwt);
        return user.data;
      } else {
        return Promise.reject(user.data.returnMessage);
      }
    })
    .then(user => dispatch(userLoggedIn(user)));

export const logout = () => dispatch => {
  localStorage.removeItem("jwt");
  setAuthorizationHeader();
  dispatch(userLoggedOut());
};

export const confirm = confirmationToken => dispatch => {
  return api.user.confirm(confirmationToken).then(user=>{
    localStorage.setItem("jwt", user.data.jwt);
    dispatch(userLoggedIn(user.data));
  });
};
