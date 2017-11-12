import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { loggedIn, logOut } from '../../utils/authenticator'

export default class Navigation extends Component {

  render() {
    if (loggedIn()) {
      return (
        <div>
          <Menu inverted tabular >
              <Link to="/home">
                  <Menu.Item name="home">Home</Menu.Item>
              </Link>
              <Link to="/find_artist">
                  <Menu.Item name="Search">Search</Menu.Item>
              </Link>
                  
              <Menu.Menu position='right' >
                <Link to="/">
                  <Menu.Item name="Logout" onClick={logOut}>Logout</Menu.Item>
                </Link>
              </Menu.Menu>
          </Menu>
        </div>
        )
    } else {
    return (
      <div>
        <Menu inverted tabular >
            <Link to="/about">
                <Menu.Item name="about">About</Menu.Item>
            </Link>
          
            <Menu.Menu position='right'>
                <Link to="/signup">
                  <Menu.Item name="Signup">Signup</Menu.Item>
                </Link>
                <Link to="/login">
                  <Menu.Item name="Login">Login</Menu.Item>
                </Link>
            </Menu.Menu>
        </Menu>
      </div>
    )}
  }
}