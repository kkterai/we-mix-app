import React, { Component } from 'react';
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
        let userVideos = fetch('http://localhost:3000/api/v1/videos').
        then(res => res.json()).
        then(json => console.log(json))
        this.setState({ 
            videos: userVideos
        });
    }

    // componentDidMount - Music API


    render() {
        debugger
      return (
        <div className="app">
          We-Mix!!!
        </div>
      );
    }
  }
  