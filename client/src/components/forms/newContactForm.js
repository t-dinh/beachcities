import React, { Component } from 'react';
// import axios from 'axios';

class NewContactForm extends Component {

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

    onClick = e => {
        e.preventDefault();
        this.props.addNewContact(this.state);
        this.setState({
            name: "",
            phone: '',
            email: '',
            address: '',
            city: '',
            zip: '',
            status: '',
            comments: ''
        });
        // this.grabEmployee();
        console.log("end of onClick");
    }

    render() {
        return (
            <div id="addContactModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Add Contact</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>

                    {/* FORM CODE */}
                    <div className="form-group form-group-top">
                                
                                    <label>Contact Name</label>
                                    <input type="text" value={this.state.name} onChange={this.onNameChange} className="form-control" placeholder="" />
                                
                            </div>
                            <div className="form-group">
                                    
                                    <label>Phone</label>
                                    <input type="text" value={this.state.phone} onChange={this.onPhoneChange} className="form-control" placeholder="" />
                                
                            </div>
                            <div className="form-group">
                            
                                    <label>Email</label>
                                    <input type="text" value={this.state.email} onChange={this.onEmailChange} className="form-control" placeholder="" />
                                
                            </div>
                            <div className="form-group">
                            
                                    <label>Address</label>
                                    <input type="text" value={this.state.address} onChange={this.onAddressChange} className="form-control" placeholder="" />
                                
                            </div>
                            <div className="form-group">
                            
                                    <label>City</label>
                                    <input type="text" value={this.state.city} onChange={this.onCityChange} className="form-control" placeholder="" />
                                
                            </div>
                            <div className="form-group">
                            
                                    <label>Zip</label>
                                    <input type="text" value={this.state.zipCode} onChange={this.onZipChange} className="form-control" placeholder="" />
                                
                            </div>
                            <div className="form-group">
                            
                                    <label>Status</label>
                                    <input type="text" value={this.state.status} onChange={this.onStatusChange} className="form-control" placeholder="" />
                                
                            </div>
                            <div className="form-group">
                                    <label>Comments</label>
                                    <input type="text" value={this.state.comments} onChange={this.onCommentsChange} className="form-control" placeholder="" />
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-success" value="Add" onClick={this.onClick} data-dismiss="modal" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>



        );

    }

}
        

                    
export default NewContactForm;