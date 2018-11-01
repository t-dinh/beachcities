import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import Slideshow from '../components/pages/slideshow'

class Login extends Component {

  state = {
    username: 'jtorres',
    password: 'fj39g883',
    
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
    this.props.login(this.state.username, this.state.password)
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
        pathname: "/employee",
      }}
    />
    }
    return ( 
        <div className="container" style={{backgroundColor: "#002560"}}>
        <div className="col-md-6" id="loginBox">
        <h1 style={{ marginBottom: 20}}>Admin Portal</h1>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <label name = "Username">Username</label>
              <input
                autoFocus
                type="text"
                className="form-control"
                value={this.state.username}
                onChange={this.handleChange}
              />
            
              <label name = "password">Password</label>
              <input
                className="form-control"
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </div>
            <button
              className="btn btn-success"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
     );
  }
}
 
export default Login;