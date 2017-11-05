import React, { Component } from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube'
// import { editVideo, deleteVideo } from '../actions/videoActions';

class VideoCard extends React.Component {

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    let videoKey = Object.getOwnPropertyNames(this.props.video).toString();
    let video = this.props.video[videoKey]

    let youTubeVideo;
    if ( video.youTubeId !== "" ) {
      youTubeVideo = 
        <YouTube
              videoId={ this.props.youTubeId }
              opts={opts}
              onReady={this._onReady}
            />
    } else {
      youTubeVideo = <h3>Edit this video to add a YouTube URL </h3>
    }


    return(
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          { video.track_title }
        </div>
        <div className="card-block">
          { video.artist }
        </div>
        { youTubeVideo }
        <button 
              /* onClick={() => editVideo(video)} */
              type="button" 
              className="btn btn-primary"
            >
            Edit
        </button>
        <button 
              /* onClick={() => deleteVideo(video)} */
              type="button" 
              className="btn btn-primary"
            >
            Delete
        </button>
      </div>
    </div>
    );
  }
}

export default VideoCard = connect(null, null /* { editVideo, deleteVideo } */)(VideoCard);
