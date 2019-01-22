import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon, Input, AutoComplete } from "antd";
import Axios from "axios";


export default class SearchBookForm extends Component {
  static propTypes = {
    //prop: PropTypes
  };

  state = {
    dataSource: [
      {
        title: "test"
      }
    ]
  };

  handleSearch=(value) =>{
    Axios.get(`/api/books/search&q=${value}`).then(data =>{
      console.info(data);
    });
  }

  optGroup(dataSource) {
    const Option = AutoComplete.Option;
    const OptGroup = AutoComplete.OptGroup;
    const options = dataSource.map(d => <Option key="book"> {d.title}</Option>);
    const optGroup = [<OptGroup key="book">{options}</OptGroup>];
    return optGroup;
  }

  render() {
    
    const { dataSource } = this.state;
    const optGroup = this.optGroup(dataSource);
    return (
      <div>
        <AutoComplete dataSource={optGroup} onSearch={this.handleSearch}>
          <Input suffix={<Icon type="search" />} />
        </AutoComplete>
      </div>
    );
  }
}
