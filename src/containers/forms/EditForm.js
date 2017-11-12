import React from 'react';
import TextInput from '../../components/common/TextInput';


export default class EditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        video_URL: "", 
        track_title: "",
        artist: "",
        id: ""
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event,video) {
    let { id, artist, video_URL, track_title } = this.props.video;
    var change = {
        id: id,
        artist: artist,
        video_URL: video_URL,
        track_title: track_title
    }

    let eventName = event.target.name
    let eventValue = event.target.value
    if (eventName === change[eventName] && eventValue !== change[eventValue]) {
        change[eventName] = eventValue
    }
    change[event.target.name] = event.target.value
    this.setState(change)
  }

  onSubmit(event) {
    debugger
    event.preventDefault();
    
    this.props.editVideo(this.state)
    this.setState(
        this.state = {
            video_URL: "", 
            track_title: "",
            artist: "",
            id: ""
        }
    )
  }

  render() {
    let { artist, video_URL, track_title } = this.props.video;

    return (
      <div className="edit"> 
        <div className="edit-form">
          <form>
            <TextInput
              name="video_URL"
              label="YouTube URL"
              type="text"
              placeholder={video_URL}
              value={this.state.video_URL}
              onChange={this.onChange}/>

            <TextInput
              name="track_title"
              label="Track Title"
              type="text"
              placeholder={track_title}
              value={this.state.track_title}
              onChange={this.onChange}/>

            <TextInput
              name="artist"
              label="Artist"
              type="text"
              placeholder={artist}
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
