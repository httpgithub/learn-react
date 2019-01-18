import React, { Component } from "react";
import { Form, Icon, Input, Button, Spin } from "antd";

export default class SignupForm extends Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {}
  };
  onChange = e => {
    //扩展运算符 http://es6.ruanyifeng.com/#docs/object
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };
  render() {
    const { data } = this.state;
    return (
      <Form>
        <Form.Item label="E-mail">
          <Input
            onChange={this.onChange}
            type="text"
            name="email"
            value={data.email}
          />
        </Form.Item>
        <Form.Item label="密码">
          <Input
            onChange={this.onChange}
            type="password"
            name="password"
            value={data.password}
          />
        </Form.Item>
        <Form.Item>
          <Button> 注册 </Button>
        </Form.Item>
      </Form>
    );
  }
}
