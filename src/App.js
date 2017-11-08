import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch, Route } from 'react-router-dom';

import Navigation from './components/nav/Navigation';
import Home from './components/Home';
import AboutPage from './components/about/AboutPage';
import SearchArtist from './containers/SearchArtist';
import Albums from './containers/Albums';
import AlbumVideos from './containers/AlbumVideos';
import LoginPage from './containers/LoginPage';
// import EnsureLoggedIn from './containers/EnsureLoggedIn'

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
            <Route path='/about' component={AboutPage} />
            <Route path='/login' component={LoginPage} />

            {/* <Route component={EnsureLoggedIn}> */}
              <Route path='/home' component={Home}/>
              <Route path='/find_artist' component={SearchArtist} />
              <Switch>
                <Route path='/results/videos' component={AlbumVideos} />
                <Route path='/results' component={Albums} />
              </Switch>
            {/* </Route> */}
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
  
  