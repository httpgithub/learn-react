import React, { Component } from 'react'
import {  Link } from 'react-router-dom'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        HOME page
        <Link to="/login">login</Link>
      </div>
    )
  }
}
