import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import EnsureLoggedIn from '../../containers/EnsureLoggedIn';

export default class Navigation extends Component {

  handleLogout = event => {
    event.preventDefault();
    this.props.logout(this.props.history);
  }

  render() {
    return (
      <div>
        <Menu inverted tabular >
            <Link to="/WeMix">
                <Menu.Item name="home">We/Mix</Menu.Item>
            </Link>
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
    )
  }
}