import React, {Component} from 'react';

class login extends Component {
        state = { 
            username: "",
            password: ""
         }

onUsernameChange= e => {
    this.setState({
        username: e.target.value
    })
}
onPasswordChange = e => {
    this.setState({
        password: e.target.value
    })
}

onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state)
    this.setState({
        username: "",
        password: ""
        
    })
}

    render() { 
        return ( 
            <div>
        <div className= "loginBox" >
        <label>Username</label>
            <input className="form-control" type="text" value={this.state.username} onChange= {this.onUsernameChange} />
        
        </div> 
        <label>Password</label>
        <input className="form-control" type="password" value={this.state.password} onChange = {this.onPasswordChange} />
        </div>
        );
    }
}
 
export default login;