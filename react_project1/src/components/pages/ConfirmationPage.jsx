import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert, Card } from "antd";
import { connect } from "react-redux";
import { confirm } from "../../actions/auth";
import { Link } from "react-router-dom";
class ConfirmationPage extends Component {
  static propTypes = {
    confirm: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.object.isRequired
    }).isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      success: false
    };
  }

  componentDidMount() {
    this.props
      .confirm({ confirmationToken: this.props.match.params.token })
      .then(() => this.setState({ loading: false, success: true }))
      .catch(() => this.setState({ loading: true, success: false }));
  }

  render() {
    const { loading, success } = this.state;
    return (
      <div>
        {loading && <Alert type="error" message="邮箱验证中" />}

        {!loading && success && (
          <Card title="邮箱校验成功">
            <p>
              <Link to="/dashboard">跳转到主页</Link>
            </p>
          </Card>
        )}
      </div>
    );
  }
}
export default connect(
  null,
  { confirm }
)(ConfirmationPage);
