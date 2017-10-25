// Renders individual album with its nested </Videos>

import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux'; 
import { searchAlbum } from  '../actions/videoActions';

class Album extends Component {

    componentWillMount() {
        this.props.actions.searchAlbum()
    }
    
  
  render() {
  
    const rows = (this.props.artistAlbums.album) ? this.props.artistAlbums.album : [];

          
  }
}
  
  const mapStateToProps = function(state) {
    return { videos: state.userVideos}
  }

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      searchAlbum: searchAlbum
    }, dispatch);
  };
  
  export default Album = connect(null,mapDispatchToProps)(Album)
  
  