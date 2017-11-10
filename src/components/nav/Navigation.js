import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class Navigation extends Component {

  handleLogout = event => {
    event.preventDefault();
    this.props.logout(this.props.history);
  }

  render() {
    return (
      <div>
        <Menu inverted tabular >
            <Link to="/home">
                <Menu.Item name="home">Home</Menu.Item>
            </Link>
            <Link to="/about">
                <Menu.Item name="about">About</Menu.Item>
            </Link>
            <Link to="/find_artist">
                <Menu.Item name="Search">Search</Menu.Item>
            </Link>
            <Menu.Menu position='right'>
              <Link onClick={this.handleLogout} to="/login">
                <Menu.Item name="Logout">Logout</Menu.Item>
              </Link>
            </Menu.Menu>
        </Menu>
{/* 
        <Segment>
          <img src="https://i.imgur.com/5wJxh8f.png" title="source: imgur.com"  />
        </Segment> */}
      </div>
    )
  }
}