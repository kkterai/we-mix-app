import React from 'react';
import TextInput from '../../components/common/TextInput';


export default class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        video_URL: "", 
        track_title: "",
        artist: ""
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    var change = {}
    change[event.target.name] = event.target.value
    change["id"] = this.props.videoId
    this.setState(change)
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.editVideo(this.state)
    this.setState(
        this.state = {
            video_URL: "", 
            track_title: "",
            artist: ""
        }
    )
  }

  render() {
    return (
      <div className="edit"> 
        <div className="edit-form">
          <form>
            <TextInput
              name="video_URL"
              label="YouTube URL"
              type="text"
              placeholder={this.state.video_URL}
              value={this.state.video_URL}
              onChange={this.onChange}/>

            <TextInput
              name="track_title"
              label="Track Title"
              type="text"
              placeholder={this.state.track_title}
              value={this.state.track_title}
              onChange={this.onChange}/>

            <TextInput
              name="artist"
              label="Artist"
              type="text"
              placeholder={this.state.artist}
              value={this.state.artist}
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
