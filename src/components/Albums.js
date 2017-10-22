//Renders artist albums
import React, { Component } from 'react';
import {Table, Column, Cell} from 'fixed-data-table-2';
import 'fixed-data-table-2/dist/fixed-data-table.css';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';

// Table data as a list of array.



  const MyCustomCell = ({ mySpecialProp }) =>

  <Cell>
    {mySpecialProp === "column2" ? "I'm column 2" : "I'm not column 2"}
  </Cell>;
  
class Albums extends Component {

  
  render() {

    const rows = (this.props.artistAlbums.album) ? this.props.artistAlbums.album : [];
    
      return (
        <Table
        rowHeight={100}
        rowsCount={rows.length}
        width={1500}
        height={2000}
        headerHeight={50}>
        <Column // Album Cover
            header={<Cell>Album Cover</Cell>}
            cell={({rowIndex, ...props}) => (
            <Cell {...props}>
                <img src={ rows[rowIndex].strAlbumThumb } width="100" height="100" alt={ rows[rowIndex].strAlbum } />
            </Cell>
            )}
            width={250}
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
            width={250}
        />
      
        <Column // Link to album videos
            header={<Cell>Videos</Cell>}
            cell={({rowIndex, ...props}) => (
            <Cell {...props}>
                { rows[rowIndex].strDescriptionEN }
            </Cell>
            )}
            width={250}
        />
        </Table>
      )
    }
  }


  const mapStateToProps = function(state) {
    return { artistAlbums: state.artist.albums}
  }

  export default Albums = connect(mapStateToProps,null)(Albums)
  
