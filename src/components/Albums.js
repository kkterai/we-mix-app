//Renders artist albums
import React, { Component } from 'react';
import {Table, Column, Cell} from 'fixed-data-table-2';
import 'fixed-data-table-2/dist/fixed-data-table.css';
import { connect } from 'react-redux'; 

// Table data as a list of array.

// function handleClick(e) {
//   e.preventDefault();
//   console.log('The link was clicked.');
// }

class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchAlbum: ''
    };
  }

  handleClick(e) {
    e.preventDefault();
    debugger
    this.setState({
        searchAlbum: e.target.value
    });
}

// handleSubmit(event) {
//     event.preventDefault();
//     let name = this.state.searchName
//     this.props.actions.searchArtist(name)
//     this.setState({
//         searchName: ''
//     })
// }

  render() {

    const rows = (this.props.artistAlbums.album) ? this.props.artistAlbums.album : [];
    
      return (
        <Table
        rowHeight={100}
        rowsCount={rows.length}
        width={1500}
        height={2000}
        headerHeight={50}>
        <Column // Album Cover - attribute to grab album ->idAlbum
            header={<Cell></Cell>}
            cell={({rowIndex, ...props}) => (
            <Cell {...props}>
              <a href="#" onClick={ this.handleClick }> 
                <img src={ rows[rowIndex].strAlbumThumb } width="100" height="100" alt={ rows[rowIndex].strAlbum } />
              </a>
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
      
        {/* <Column // Link to album videos
            header={<Cell>Videos</Cell>}
            cell={({rowIndex, ...props}) => (
            <Cell {...props}>
                { rows[rowIndex].strDescriptionEN }
            </Cell>
            )}
            width={250}
        /> */}

        </Table>
      )
    }
  }

  const mapStateToProps = function(state) {
    return { artistAlbums: state.artist.albums}
  }

  export default Albums = connect(mapStateToProps,null)(Albums)
  
