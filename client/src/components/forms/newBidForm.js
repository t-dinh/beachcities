import React, { Component } from 'react';
import axios from 'axios';

class NewBidForm extends Component {

    state = {
        consultDate: '',
        lastContact: '',
        address: '',
        city: '',
        zip: '',
        estCost: '',
        estFinish: '',
        status: '',
        comments: ''
    }

    onConsultDateChange = event => {
        this.setState({
            consultDate: event.target.value
        })
    }

    onLastContactChange = event => {
        this.setState({
            lastContact: event.target.value
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


    onClick = event => {
        event.preventDefault();

        this.setState(
            this.consultDate= '',
            this.lastContact= '',
            this.address= '',
            this.city= '',
            this.zip= '',
            this.estCost= '',
            this.estFinish= '',
            this.status= '',
            this.comments= ''
        )
    }
    // formLogin = event => {
    //     event.preventDefault();

    //     this.props.addToItems(this.state);

    //     this.setState({
    //         username: ' ',
    //         password: ' '
    //     })
    // }

  //  l
    render() {
        return (
            <div id="addBidModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Add New Bid</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                    {/* FORM CODE */}
                    <div className="form-group form-group-top">
                                <login onSubmit={this.formLogin}>
                                    <label>Contact</label>
                                    <input type="text" value={this.state.name} onChange={this.onNameChange} className="form-control" placeholder="" />
                                </login>
                            </div>
                            <div className="form-group">
                                    <login onSubmit={this.formLogin}>
                                    <label>Consult Date</label>
                                    <input type="text" value={this.state.phone} onChange={this.onPhoneChange} className="form-control" placeholder="" />
                                </login>
                            </div>
                            <div className="form-group">
                            <login onSubmit={this.formLogin}>
                                    <label>Address</label>
                                    <input type="text" value={this.state.address} onChange={this.onAddressChange} className="form-control" placeholder="" />
                                </login>
                            </div>
                            <div className="form-group">
                                    <login onSubmit={this.formLogin}>
                                    <label>City</label>
                                    <input type="text" value={this.state.phone} onChange={this.onCityChange} className="form-control" placeholder="" />
                                </login>
                            </div>
                            <div className="form-group">
                            <login onSubmit={this.formLogin}>
                                    <label>Zip</label>
                                    <input type="text" value={this.state.email} onChange={this.onZipChange} className="form-control" placeholder="" />
                                </login>
                            </div>
                            <div className="form-group">
                            <login onSubmit={this.formLogin}>
                                    <label>Est. Cost</label>
                                    <input type="text" value={this.state.zipCode} onChange={this.onEstCostChange} className="form-control" placeholder="" />
                                </login>
                            </div>
                            <div className="form-group">
                            <login onSubmit={this.formLogin}>
                                    <label>Est. Finish Time</label>
                                    <input type="text" value={this.state.estFinish} onChange={this.onEstFinishChange} className="form-control" placeholder="" />
                                </login>
                            </div>
                            <div className="form-group">
                            <login onSubmit={this.formLogin}>
                                    <label>Start Date</label>
                                    <input type="text" value={this.state.startDate} onChange={this.onStartDateChange} className="form-control" placeholder="" />
                                </login>
                            </div>
                            <div className="form-group">
                            <login onSubmit={this.formLogin}>
                                    <label>Materials</label>
                                    <input type="text" value={this.state.materials} onChange={this.onMaterialsChange} className="form-control" placeholder="" />
                                </login>
                            </div>
                            <div className="form-group">
                                    <label>Comments</label>
                                    <input type="text" value={this.state.comments} onChange={this.onCommentsChange} className="form-control" placeholder="" />
                                    <button className="btn btn-primary swap" float-right onClick={() => { /*this.props.changePage("logInPage")*/ }}> Submit </button>
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
        

                    
export default NewBidForm;