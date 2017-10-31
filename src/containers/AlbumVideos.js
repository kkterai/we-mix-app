import React, { Component } from 'react';
import {Table, Column, Cell} from 'fixed-data-table-2';
import { connect } from 'react-redux'; 
import { Player } from 'video-react';
import uuid from 'uuid';
import { bindActionCreators } from 'redux'; 
import { Form } from 'semantic-ui-react'

import { addVideo } from  '../actions/videoActions';

import 'fixed-data-table-2/dist/fixed-data-table.css';
import 'video-react/dist/video-react.css'; 

class AlbumVideos extends Component {
  constructor(props) {
    super();

    this.state = {
      video_URL: '',
      track_title: ''
    }
  }

  handleOnClick = (event) => {
    const video = Object.assign({}, { video_URL: event.target.value } , { track_title: event.target.name }, { uuid: uuid() });
    this.props.addVideo(video)
  } 

  render() {

    const rows = (this.props.tracks) ? this.props.tracks : [];
  
    return (

      <div> 
        <p>Don't see what you are looking for? Add a video here:</p>

        <Form>
          <Form.Group widths='equal'>
            <Form.Input label='Track Title' placeholder='Track Title' />
            <Form.Input label='Video URL' placeholder='Video URL' />
          </Form.Group>
          <Form.Button>Add to My Videos</Form.Button>
          <br></br>
        </Form>

        <Table
        rowHeight={250}
        rowsCount={rows.length}
        width={1500}
        height={2000}
        headerHeight={50}>
        <Column // Track Name 
            header={<Cell>Track Name</Cell>}
            cell={({rowIndex, ...props}) => (
            <Cell {...props}>
              { rows[rowIndex].strTrack }
            </Cell>
            )}
            width={250}
        />
        <Column // Video - React video player seems to only work w/ mp4 format; HTML video, iframe and object do not show a player at all
            header={<Cell>Video</Cell>}
            cell={({rowIndex, ...props}) => (
            <Cell {...props}>
              <Player>
                <source src={ rows[rowIndex].strMusicVid } />
              </Player>
            </Cell>
            )}
            width={400}
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