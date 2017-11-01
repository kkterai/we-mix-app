import React, { Component } from 'react';
import { Table, Column, Cell } from 'fixed-data-table-2';
import { connect } from 'react-redux'; 
import uuid from 'uuid';
import { bindActionCreators } from 'redux'; 
import ReactImageFallback from "react-image-fallback";

import { addVideo } from  '../actions/videoActions';

import 'fixed-data-table-2/dist/fixed-data-table.css';
import 'video-react/dist/video-react.css'; 

// Your Rails API should handle the data persistence. You should be using fetch() 
// within your actions to GET and POST data from your API - do not use jQuery methods.

class AlbumVideos extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      video_URL: '',
      track_title: ''
    }
  }

  handleOnChange(event) {
    debugger
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    const video = Object.assign({}, this.state, { id: uuid() });
    this.props.addVideo(video);
    this.setState({
      video_URL: '',
      track_title: ''
    });
  }

  handleOnClick(event) {
    const video = Object.assign({}, { video_URL: event.target.value } , { track_title: event.target.name }, { uuid: uuid() });
    this.props.addVideo(video)
  } 

  render() {

    const rows = (this.props.tracks) ? this.props.tracks : [];
  
    return (

      <div> 
        <br></br>
        <h3>Don't see what you are looking for? Add a video here:</h3>

        <form onSubmit={this.handleOnSubmit} >
            <input type="text" name="track_title" value={this.state.track_title} placeholder='Track Title' onChange={this.handleOnChange} />
            <input type="text" name="video_URL" value={this.state.video_URL} placeholder='Video URL' onChange={this.handleOnChange} />
          <button>Add to My Videos</button>
        </form>

        <br></br>

        <Table
        rowHeight={100}
        rowsCount={rows.length}
        width={1500}
        height={2000}
        headerHeight={50}>
        <Column // Video - React video player seems to only work w/ mp4 format; HTML video, iframe and object do not show a player at all
            header={<Cell></Cell>}
            cell={({rowIndex, ...props}) => (
            <Cell {...props}>
              <ReactImageFallback
                src={ rows[rowIndex].strTrackThumb }
                fallbackImage="https://i.imgur.com/rIoUsXp.jpg"
                initialImage="loader.gif"
                alt={ rows[rowIndex].strMusicVid }
                className="track-image"
                width="100" 
                height="100"  />
            </Cell>
            )}
            width={150}
        />
        <Column // Track Name 
            header={<Cell>Track Name</Cell>}
            cell={({rowIndex, ...props}) => (
            <Cell {...props}>
              { rows[rowIndex].strTrack }
            </Cell>
            )}
            width={250}
        />
        <Column // Add Video - create button and action
            header={<Cell>Add Video</Cell>}
            cell={({rowIndex, ...props}) => (
            <Cell {...props}>
              <button name={ rows[rowIndex].strTrack } value={ rows[rowIndex].strMusicVid } onClick={ (event) => this.handleOnClick(event) }> Add to My Videos
              </button>
            </Cell>
            )}
            width={150}
        />
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { tracks: state.album.tracks }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addVideo: addVideo
  }, dispatch);
};

export default AlbumVideos = connect(mapStateToProps, mapDispatchToProps)(AlbumVideos)