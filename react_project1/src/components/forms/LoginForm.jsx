import React, { Component } from "react";
import { Form, Icon, Input, Button } from "antd";
import InlineError from "../messages/InlineError";
import PropTypes from "prop-types";

export default class LoginForm extends Component {
  state = {
    data: {
      username: "",
      password: ""
    },
    loading: false,
    errors: {}
  };
  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data);
    }
  };
  validate = data => {
    const errors = {};
    if (!data.username) {
      errors.username = "用户名不能为空";
    }
    if (!data.password) {
      errors.password = "密码不能为空";
    }
    return errors;
  };
  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="username"
              name="username"
              value={data.username}
              onChange={this.onChange}
            />
            {errors.username && <InlineError text={errors.username} />}
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              name="password"
              type="password"
              placeholder="password"
              value={data.password}
              onChange={this.onChange}
            />
            {errors.password && <InlineError text={errors.password} />}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              登陆
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
LoginForm.propTypes = {
    submit:PropTypes.func.isRequired
};
