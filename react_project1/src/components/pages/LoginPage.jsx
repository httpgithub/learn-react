import React, { Component } from "react";
import LoginForm from "../forms/LoginForm";
export default class LoginPage extends Component {
  submit = data => {
    console.info("login data:" + JSON.stringify(data));
  };
  render() {
    return (
      <div>
        <h1>login  Page</h1>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}
