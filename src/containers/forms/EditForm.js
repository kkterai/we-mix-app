import React from 'react';
import TextInput from '../../components/common/TextInput';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';


class EditForm extends React.Component {
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
    let field = event.target.name;
    field = event.target.value;
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.actions.editVideo(this.state)
  }

  render() {
    return (
      <div className="edit"> 
        <div className="edit-form">
          <form>
            <TextInput
              name="video_URL"
              label="video_URL"
              type="text"
              value={this.state.video_URL}
              onChange={this.onChange}/>

            <TextInput
              name="track_title"
              label="track_title"
              type="text"
              value={this.state.track_title}
              onChange={this.onChange}/>

            <TextInput
              name="artist"
              label="artist"
              type="text"
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


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}
export default connect(null, mapDispatchToProps)(EditForm);