import React from 'react';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserVideos } from './actions/videoActions';

export default class App extends React.Component {

    componentWillMount() {
        debugger
        this.props.actions.getUserVideos()
    }

    // componentDidMount - Music API


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
        </div>
      );
    }
  }
 
  const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators( getUserVideos, dispatch )
    } 
  }

  const mapStateToProps = function(state) {
    return { videos: state.videos}
  }
  
  export const WrapperApp =  connect(mapStateToProps, mapDispatchToProps)(App)
  
  