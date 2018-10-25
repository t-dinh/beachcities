import React, { Component } from 'react';
import axios from 'axios';

class NewProjectForm extends Component {

    state = {
        name: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        estCost:'',
        estFinish: '',
        startDate:'',
        materials:'',
        comments: '',
    }

    onAddressChange = event => {
        this.setState({
            name: event.target.value
        })
    }

    onCityChange = event => {
        this.setState({
            city: event.target.value
        })
    }

    onZipChange = event => {
        this.setState({
            zip: event.target.value
        })
    }

    onAddressChange = event => {
        this.setState({
            address: event.target.value
        })
    }

    onEstCostChange = event => {
        this.setState({
            estCost: event.target.value
        })
    }
    
    onEstFinishChange = event => {
        this.setState({
            estFinish: event.target.value
        })
    }
    onStartDateChange = event => {
        this.setState({
            startDate: event.target.value
        })
    }

    onCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }

    formLogin = event => {
        event.preventDefault();

        this.props.addToItems(this.state);

        this.setState({
            username: ' ',
            password: ' '
        })
    }

    render() {
        return (
            <div className="login-page-background">
                <div className='container'>
                    
                    
                    
                    <div className="row title-row">
                        
                    </div>
                    <div className="row">
                        <div class="col-md-4 div-height"></div>
                        <div class="col-md-4 div-height" style ={{background: 'blue'}}>
                        <h2> Add New Project </h2>

                    {/* FORM CODE */}
                    <div className="form-group form-group-top">
                                <login onSubmit={this.formLogin}>
                                    <label>Address</label>
                                    <input type="text" value={this.state.address} onChange={this.onAddressChange} className="form-control" placeholder="" />
                                </login>
                            </div>
                            <div className="form-group">
                                    <login onSubmit={this.formLogin}>
                                    <label>City</label>
                                    <input type="text" value={this.state.city} onChange={this.onCityChange} className="form-control" placeholder="" />
                                </login>
                            </div>
                            <div className="form-group">
                            <login onSubmit={this.formLogin}>
                                    <label>Zip</label>
                                    <input type="text" value={this.state.zip} onChange={this.onZipChange} className="form-control" placeholder="" />
                                </login>
                            </div>
                            <div className="form-group">
                            <login onSubmit={this.formLogin}>
                                    <label>Est. Cost</label>
                                    <input type="text" value={this.state.estCost} onChange={this.onEstCostChange} className="form-control" placeholder="" />
                                </login>
                            </div>
                            <div className="form-group">
                            <login onSubmit={this.formLogin}>
                                    <label>Est. Finish Date</label>
                                    <input type="text" value={this.state.estFinish} onChange={this.onEstFinishChange} className="form-control" placeholder="" />
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
                                    <input type="text" value={this.state.startDate} onChange={this.onStartDateChange} className="form-control" placeholder="" />
                                </login>
                            </div>
                            <div className="form-group">
                                    <label>Comments</label>
                                    <input type="text" value={this.state.comments} onChange={this.onCommentsChange} className="form-control" placeholder="" />
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

                    
export default NewProjectForm;