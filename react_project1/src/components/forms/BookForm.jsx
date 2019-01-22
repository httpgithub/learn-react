import React, { Component } from "react";
import { Form } from "antd";
export default class BookForm extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Item>
            <Input
              placeholder="Username"
            />
          </Form.Item>
        </Form>
      </div>
    );
  }
}
