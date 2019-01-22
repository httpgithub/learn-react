import React from "react";
import { Empty, Button } from "antd";
import { Link } from "react-router-dom";
import SearchBookForm from "../forms/SearchBookForm";
const AddBookCtA = () => {
  return (
    <Empty
      image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
      description={
        <span>
          Customize <a href="#API">Description</a>
        </span>
      }
    >
      <Link to="/books/new">
        <button>add book</button>
      </Link>
    </Empty>
  );
};

export default AddBookCtA;
