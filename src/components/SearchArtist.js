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
        event.preventDefault();
        let name = this.state.searchName
        this.props.actions.searchArtist(name)
        this.setState({
            searchName: ''
        })
    }
        
    render(){
        return(
        <div>
            <form onSubmit={(event) => this.handleSubmit(event)}>
            <p>
                <label>Find Artist</label>
                <input type="text" onChange={(event) => this.handleChange(event)}/>
            </p>
            <input type="submit" />
            </form>
        </div>
        );
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
  
  
