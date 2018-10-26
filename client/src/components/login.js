import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Login extends Component {
  state = {
    username: '',
    password: '',
    submitted: false
  };

  handleChange = e =>{
    const { name, value } = e.target;
    this.setState({ [name]: value });

  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ 
      submitted: true, 
      username: '',
      password: ''
    });

    console.log(this.state);
  }



  render() {

    const {username, password } = this.state;

    return (


      <div className="col-md-6 col-md-offset-3">
        <h2>Login</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <div className={'form-group'}>
            <label name="username">Username</label>
            <input type='username' className="form-control" name="username" value={username} onChange = {this.handleChange} />
          </div>
          <div className={'form-group'}>
            <label name="password">Password</label>
            <input type='password' className="form-control" name="password" value={password} onChange ={this.handleChange} />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
