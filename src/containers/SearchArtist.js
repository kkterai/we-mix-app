import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import * as actions from '../actions/videoActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Albums from '../components/Albums';

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
            <Albums />
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
  
  
