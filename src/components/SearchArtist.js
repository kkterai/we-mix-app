import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

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
        this.props.store.dispatch({
          type: 'SEARCH_ARTIST',
          searchName: this.state,
        });
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

export default SearchArtist;
