import React, { Component } from 'react';
import routes from './routes';

import React from 'react';

import 'semantic-ui-css/semantic.min.css';


export default class App extends React.Component {

    render() {
      return (
        <div className="routes">
        { routes }
        </div>
      );
    }
  }
 
  
  