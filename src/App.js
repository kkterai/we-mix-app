import React from 'react';
import routes from './routes'

import 'semantic-ui-css/semantic.min.css';

export default class App extends React.Component {

    render() {
      return (
        <div className="app">
            { routes }
        </div>
      );
    }
  }
 
  
  