import React, { Component } from "react";
import { Form, Icon, Input, Button, Spin } from "antd";
import Schema from "validate";
import InlineError from "../messages/InlineError";
import PropTypes from "prop-types";

class SignupForm extends Component {
  state = {
    data: {
      email: "",
      password: "",
      userName: ""
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
  onSubmit = e => {
    e.preventDefault();
    const { data } = this.state;
    const errors = this.validate({ ...data });
    if (errors && errors.length) {
      errors.map(error => {
        errors[error.path] = error.message;
      });
      console.info(errors);
      this.setState({ errors });
    } else {
      this.props
        .onSubmit(data)
        .catch(e => console.info(`异常信息:${JSON.stringify(e)}`))
        .then(data => console.info(`测试异常后的信息data：${data}`));
    }
  };
  validate = data => {
    let errors = {};
    const dataSchema = new Schema();
    dataSchema
      .path("email")
      .type(String)
      .required()
      .length({ min: 5, max: 15 })
      .path("password")
      .type(String)
      .required()
      .length({ min: 5, max: 15 });
    errors = dataSchema.validate(data);

    return errors;
  };

  render() {
    const { data, errors } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Item label="userName">
          {errors.userName && <InlineError text={errors.userName} />}
          <Input
            onChange={this.onChange}
            type="text"
            name="userName"
            value={data.userName}
          />
        </Form.Item>
        <Form.Item label="E-mail">
          {errors.email && <InlineError text={errors.email} />}
          <Input
            onChange={this.onChange}
            type="text"
            name="email"
            value={data.email}
          />
        </Form.Item>
        <Form.Item label="密码">
          {errors.password && <InlineError text={errors.password} />}
          <Input
            onChange={this.onChange}
            type="password"
            name="password"
            value={data.password}
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit"> 注册 </Button>
        </Form.Item>
      </Form>
    );
  }
}
SignupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SignupForm;
