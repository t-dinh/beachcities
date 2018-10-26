import React, { Component } from 'react';
import axios from 'axios';
import NewContactForm from '../forms/newContactForm';

class Contacts extends Component {
    state = {
        contacts: [],
        id:'',
        name: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        status: '',
        satisfaction:'',
        comments: '',
        isChecked: false,
        checkedId: ''
    }

    onNameChange = e => {
        this.setState({
            name: e.target.value
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

    onSatisfactionChange = event => {
        this.setState({
            satisfaction: event.target.value
        })
    }
    onCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }

    onClick = async e => {
        e.preventDefault();
        this.addNewContact();
        this.setState({
            name: ""
        });
        await this.grabContact();
        console.log("end of onClick");
    }

    grabContact = async data => {
        console.log('grab Contact invoked');
        let res = await axios.get('http://localhost:5000/api/contacts')
        this.setState({
            contacts: res.data
        })

    }
    addNewContact = async Contact => {
        console.log('add new Contact invoked');
        let res = await axios.post('http://localhost:5000/api/contacts', {
            name: this.state.name
        }); // res.data => new Contact object

        console.log("res: ", res.data);
        if (res.data) {
            this.setState({
                contacts: [...this.state.contacts, res.data]
            });
        }
    }

    componentDidMount() {
        this.grabContact();
        // this.deletecontacts();
    }

    // deletecontacts() {
    //     for (let i = 6; i <= 11; i++) {
    //         axios.delete(`http://localhost:5000/api/contacts/${i}`);
    //     }
    // }

    handleInputChange(c){
     this.setState({
          checkedId: c.target.id,
          isChecked: true
        });
      }
      
     deleteContact = Contact => {
         if (this.state.isChecked == true) {
            let response = axios.delete(`http://localhost:5000/api/contacts/${this.state.checkedId}`)
         }
        }
   

    render() {
        return (
            <div>
                <div className="nav"><a href="#addContactModal" className="btn btn-success" data-toggle="modal">
                    <i className="material-icons">&#xE147;</i> <span>Add New Contact</span></a>
                    <a href="#deleteContactModal" className="btn btn-danger" onClick={this.deleteContact} data-toggle="modal"><i className="material-icons">&#xE15C;</i> <span>Delete
                </span></a></div>
                <div className="tableBox">
                    {/* what gets rendered in this table will come from the database */}
                    <table className="table">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Status</th>
                            <th>Comments</th>
                        </tr>
                        {this.state.contacts.map(c => {
                            return (
                                <tr>
                                    <td>
                                    <input className="checkbox" type="checkbox" 
                                    value= {this.state.isChecked} 
                                    id={c.contact_id}
                                    onChange={this.handleInputChange.bind(this)}>
                                    </input>
                                    </td>
                                    <td>{c.name}</td>
                                    <td>{c.phone}</td>
                                    <td>{c.email}</td>
                                    <td>{c.address}</td>
                                    <td>{c.city}</td>
                                    <td>{c.status}</td>
                                    <td>{c.comments}</td>
                                    
                                </tr>
                            )
                        })}
                    </table>
                </div>


                <NewContactForm />




                <div id="editContactModal" className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form>
                                <div className="modal-header">
                                    <h4 className="modal-title">Edit Contact</h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input type="text" className="form-control" value={this.state.lastName}
                                            onChange={this.onLastNameChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input type="text" className="form-control" value={this.state.firstName}
                                            onChange={this.onFirstNameChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="text" className="form-control" value={this.state.email}
                                            onChange={this.onEmailChange} required />                  </div>
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input type="text" className="form-control" value={this.state.phone}
                                            onChange={this.onPhoneChange} required />                  </div>
                                    <div className="form-group">
                                        <label>Status</label>
                                        <input type="text" className="form-control" value={this.state.status}
                                            onChange={this.onStatusChange} required />                  </div>
                                </div>
                                <div className="modal-footer">
                                    <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                    <input type="submit" className="btn btn-info" value="Save" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


                <div id="deleteContactModal" className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form>
                                <div className="modal-header">
                                    <h4 className="modal-title">Delete Contact</h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                                <div className="modal-body">
                                    <p>Are you sure you want to delete these Records?</p>
                                    <p className="text-warning"><small>This action cannot be undone.</small></p>
                                </div>
                                <div className="modal-footer">
                                    <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                    <input type="submit" className="btn btn-danger" value="Delete" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Contacts;