import React, { Component } from "react";
import {Redirect} from "react-router-dom";

class Login extends Component {

  state = {
    username: 'jtorres',
    password: 'fj39g883',
    loggedin: false
  }


  // validateForm() {
  //   return this.state.email.length > 0 && this.state.password.length > 0;
  // }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    
    this.setState({
      username:"",
      password: "",
      loggedin: true
    });
  }


  render() { 
    if (this.state.loggedin === true )
    {
      return <Redirect
      to={{
        pathname: "/dataTable",
      }}
    />
    }
    return ( 

        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className={'form-group'}>
              <label name = "Username">Username</label>
              <input
                autoFocus
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <div className={'form-group'}>
              <label name = "password">Password</label>
              <input
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </div>
            <button
              // block
              // bsSize="large"
              // disabled={!this.validateForm()}
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
     );
  }
}
 
export default Login;