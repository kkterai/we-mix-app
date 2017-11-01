import React, { Component } from 'react';
import {Table, Column, Cell} from 'fixed-data-table-2';
import 'fixed-data-table-2/dist/fixed-data-table.css';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux'; 
import { searchAlbum } from  '../actions/videoActions';
import ReactImageFallback from "react-image-fallback";


class Albums extends Component {
  
  handleOnClick(event) {
    let albumId = event.target.alt
    let artistId = event.target.name
    let redirect = '/results/videos'
    this.props.searchAlbum(artistId, albumId, this.props.history, redirect)
  } 

render() {

  const rows = (this.props.artistAlbums.album) ? this.props.artistAlbums.album : [];
  
    return (
      <Table
      rowHeight={150}
      rowsCount={rows.length}
      width={1500}
      height={2000}
      headerHeight={50}>
      <Column // Album Cover; Description - find a way to cut length/"show more" to link to show page
          header={<Cell></Cell>}
          cell={({rowIndex, ...props}) => (
          <Cell {...props}>
            <button onClick={ (event) => this.handleOnClick(event) }> 
              <ReactImageFallback
                  src={ rows[rowIndex].strAlbumThumb }
                  name={ rows[rowIndex].idArtist }
                  fallbackImage="https://i.imgur.com/rIoUsXp.jpg"
                  initialImage="loader.gif"
                  alt={ rows[rowIndex].idAlbum } 
                  className="track-image"
                  width="100" 
                  height="100"  />
            </button>
          </Cell>
          )}
          width={130}
      />
      <Column // Album Name
          header={<Cell>Album Name</Cell>}
          cell={({rowIndex, ...props}) => (
          <Cell {...props}>
              { rows[rowIndex].strAlbum }
          </Cell>
          )}
          width={250}
      />
      <Column // Release
          header={<Cell>Description</Cell>}
          cell={({rowIndex, ...props}) => (
          <Cell {...props}>
              { rows[rowIndex].strDescriptionEN }
          </Cell>
          )}
          width={750}
      />
      </Table>
    )
  }
}

const mapStateToProps = (state) => {
  return { artistAlbums: state.artist.albums }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    searchAlbum: searchAlbum
  }, dispatch);
};

export default Albums = connect(mapStateToProps,mapDispatchToProps)(Albums)

