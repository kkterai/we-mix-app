import React from 'react';

import 'semantic-ui-css/semantic.min.css';


export default class App extends React.Component {

    render() {
      return (
        <div className="app">
          <h1 className="welcome"> Welcome! </h1>
          <div className="start-here" >
            <div><button >Signup</button><button >Login</button></div>
          </div>
        </div>
      );
    }
  }
 
  
  