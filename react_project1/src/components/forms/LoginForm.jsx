import React, { Component } from "react";
import { Form, Icon, Input, Button, Spin } from "antd";
import InlineError from "../messages/InlineError";
import PropTypes from "prop-types";

export default class LoginForm extends Component {
  state = {
    data: {
      email: "",
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
      this.setState({ loading: true });
      //this.props.submit(this.state.data).then(resp => console.info("LoginForm:"+resp)).catch(error => console.info(error));
      console.info("this.props.submit:" + typeof this.props.submit);
      var temp = this.props
        .submit(this.state.data)
        .then(resp => {
          console.info("LoginForm:" + resp);
        })
        .catch(error => {
          console.info("LoginForm:error" + error);
          this.setState({
            errors: { global: error.statusText || error },
            loading: false
          });
        });
      console.info("this.props.submit(this.state.data):" + typeof temp);
    }
  };
  validate = data => {
    const errors = {};
    if (!data.email) {
      errors.email = "用户名不能为空";
    }
    if (!data.password) {
      errors.password = "密码不能为空";
    }
    return errors;
  };
  render() {
    const { data, errors, loading } = this.state;
    return (
      <div>
        {loading && <Spin />}
        <Form onSubmit={this.onSubmit}>
          <Form.Item>
            {errors.global && <InlineError text={errors.global} />}
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="email"
              name="email"
              value={data.email}
              onChange={this.onChange}
            />
            {errors.email && <InlineError text={errors.email} />}
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
  submit: PropTypes.func.isRequired
};
