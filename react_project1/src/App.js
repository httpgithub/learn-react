import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import "antd/dist/antd.css";
import UserRoute from './routes/UserRoute'
import GuestRoute from './routes/GuestRoute'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={HomePage} />
        {/* <Route path="/login" component={LoginPage} /> */}
        <GuestRoute path="/login" component={LoginPage} />
        {/* <Route path="/dashboard" component={DashboardPage} /> */}
        <UserRoute path="/dashboard" component={DashboardPage} />
      </div>
    );
  }
}

export default App;
