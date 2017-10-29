import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import Home from './components/Home'
import SearchArtist from './containers/SearchArtist'
import Albums from './components/Albums';

import * as actions from './actions/videoActions';

// import { Input, Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';


class App extends React.Component {

    componentWillMount() {
        this.props.actions.getUserVideos()
    }

    render() {
      // need to incorporate nav bar, get rid of search when album found ("search" tab)
      return (
        <div className="app">
            <Route exact path='/' component={Home}/>
            <Route path='/search' component={SearchArtist} />
            <Switch>
              <Route path='/search/albums' component={Albums} /> 
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
  
  