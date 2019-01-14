import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import "antd/dist/antd.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
      </div>
    );
  }
}

export default App;
