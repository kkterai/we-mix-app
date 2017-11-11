import React from 'react';
import TextInput from '../components/common/TextInput';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../actions/userActions';


class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 
        {
          username: "",
          email: "", 
          password: "" 
        }
      }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    return this.setState({user: user});
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.actions.signUpUser(this.state.user);
  }

  render() {
    return (
      <div className="signup"> 
        <div className="signup-form">
          <form>
            <TextInput
              name="username"
              label="username"
              value={this.state.user.username}
              onChange={this.onChange}/>

            <TextInput
              name="email"
              label="email"
              value={this.state.user.email}
              onChange={this.onChange}/>

            <TextInput
              name="password"
              label="password"
              type="password"
              value={this.state.user.password}
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
export default connect(null, mapDispatchToProps)(SignUpPage);