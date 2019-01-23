import React, { Component } from "react";
import { Form, Input, Card,Button } from "antd";
import PropTypes from "prop-types";
export default class BookForm extends Component {
  static propTypes = {
    book: PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired
  };
  state = {
    data: {
      title: this.props.book.title,
      author: this.props.book.author,
      image_url: this.props.book.image_url
    }
  };
  componentWillReceiveProps(props) {
    this.setState({ ...this.state, data: props.book });
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <Form>
          <Form.Item>
            <Input placeholder="Book Title" value={data.title} />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Book Authors" value={data.author.name} />
          </Form.Item>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={data.image_url} />}
          >
            <Card.Meta title={data.title} />
          </Card>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            添加
          </Button>
        </Form>
      </div>
    );
  }
}
