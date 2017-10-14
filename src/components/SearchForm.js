import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

class SearchArtist extends Component {
    constructor() {
        super();
        this.state = {
          text: '',
        };
      }
    
    handleChange() {
        this.setState({
            text: event.target.value
        });
    }
    
    handleSubmit(data) {
        event.preventDefault();
        this.props.store.dispatch({
          type: 'SEARCH_ARTIST',
          artist: this.state,
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
