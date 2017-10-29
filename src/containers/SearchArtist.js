import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import * as actions from '../actions/videoActions';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';
import Albums from '../components/Albums'
import { Switch, Route } from 'react-router-dom'

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
        const path=`/${this.state.searchName}`

        return(
            <div>
                <Form onSubmit={(event) => this.handleSubmit(event)}>
                    <Form.Field  control="text" onChange={(event) => this.handleChange(event)}>
                        <input placeholder='Search Artists' value={this.state.searchName}/>
                        <Button type='submit'>Submit</Button>
                    </Form.Field>
                </Form>
                <Switch>
                    <Route path={ path } component={ Albums }/>
                </Switch>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators( actions, dispatch )
    } 
  }

const mapStateToProps = function(state) {
    return { artistAlbums: state.searchArtist}
  }
  
export default SearchArtist = connect(mapStateToProps, mapDispatchToProps)(SearchArtist)
  
  
