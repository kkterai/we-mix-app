import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import YouTube from 'react-youtube';

import * as actions from '../../actions/videoActions';
import ToggleableEditForm from './ToggleableEditForm'


class VideoCard extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      toggle: false,
      likeCounter: 0
    };
  }
    
  toggleEdit() { 
    const boolean = (this.state.toggle === false) ? true : false;
    this.setState({
      toggle: boolean
    })
  }

  handleOnClick = () => {
    this.setState({
      likeCounter: this.state.likeCounter + 1
    })
    const video = Object.assign({}, { like_count: this.state.likeCounter } );
    this.props.likeButton(video)
  }

  render() {

    const opts = {
      height: '300',
      width: '570',
      playerVars: { 
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
      
          <div>
            <ToggleableEditForm isOpen={ this.state.toggle } toggle={ this.toggleEdit.bind(this) } video={ video } editVideo={ this.props.editVideo }/>
          </div>
        </div>
      </div>
      );
  }


_onReady(event) {
    event.target.pauseVideo();
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default VideoCard = connect(null, mapDispatchToProps)(VideoCard);
