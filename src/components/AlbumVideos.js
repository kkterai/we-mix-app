import React, { Component } from 'react';
import {Table, Column, Cell} from 'fixed-data-table-2';
import { connect } from 'react-redux'; 
import { Player } from 'video-react';
import uuid from 'uuid';
import { bindActionCreators } from 'redux'; 

import { addVideo } from  '../actions/videoActions';

import 'fixed-data-table-2/dist/fixed-data-table.css';
import 'video-react/dist/video-react.css'; 

class AlbumVideos extends Component {

  handleOnClick() {
    const video = Object.assign({}, { video_URL: this.props.strMusicVid } , { track_title: this.props.strTrack }, { id: uuid() });
    this.props.addVideo(video)
  } 

  render() {

    const rows = (this.props.tracks) ? this.props.tracks : [];
  
    return (

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
      <Column // Video - React video player seems to only work w/ mp4 format; HTML iframe and object do not show a player at all
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
            <button onClick={ () => this.handleOnClick() }> Add to My Videos
            </button>
          </Cell>
          )}
          width={150}
      />
      </Table>
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


// idAlbum : "2115995"
// idArtist : "112045"
// idTrack : "32794719"
// strDescriptionEN : ""I Will Follow" is a song by rock band U2. It is the opening track from their debut album, Boy, and it was released as the album's second single, in October 1980. Bono wrote the lyrics to "I Will Follow" in tribute to his mother who died when he was 14 years old.↵"I Will Follow" is the only song that U2 performs on every tour since they released their first album. The song was U2's first music video, directed by Meiert Avis in Dublin, Ireland. The song was issued five times, first in 1981 on a 7" vinyl in Ireland, the United Kingdom, Australia, and New Zealand, second on the same format in the United States and Canada, third in the Netherlands in 1982 with a track from 1981's October, in 1983 with a live version of the song, and finally in 2011 with a live version of the song recorded at the 2011 Glastonbury Festival."
// strMusicVid : "http://www.youtube.com/watch?v=g2BqLlVHlWA"
// strTrack : "I Will Follow"
// strTrackThumb : null