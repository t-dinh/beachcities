import React, { Component } from 'react';
import axios from 'axios';

class NewBidForm extends Component {

    state = {
        name: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        status: '',
        comments: ''
    }

    onNameChange = event => {
        this.setState({
            name: event.target.value
        })
    }

    onPhoneChange = event => {
        this.setState({
            phone: event.target.value
        })
    }

    onEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    }

    onAddressChange = event => {
        this.setState({
            address: event.target.value
        })
    }

    onStatusChange = event => {
        this.setState({
            status: event.target.value
        })
    }

    onCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }

    // formLogin = event => {
    //     event.preventDefault();

    //     this.props.addToItems(this.state);

    //     this.setState({
    //         username: ' ',
    //         password: ' '
    //     })
    // }

    render() {
        return (
            <div className="login-page-background">
                <div className='container'>
                    
                    
                    
                    <div className="row title-row">
                        
                    </div>
                    <div className="row">
                        <div class="col-md-4 div-height"></div>
                        <div class="col-md-4 div-height" style ={{background: 'blue'}}>
                        <h2> Add New Bid </h2>

                    {/* FORM CODE */}
                    <div className="form-group form-group-top">
                                <login onSubmit={this.formLogin}>
                                    <label>Contact</label>
                                    <input type="text" value={this.state.name} onChange={this.onUsernameChange} className="form-control" placeholder="" />
                                </login>
                            </div>
                            <div className="form-group">
                                    <login onSubmit={this.formLogin}>
                                    <label>Consult Date</label>
                                    <input type="text" value={this.state.phone} onChange={this.onUsernameChange} className="form-control" placeholder="" />
                                </login>
                            </div>
                            <div className="form-group">
                            <login onSubmit={this.formLogin}>
                                    <label>Address</label>
                                    <input type="text" value={this.state.address} onChange={this.onUsernameChange} className="form-control" placeholder="" />
                                </login>
                            </div>
                            <div className="form-group">
                                    <login onSubmit={this.formLogin}>
                                    <label>City</label>
                                    <input type="text" value={this.state.phone} onChange={this.onUsernameChange} className="form-control" placeholder="" />
                                </login>
                            </div>
                            <div className="form-group">
                            <login onSubmit={this.formLogin}>
                                    <label>Zip</label>
                                    <input type="text" value={this.state.email} onChange={this.onUsernameChange} className="form-control" placeholder="" />
                                </login>
                            </div>
                            <div className="form-group">
                            <login onSubmit={this.formLogin}>
                                    <label>Est. Cost</label>
                                    <input type="text" value={this.state.zipCode} onChange={this.onUsernameChange} className="form-control" placeholder="" />
                                </login>
                            </div>
                            <div className="form-group">
                            <login onSubmit={this.formLogin}>
                                    <label>Est. Finish Time</label>
                                    <input type="text" value={this.state.status} onChange={this.onUsernameChange} className="form-control" placeholder="" />
                                </login>
                            </div>
                            <div className="form-group">
                            <login onSubmit={this.formLogin}>
                                    <label>Start Date</label>
                                    <input type="text" value={this.state.status} onChange={this.onUsernameChange} className="form-control" placeholder="" />
                                </login>
                            </div>
                            <div className="form-group">
                            <login onSubmit={this.formLogin}>
                                    <label>Materials</label>
                                    <input type="text" value={this.state.status} onChange={this.onUsernameChange} className="form-control" placeholder="" />
                                </login>
                            </div>
                            <div className="form-group">
                                    <label>Comments</label>
                                    <input type="text" value={this.state.comments} onChange={this.onPasswordChange} className="form-control" placeholder="" />
                                    <button className="btn btn-primary swap" float-right onClick={() => { /*this.props.changePage("logInPage")*/ }}> Submit </button>
                            </div>
                            </div>
                            <div class="col-md-4 div-height"></div>
                     {/* END FORM CODE */}


                        </div>
                    
                    
                    
                    </div >
                </div>
                );
            }
        
        }
        

                    
export default NewBidForm;