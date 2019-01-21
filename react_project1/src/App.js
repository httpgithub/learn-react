import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import SignupPage from "./components/pages/SignupPage";
import ConfirmationPage from "./components/pages/ConfirmationPage";
import TopNavigation from "./components/navigation/TopNavigation";
import "antd/dist/antd.css";
import UserRoute from "./routes/UserRoute";
import GuestRoute from "./routes/GuestRoute";
import PropTypes from "prop-types";
import { Layout } from "antd";
import { connect } from "react-redux";
class App extends Component {
  render() {
    return (
      <Layout>
        <div className="App">
          {this.props.isAuthenticated && <TopNavigation />}
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
      </Layout>
    );
  }
}
App.propTypes = {
  //location: PropTypes.object.isRequired
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};
const mapStateToProps = state => ({
  isAuthenticated: !!state.user.email
});

export default connect(
  mapStateToProps,
  null
)(App);
