// Ideally reusable for both album and users, renders individual Video card
// If viewing from album, users can add to their videos
// If viewing from their own videos, they can delete video

import React from 'react';
import { connect } from 'react-redux';
// import { addVideo } from '../actions/persist';

const VideoCard = ({ video /* , addVideo */ }) => 
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        { video.strTrack }
      </div>
      <div className="card-block">
        { video.strMusicVid }
      </div>
      {/* <div className="card-block">
        <img src={ video.strTrackThumb } width="100" height="100" />
      </div> */}
      <div className="float-right"> 
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button 
            {/* onClick={() => addVideo(video.id)} */}
            type="button" 
            className="btn btn-primary"
          >
            Add to collection
          </button>
        </div>
      </div>
    </div>
  </div>;


export default connect(null, null /* { addVideo } */)(VideoCard);
