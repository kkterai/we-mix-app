import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Navigation from './components/nav/Navigation';

import * as actions from './actions/videoActions';

import 'semantic-ui-css/semantic.min.css';


class App extends React.Component {

  // componentDidUpdate(prevProps) {
  //   const { dispatch, redirectUrl } = this.props
  //   const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn
  //   const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn

  //   if (isLoggingIn) {
  //     dispatch(navigateTo(redirectUrl))
  //   } else if (isLoggingOut) {
  //     dispatch(navigateTo(redirectUrl))
  //   }
  // }

    render() {
      return (
        <div className="app">
          <Navigation />
        </div>
      );
    }
  }
 
  const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators( actions, dispatch )
    } 
  }

  const mapStateToProps = function(state) {
    return { 
      isLoggedIn: state.loggedIn,
      redirectUrl: state.redirectUrl
    }
  }
  
  export default App = connect(mapStateToProps, mapDispatchToProps)(App);
  
  