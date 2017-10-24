import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/videoActions';
import SearchArtist from './containers/SearchArtist'
import { Input, Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {

    componentWillMount() {
        this.props.actions.getUserVideos()
    }

    render() {
      return (
        <div className="app">
        {/* <Menu>
          <Menu.Item>
            <Input className='icon' icon='search' placeholder='Search...' />
          </Menu.Item>
      
          <Menu.Item position='right'>
            <Input action={{ type: 'submit', content: 'Go' }} placeholder='Navigate to...' />
          </Menu.Item>
        </Menu> */}
        <SearchArtist />
        </div>
      );
    }
  }
 
  const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators( actions, dispatch )
    } 
  }

  const mapStateToProps = function(state) {
    return { videos: state.userVideos}
  }
  
  export default App = connect(mapStateToProps, mapDispatchToProps)(App)
  
  