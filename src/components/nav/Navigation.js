import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <Menu inverted tabular >
            <Link to="/">
                <Menu.Item name="home">Home</Menu.Item>
            </Link>
            <Link to="/find_artist">
                <Menu.Item name="Search">Search</Menu.Item>
            </Link>
            <Menu.Menu position='right'>
                <Menu.Item name='logout'  />
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