import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon, Input, AutoComplete } from "antd";
import Axios from "axios";

export default class SearchBookForm extends Component {
  static propTypes = {
    onBookSelect: PropTypes.func.isRequired
  };

  state = {
    books:{},
    dataSource: []
  };

  handleSearch = value => {
    Axios.get(`/api/books/search?q=${value}`).then(data => {
      const tmp = data.data.map(d => ({
        title: d.title,
        imageUrl: d.image_url,
        id:d.id
      }));
      this.setState({ ...this.state, dataSource: tmp });
    });
  };

  onChange = (value) => {
    this.props.onBookSelect(value);
  };

  optGroup(dataSource) {
    const Option = AutoComplete.Option;
    const OptGroup = AutoComplete.OptGroup;
    const options = dataSource.map(d => (
      <Option key={d.id} value={d.id}>
        {d.title}
      </Option>
    ));
    const optGroup = [<OptGroup key="book">{options}</OptGroup>];
    return optGroup;
  }

  render() {
    const { dataSource } = this.state;
    const optGroup = this.optGroup(dataSource);
    return (
      <div>
        <AutoComplete
          dataSource={optGroup}
          onSearch={this.handleSearch}
          onChange={this.onChange}
        >
          <Input suffix={<Icon type="search" />} />
        </AutoComplete>
      </div>
    );
  }
}
