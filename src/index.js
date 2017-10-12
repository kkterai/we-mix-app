import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

 
class App extends React.Component {
  render() {
    return (
      <div className="app">
        We-Mix!!
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

