import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import Home from './components/Home';
import AboutPage from './components/about/AboutPage';
import SearchArtist from './containers/SearchArtist';
import Albums from './containers/Albums';
import AlbumVideos from './containers/AlbumVideos';
import Navigation from './components/nav/Navigation';
import LoginPage from './containers/LoginPage';

import * as actions from './actions/videoActions';

import 'semantic-ui-css/semantic.min.css';


class App extends React.Component {

    // componentDidMount() {
    //     this.props.actions.getUserVideos()
    // }

    render() {

      return (
        <div className="app">
          <Navigation />
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={AboutPage} />
            <Route path='/find_artist' component={SearchArtist} />
            <Route path='/login' component={LoginPage} />
            <Switch>
              <Route path='/results/videos' component={AlbumVideos} />
              <Route path='/results' component={Albums} />
            </Switch>
        </div>
      );
    }
  }
 
  const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators( actions, dispatch )
    } 
  }

  const mapStateToProps = function(state) {
    return { videos: state.userVideos}
  }
  
  export default App = withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
  
  