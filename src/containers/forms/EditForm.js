import React from 'react';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux'; 

import { editVideo } from  '../../actions/videoActions';
import TextInput from '../../components/common/TextInput';


class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: {
        video_URL: "", 
        track_title: "",
        id: this.props.video.id
      }
    }
  }

  onChange = (event) => {
    let field = event.target.name;
    let video = this.state.video
    video[field] = event.target.value;
    return this.setState({ video: video });
  }

  onSubmit = (event) => {
    event.preventDefault();
    let o = {};
    for (let property in this.state.video) {
        if (this.state.video[property] !== "") {
            o[property] = this.state.video[property]
        }
    }
    this.props.editVideo(o)
    this.setState(
        {
            video_URL: "", 
            track_title: "",
            id: ""
        }
    )
    this.props.toggle();
  }

  render() {
    let { video_URL, track_title } = this.props.video;

    return (
      <div className="edit"> 
        <div className="edit-form">
          <form>
            <TextInput
              name="video_URL"
              label="YouTube URL"
              type="text"
              placeholder={video_URL}
              value={this.props.video_URL}
              onChange={this.onChange}/>

            <TextInput
              name="track_title"
              label="Track Title"
              type="text"
              placeholder={track_title}
              value={this.props.track_title}
              onChange={this.onChange}/>

            <input
              type="submit"
              className="btn btn-primary"
              onClick={this.onSubmit}/>
          </form>
        </div>
      </div>
    );
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      editVideo: editVideo
    }, dispatch);
  };
  
  export default EditForm = connect(null, mapDispatchToProps)(EditForm)