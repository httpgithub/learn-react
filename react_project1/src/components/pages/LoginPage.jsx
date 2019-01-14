import LoginForm from "../forms/LoginForm";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class LoginPage extends Component {
  submit = data => {
    //this.props.login(data).then(() => this.props.history.push("/"));
    this.props.login(data);
  };
  render() {
    return (
      <div>
        <h1>login Page</h1>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }),
  login: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (...user) =>{
      console.info("user login");
      dispatch({
        type: "USER_LOGGED_IN",
        user
      })
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);
