import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class VerticalMenu extends Component {
  render() {
    return (
      <div className="printing-display">
        <Menu style={{ marginBottom: '1em' }}>
            <Menu.Item name="we-mix">We/Mix</Menu.Item>
              <Link to="/">
                <Menu.Item name="home">Home</Menu.Item>
              </Link>
              <Link to="/search">
                <Menu.Item name="Search">Search</Menu.Item>
              </Link>
            <Menu.Item />
        </Menu>
      </div>
    )
  }
}