import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import YouTube from 'react-youtube';

import * as actions from '../../actions/videoActions';
import ToggleableEditForm from './ToggleableEditForm'

import './video.css'


class VideoCard extends Component {
  constructor(props) {
    super(props);

    let videoKey = Object.getOwnPropertyNames(this.props.video).toString();
    let videoProperties = this.props.video[videoKey]
 
    this.state = {
      toggle: false,
      likeCounter: videoProperties.like_count
    };
  }
    
  toggleEdit() { 
    const boolean = (this.state.toggle === false) ? true : false;
    this.setState({
      toggle: boolean
    })
  }

  handleOnClick = () => {
    let videoKey = Object.getOwnPropertyNames(this.props.video).toString();
    let videoProperties = this.props.video[videoKey]

    const video = Object.assign({}, { like_count: this.state.likeCounter + 1 } , { id: videoProperties.id } );
    this.setState({
      likeCounter: this.state.likeCounter + 1
    })
    this.props.likeButton(video)
  }

  // callApi = () => {
  //   console.log('a')
  //   fetch('/api/v1/videos', {
  //     'headers': {
  //       'Content-Type': 'application/json',
  //       'Authorization': `${localStorage.token}`,
  //     },
  //     method: 'GET'
  //     })
  //   .then(response => {
  //     console.log('b')
  //     return response.json()})
  //   .then(userVideos => console.log('c', userVideos));
  //   console.log('d')
  // }

  render() {

    const opts = {
      height: '300',
      width: '570',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    let videoKey = Object.getOwnPropertyNames(this.props.video).toString();
    let video = this.props.video[videoKey]

    let youTubeVideo;
    if ( video.youTubeId !== "" ) {
      youTubeVideo = 
        <YouTube
              videoId={ video.youTubeId }
              opts={ opts }
              onReady={ this._onReady }
            />
    } else {
      youTubeVideo = <h3>Edit this video to add a YouTube URL </h3>
    }

    return(
      <div className="video-wrapper">
        <div className="video-card">
          <div className="track-title">
            <h2>{ video.track_title }</h2>
          </div>
          <div className="track-artist">
            <h2>{ video.artist }</h2>
          </div>
          { youTubeVideo }
          <button 
                onClick={() => this.toggleEdit()}
                type="button" 
                className="btn btn-primary"
              >
              Edit
          </button>
          <button 
                onClick={() => this.props.deleteVideo(video.id)}
                type="button" 
                className="btn btn-primary"
              >
              Delete
          </button>
          <button 
                onClick={() => this.handleOnClick()}
                type="button" 
                className="btn btn-primary"
              >
              Like
          </button>
          { this.state.likeCounter }
          {/* <button 
                onClick={this.callApi}
                type="button" 
                className="btn btn-primary"
              >
              Call Api
          </button> */}
          <div>
            <ToggleableEditForm isOpen={ this.state.toggle } toggle={ this.toggleEdit.bind(this) } video={ video } editVideo={ this.props.editVideo }/>
          </div>
        </div>
      </div>
      );
  }


_onReady(event) {
  // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default VideoCard = connect(null, mapDispatchToProps)(VideoCard);
