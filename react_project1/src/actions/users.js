import axios from "axios";
import api from "../api";
import { USER_FETCHED } from "../types";
export const userFetched = user => ({
  type: USER_FETCHED,
  user
});

export const fetchCurrentUser = () => dispatch =>
  api.user.fetchCurrentUser().then(user => dispatch(userFetched(user)));
