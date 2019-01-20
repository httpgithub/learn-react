import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button } from "antd";
import * as actions from "../../actions/auth";
class HomePage extends Component {
  render() {
    return (
      <div>
        HOME page
        {this.props.isAuthenticated ? (
          <Button onClick={() => this.props.logout()}>退出</Button>
        ) : (
          <div><Link to="/login">login</Link> or <Link to="/signup">sign up</Link></div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.jwt
  };
}

export default connect(
  mapStateToProps,
  { logout: actions.logout }
)(HomePage);
HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};
