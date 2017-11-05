import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/videoActions';

class Home extends Component {

    render() {
        return (
            <div>
                <h1>My Video Library</h1>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators( actions, dispatch )
    } 
  }

  const mapStateToProps = function(state) {
    return { videos: state.userVideos}
  }
  
  export default Home = connect(mapStateToProps, mapDispatchToProps)(Home);
  