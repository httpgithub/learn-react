import React from 'react'
import axios from 'axios';

export default (token = null) => {
    if (token) {
      axios.defaults.headers.common.authorization = `test ${token}`;
    } else {
      delete axios.defaults.headers.common.authorization;
    }
  };
