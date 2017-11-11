import React from 'react';
import { loggedIn } from '../utils/authenticator';
import { withRouter } from "react-router-dom";

class EnsureLoggedInContainer extends React.Component {
    componentDidMount() {
      if (!loggedIn() ) {
        this.props.history.push("/login")
      }
    }
  
    render() {
      if (loggedIn()) {
        return this.props.children
      } else {
        return null
      }
    }
  }

  export default withRouter(EnsureLoggedInContainer);
  
  