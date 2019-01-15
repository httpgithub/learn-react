import LoginForm from "../forms/LoginForm";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";

class LoginPage extends Component {
  submit = data => {
    //this.props.login(data).then(() => this.props.history.push("/"));
    this.props.login(data);//调用login方法 参数是data 方法的定义通过mapDispatchToProps login 定义 
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

/* 返回的是pojo 对象
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
*/

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (user) => {
      console.info(user)
      axios
        .post("/api/auth", JSON.stringify(user))
        .then(res => res.data.user)
        .then(user => {
          console.info(user);
        });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);
