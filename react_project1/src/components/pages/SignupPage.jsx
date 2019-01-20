import React, { Component } from "react";
import SignupForm from "../forms/SignupForm";
import axios from "axios";
import { connect } from "react-redux";
import { userLoggedIn } from "../../actions/auth";
import PropType from "prop-types";
class SignupPage extends Component {
  onSubmit = data => {
    //test this.props.history.push("/");
    return this.props
      .onSubmit(data)
      .then(() => this.props.history.push("/dashboard"));
  };
  render() {
    return (
      <div>
        <SignupForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, signupDate) => {
  console.info(`signupDate ${signupDate}`);
  console.info(`dispatch ${dispatch}`);
  return {
    onSubmit: data => {
      return axios
        .post("/api/signup", data)
        .then(data => {
          if (data.data.returnCode === "000000") {
            localStorage.setItem("jwt", data.data.jwt);
            return data.data;
          } else {
            return Promise.reject(data.data.returnMessage);
          }
        })
        .then(data => dispatch(userLoggedIn(data)));
    }
  };
};

SignupPage.propType = {
  onSubmit: PropType.func.isRequired,
  history: PropType.shape({
    push: PropType.func.isRequired
  }).isRequired
};
export default connect(
  null,
  mapDispatchToProps
)(SignupPage);
