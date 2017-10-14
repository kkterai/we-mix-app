import React from 'react';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/videoActions';
import SearchArtist from './components/SearchArtist'

class App extends React.Component {

    componentWillMount() {
        this.props.actions.getUserVideos()
    }

    render() {
      return (
        <div className="app">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">We-Mix!!</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <SearchArtist />
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
  
  export default App = connect(mapStateToProps, mapDispatchToProps)(App)
  
  