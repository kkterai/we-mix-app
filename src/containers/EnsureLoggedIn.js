import React from 'react';
import { withRouter } from "react-router-dom";


class EnsureLoggedInContainer extends React.Component {

    componentDidMount() {
      if (!localStorage.token) {
        this.props.history.push("/login")
      } else {
        this.props.history.push("/home")
      }
    }
  
    render() {
      if (!!localStorage.token) {
        return <div>{ this.props.children }</div>
      } else {
        return null
      }
    }
  }

  export default withRouter(EnsureLoggedInContainer);
  
  