import React, { useState } from 'react';
import TextInput from '../../components/common/TextInput';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';


const SignUpPage = (props) => {

  const [user, setUser] = useState(
        {
          username: "",
          email: "", 
          password: "" 
        }
      );

  const onChange = (event) => {
    const property = event.target.name;
    const newUser = {...user}
    newUser[property] = event.target.value;
    setUser(newUser);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    props.actions.signUpUser(user);
  }

    return (
      <div className="login-signup-search"> 
        <div className="login-signup-search-form">
          <form>
            <TextInput
              name="username"
              label="username"
              value={user.username}
              onChange={onChange}/>

            <TextInput
              name="email"
              label="email"
              value={user.email}
              onChange={onChange}/>

            <TextInput
              name="password"
              label="password"
              type="password"
              value={user.password}
              onChange={onChange}/>

            <input
              type="submit"
              className="btn btn-primary"
              onClick={onSubmit}/>
          </form>
        </div>
      </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}
export default connect(null, mapDispatchToProps)(SignUpPage);