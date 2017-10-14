import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as actions from './actions/videoActions';
import 'whatwg-fetch';

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            videos: []
        }

    }

    componentWillMount() {
        this.getUserVideos();
    }

    getUserVideos = () => {
        let userVideos = fetch('http://localhost:3000/api/v1/videos').then(function(response) {
            return response.json()
          }).then(function(json) {
            console.log('parsed json', json)
          }).catch(function(ex) {
            console.log('parsing failed', ex)
          })
          debugger
        this.setState({ 
            videos: userVideos
        });
    }

    // componentDidMount - Music API


    render() {
      return (
        <div className="app">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">We-Mix!!</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        </div>
      );
    }
  }
  