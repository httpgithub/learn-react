import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import { connect } from "react-redux";

class DashboardPage extends PureComponent {
  render() {
    return <div>{!this.props.isConfirmed && <ConfirmEmailMessage />}</div>;
  }
}
DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired
};
function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed
  };
}
export default connect(mapStateToProps)(DashboardPage);
