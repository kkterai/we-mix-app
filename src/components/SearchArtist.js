import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

class SearchArtist extends Component {
    constructor() {
        super();
        this.state = {
          searchName: ''
        };
      }
    
    handleChange() {
        this.setState({
            searchName: event.target.value
        });
    }
    
    handleSubmit(data) {
        event.preventDefault();
        this.props.store.dispatch({
          type: 'SEARCH_ARTIST',
          searchName: this.state,
        });
    }
        
    render(){
        return(
        <div>
            <form>
            <p>
                <label>Find Artist</label>
                <input type="text" onChange={(event) => this.handleChange(event)}/>
            </p>
            <input type="submit" />
            </form>
            {this.state.text}
        </div>
        );
    }
}

export default SearchArtist;
