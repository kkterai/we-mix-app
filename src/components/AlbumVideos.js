import React, { Component } from 'react';
import {Table, Column, Cell} from 'fixed-data-table-2';
import 'fixed-data-table-2/dist/fixed-data-table.css';
import { connect } from 'react-redux'; 
// import { bindActionCreators } from 'redux'; 
// import { searchAlbum } from  '../actions/videoActions';


class AlbumVideos extends Component {

render() {

  const rows = (this.props.artistAlbums.album) ? this.props.artistAlbums.album : [];
  
    return (
      <Table
      rowHeight={100}
      rowsCount={rows.length}
      width={1500}
      height={2000}
      headerHeight={50}>
      <Column // Track Name CAN I CALCULATE THE HEIGHT OF THE DESCRIPTION??
          header={<Cell>Track Name</Cell>}
          cell={({rowIndex, ...props}) => (
          <Cell {...props}>
            { rows[rowIndex].strTrack }
          </Cell>
          )}
          width={130}
      />
      <Column // Video
          header={<Cell>Video</Cell>}
          cell={({rowIndex, ...props}) => (
          <Cell {...props}>
              { rows[rowIndex].strMusicVid }
          </Cell>
          )}
          width={250}
      />
      <Column // Add Video - create button and action
          header={<Cell>Add Video</Cell>}
          cell={({rowIndex, ...props}) => (
          <Cell {...props}>
          </Cell>
          )}
          width={100}
      />
      </Table>
    )
  }
}

export default AlbumVideos = connect(null, null)(AlbumVideos)


// idAlbum : "2115995"
// idArtist : "112045"
// idTrack : "32794719"
// strDescriptionEN : ""I Will Follow" is a song by rock band U2. It is the opening track from their debut album, Boy, and it was released as the album's second single, in October 1980. Bono wrote the lyrics to "I Will Follow" in tribute to his mother who died when he was 14 years old.↵"I Will Follow" is the only song that U2 performs on every tour since they released their first album. The song was U2's first music video, directed by Meiert Avis in Dublin, Ireland. The song was issued five times, first in 1981 on a 7" vinyl in Ireland, the United Kingdom, Australia, and New Zealand, second on the same format in the United States and Canada, third in the Netherlands in 1982 with a track from 1981's October, in 1983 with a live version of the song, and finally in 2011 with a live version of the song recorded at the 2011 Glastonbury Festival."
// strMusicVid : "http://www.youtube.com/watch?v=g2BqLlVHlWA"
// strTrack : "I Will Follow"
// strTrackThumb : null