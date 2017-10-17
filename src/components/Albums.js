//Renders artist albums
import React, { Component } from 'react';
import {Table, Column, Cell} from 'fixed-data-table-2';
import 'fixed-data-table-2/dist/fixed-data-table.css';


// Table data as a list of array.
const rows = [
    "first row",
    "second row",
    "third row", 
    "fourth row"
    // .... and more
  ];

  const MyCustomCell = ({ mySpecialProp }) =>

  <Cell>
    {mySpecialProp === "column2" ? "I'm column 2" : "I'm not column 2"}
  </Cell>;
  
export default class Albums extends Component {
  // Render your table
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
                <a href='#' >Video Link: {rows[rowIndex]}</a>
            </Cell>
            )}
            width={250}
        />
        </Table>
      )
    }
  }