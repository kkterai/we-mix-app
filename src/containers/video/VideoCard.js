import React, { Component } from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube'

import { editVideo, deleteVideo } from '../../actions/videoActions';
import ToggleableEditForm from './ToggleableEditForm'

import './video.css'


class VideoCard extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      toggle: false
    };

    this.toggleEdit = this.toggleEdit.bind(this);
  }

  //need a lifecycle method to load videos after delete/add videos
    
  toggleEdit() { 
    const boolean = (this.state.toggle === false) ? true : false;
    this.setState({
      toggle: boolean
    })
  }

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
              opts={opts}
              onReady={this._onReady}
            />
    } else {
      youTubeVideo = <h3>Edit this video to add a YouTube URL </h3>
    }

    return(
      <div className="video-wrapper">
        <div>
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
                onClick={() => deleteVideo(video)}
                type="button" 
                className="btn btn-primary"
              >
              Delete
          </button>
          <div>
            <ToggleableEditForm isOpen={ this.state.toggle }/>
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

export default VideoCard = connect(null, null /* { editVideo, deleteVideo } */)(VideoCard);
