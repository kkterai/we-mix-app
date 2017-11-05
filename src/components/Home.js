import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VideoCard from '../containers/VideoCard';

import * as actions from '../actions/videoActions';

class Home extends Component {

    componentWillMount() {
        this.props.actions.getUserVideos()
    }

    render() {
 
        let videoLibrary;
        if (this.props.videos.length !== undefined) {
            videoLibrary = this.props.videos.map( (video, index) => {
                return <VideoCard video={video} key={index} /> 
            })
        } else {
            videoLibrary = "Loading..."
        }

       
        return (
            <div>
                <h1>My Video Library</h1>
                { videoLibrary }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators( actions, dispatch )
    } 
  }

const mapStateToProps = function(state) {
    return { videos: state.user.videosById}
  }
  
export default Home = connect(mapStateToProps, mapDispatchToProps)(Home);
  