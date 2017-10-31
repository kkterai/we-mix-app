import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import * as actions from '../actions/videoActions';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';

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

        const redirect = "/results"

        event.preventDefault();
        let name = this.state.searchName
        this.props.actions.searchArtist(name, this.props.history, redirect)
        this.setState({
            searchName: ''
        })
    }

    render() {

        return(
            <div>
                <Form onSubmit={(event) => this.handleSubmit(event)}>
                    <Form.Field  control="text" onChange={(event) => this.handleChange(event)}>
                        <input placeholder='Search Artists' value={this.state.searchName}/>
                        <Button type='submit'>Submit</Button>
                    </Form.Field>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = function(state) {
    return { artistAlbums: state.searchArtist}
  }

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators( actions, dispatch )} 
}
  
export default SearchArtist = connect(mapStateToProps, mapDispatchToProps)(SearchArtist)
  
  
