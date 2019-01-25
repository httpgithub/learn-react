import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { userLoggedIn } from "./actions/auth";
import { composeWithDevTools } from "redux-devtools-extension";
import decode from "jwt-decode";
import setAuthorizationHeader from "./utils/setAuthorizationHeader";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

if (localStorage.getItem("jwt")) {
  const payload = decode(localStorage.getItem("jwt"));
  const sub = JSON.parse(payload.sub);
  const user = { jwt: localStorage.getItem("jwt"),confirmed:sub.confirmed,email:sub.email };

  //页面每次重新加载是都会走index.js
  setAuthorizationHeader(localStorage.jwt);
  store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
  <Router>
    <Provider store={store}>
      {/* redirect 无效 https://stackoverflow.com/questions/42875949/react-router-v4-redirect-not-working */}
      <Route component={App} />
    </Provider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
