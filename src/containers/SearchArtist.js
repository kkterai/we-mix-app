import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import * as actions from '../actions/videoActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table, Column, Cell} from 'fixed-data-table-2';

import 'fixed-data-table-2/dist/fixed-data-table.css';
// import 'fixed-data-table-2/examples/helpers/cells'


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
  

class SearchArtist extends Component {
    constructor(props) {
        super(props);
        this.state = {
          searchName: ''
        };
      }
    
    handleChange(event) {
        this.setState({
            searchName: event.target.value
        });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        let name = this.state.searchName
        this.props.actions.searchArtist(name)
        this.setState({
            searchName: ''
        })
    }
    
    componentWillReceiveProps(nextProps) {
        debugger
    }
    

    render() {

        return(
            <div>
            <Form onSubmit={(event) => this.handleSubmit(event)}>
                <Form.Field  control="text" onChange={(event) => this.handleChange(event)}>
                    {/* <label>Find Artist</label><br></br> */}
                    <input placeholder='Search Artists' value={this.state.searchName}/>
                    <Button type='submit'>Submit</Button>
                </Form.Field>
            </Form>
            <Table
                rowHeight={50}
                rowsCount={rows.length}
                width={1500}
                height={2000}
                headerHeight={50}>
                <Column
                    header={<Cell>Album Cover</Cell>}
                    {/* cell={albums.strAlbumThumb} */}
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
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators( actions, dispatch )
    } 
  }

const mapStateToProps = function(state) {
    return { artistVideos: state.searchArtist}
  }
  
export default SearchArtist = connect(mapStateToProps, mapDispatchToProps)(SearchArtist)
  
  
