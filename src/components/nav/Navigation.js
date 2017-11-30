import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { loggedIn, logOut } from '../../utils/authenticator'

// try turning the logOut function into an action

class Navigation extends Component {

  render() {
    if (loggedIn()) {
      return (
        <div>
          <Menu inverted tabular >
            <Menu.Item
              name='Home'
              onClick={() => this.props.history.push('/home')} />
            <Menu.Item
              name='Search'
              onClick={() => this.props.history.push('/find_artist')} />
                  
            <Menu.Menu position='right' >
             
                <Menu.Item name="Logout" onClick={() => logOut(this.props.history)}>Logout</Menu.Item>
           
            </Menu.Menu>
          </Menu>
        </div>
        )
    } else {
    return (
      <div>
        <Menu inverted tabular >
            <Menu.Item
              name='About'
              onClick={() => this.props.history.push('/about')} />
          
            <Menu.Menu position='right'>
              <Menu.Item
                name='Signup'
                onClick={() => this.props.history.push('/signup')} />
              <Menu.Item
                name='Login'
                onClick={() => this.props.history.push('/login')} />
            </Menu.Menu>
        </Menu>
      </div>
    )}
  }
}

export default withRouter(Navigation)