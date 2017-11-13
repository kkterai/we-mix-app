import React from 'react';
import TextInput from '../../components/common/TextInput';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sessionActions from '../../actions/sessionActions';
import "./Form.css";


class LogInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: 
        {
          email: "", 
          password: "" 
        }
      }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
  }

  onSubmit(event) {
    event.preventDefault();
    const redirect = '/home'
    const history = this.props.history
    this.props.actions.loginUser(this.state.credentials, history, redirect);
  }

  render() {
    return (
      <div className="login-signup-search"> 
        <div className="login-signup-search-form">
          <form>
            <TextInput
              name="email"
              label="email"
              value={this.state.credentials.email}
              onChange={this.onChange}/>

            <TextInput
              name="password"
              label="password"
              type="password"
              value={this.state.credentials.password}
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
    actions: bindActionCreators(sessionActions, dispatch)
  };
}
export default connect(null, mapDispatchToProps)(LogInPage);