import React from 'react';
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

    return(
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          { video.track_title }
        </div>
        <div className="card-block">
          { video.artist }
        </div>
        <YouTube
          videoId={ this.props.youTubeId }
          opts={opts}
          onReady={this._onReady}
        />
        <button 
              {/* onClick={() => editVideo(video)} */}
              type="button" 
              className="btn btn-primary"
            >
            Edit
        </button>
        <button 
              {/* onClick={() => deleteVideo(video)} */}
              type="button" 
              className="btn btn-primary"
            >
            Delete
        </button>
      </div>
    </div>;
    );
  }
}

export default connect(null, null /* { editVideo, deleteVideo } */)(VideoCard);
