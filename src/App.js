import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import Home from './components/Home';
import SearchArtist from './containers/SearchArtist';
import Albums from './containers/Albums';
import AlbumVideos from './components/AlbumVideos';
import Navigation from './components/nav/Navigation';

import * as actions from './actions/videoActions';

// import { Input, Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';


class App extends React.Component {

    componentWillMount() {
        this.props.actions.getUserVideos()
    }

    render() {

      return (
        <div className="app">
          <Navigation />
            <Route exact path='/' component={Home}/>
            <Route path='/find_artist' component={SearchArtist} />
            <Switch>
              <Route path='/search/results/videos' component={AlbumVideos} />
              <Route path='/search/results' component={Albums} />
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
  
  