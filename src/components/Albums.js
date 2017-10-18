//Renders artist albums
import React, { Component } from 'react';
import {Table, Column, Cell} from 'fixed-data-table-2';
import 'fixed-data-table-2/dist/fixed-data-table.css';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';

// Table data as a list of array.

const rows = (this.props) ? this.props.artistAlbums.album : [];

  const MyCustomCell = ({ mySpecialProp }) =>

  <Cell>
    {mySpecialProp === "column2" ? "I'm column 2" : "I'm not column 2"}
  </Cell>;
  
class Albums extends Component {
  render() {
      return (
        <Table
        rowHeight={50}
        rowsCount={rows.length}
        width={1500}
        height={2000}
        headerHeight={50}>
        <Column
            header={<Cell>Album Cover</Cell>}
            cell={<Cell>Column 1 static content</Cell>}
            width={250}
        />
        <Column
            header={<Cell>Album Name</Cell>}
            cell={<Cell>Column 1 static content</Cell>}
            width={250}
        />
        <Column
            header={<Cell>Release</Cell>}
            cell={<Cell>Column 2 static content</Cell>}
            width={250}
        />
        <Column
            header={<Cell>Videos</Cell>}
            cell={({rowIndex, ...props}) => (
            <Cell {...props}>
                console.log(rows[rowIndex].strDescriptionEN)
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
  
