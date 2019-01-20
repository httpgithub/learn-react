import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import SignupPage from "./components/pages/SignupPage";
import ConfirmationPage from "./components/pages/ConfirmationPage";
import "antd/dist/antd.css";
import UserRoute from "./routes/UserRoute";
import GuestRoute from "./routes/GuestRoute";
import PropTypes from "prop-types";
class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Route
          location={this.props.location}
          path="/"
          exact
          component={HomePage}
        />

        <Route
          location={this.props.location}
          path="/confirmation/:token"
          exact
          component={ConfirmationPage}
        />

        {/* <Route path="/login" component={LoginPage} /> */}
        <GuestRoute
          location={this.props.location}
          path="/login"
          component={LoginPage}
        />
        <GuestRoute
          location={this.props.location}
          path="/signup"
          component={SignupPage}
        />
        {/* <Route path="/dashboard" component={DashboardPage} /> */}
        <UserRoute
          location={this.props.location}
          path="/dashboard"
          component={DashboardPage}
        />
      </div>
    );
  }
}
App.propTypes = {
  //location: PropTypes.object.isRequired
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;
