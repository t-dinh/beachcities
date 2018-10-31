import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { editContact , getContacts} from '../../redux/actions/index';

class ContactUpdateForm extends Component {
    state = {
        name: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        zip: "",
        status: "",
        comments: ""
    }
    componentDidMount() {
        this.props.getContacts();

        console.log('contact:', this.props.contact);
    }

    onNameChange = event => {
        this.setState({
            name: event.target.value
        })
    }

    onEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
        console.log('on name change');
    }

    onPhoneChange = (event) => {
        this.setState({
            phone: event.target.value
        })
        console.log('on name change');
    }

    onAddressChange = (event) => {
        this.setState({
            address: event.target.value
        })
        console.log('on name change');
    }

    onCityChange = (event) => {
        this.setState({
            city: event.target.value
        })
        console.log('on name change');
    }

    onStatusChange = (event) => {
        this.setState({
            status: event.target.value
        })
        console.log('on name change');
    }

    onCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
        console.log('on name change');
    }

    updateContact = () => {
        let contact = {
            "name": this.state.name,
            "phone": this.state.phone,
            "email": this.state.email,
            "address": this.state.address,
            "city": this.state.city,
            "zip": this.state.zip,
            "status": this.state.status
        }
        console.log("update contact")
        console.log({contact})
        if (this.state.isChecked == true) {
            let res = axios.put(`http://localhost:5000/api/contacts/${this.state.contacts.contact_id}`, contact)
        }
    }

    onClick = e => {
        e.preventDefault();
        this.updateContact(this.state);
        this.setState({
            name: '',
            phone: '',
            email: '',
            address: '',
            city: '',
            zip: '',
            status: '',
            comments: ''
        });
        // this.grabContact();
        console.log("end of onClick");
    }

    render() {
        // let employee = this.props.data
        // console.log('employee:', employee);
        return (
            <div>
                <div className="header">
                    <h1>Edit employee</h1>
                </div>
                <label>Name</label>
                <input type="text" className="form-control" id={this.props.contact_id} defaultValue={this.props.contact.name}
                    onChange={this.onNameChange} />
                     <label>Name</label>
                <input type="text" className="form-control" id={this.props.contact_id} defaultValue={this.props.contact.phone}
                    onChange={this.onPhoneChange} />
                     <label>Name</label>
                <input type="text" className="form-control" id={this.props.contact_id} defaultValue={this.props.contact.email}
                    onChange={this.onEmailChange} />
                     <label>Name</label>
                <input type="text" className="form-control" id={this.props.contact_id} defaultValue={this.props.contact.address}
                    onChange={this.onAdressChange} />
                <input type="submit" className="btn btn-info" value="Save" onClick={() => this.updateEmployee()} />
            </div>
        

            // <div id="updateEmployeeModal" className="modal fade">
            //     <div className="modal-dialog">
            //         <div className="modal-content">
            //             <form>
            //                 <div className="modal-header">
            //                     <h4 className="modal-title">Edit Employee</h4>
            //                 </div>
            //                 <div className="modal-body">
            //                     <div className="form-group">
            //                         <label>Name</label>
            //                         <input type="text" className="form-control" id="name" value={employee.name}
            //                             onChange={this.onNameChange} />
            //                     </div>
            //                     <div className="form-group">
            //                         <label>Email</label>
            //                         <input type="text" className="form-control" value="Email"
            //                             onChange={this.onEmailChange} />                  </div>
            //                     <div className="form-group">
            //                         <label>Phone</label>
            //                         <input type="text" className="form-control" value="Phone"
            //                             onChange={this.onPhoneChange} />                  </div>
            //                     <div className="form-group">
            //                         <label>Address</label>
            //                         <input type="text" className="form-control" value="Address"
            //                             onChange={this.onAddressChange} />                  </div>
            //                     <div className="form-group">
            //                         <label>City</label>
            //                         <input type="text" className="form-control" value="City"
            //                             onChange={this.onCityChange} />                  </div>
            //                     <div className="form-group">
            //                         <label>Status</label>
            //                         <input type="text" className="form-control" value="Status"
            //                             onChange={this.onStatusChange} />                  </div>
            //                     <div className="form-group">
            //                         <label>Comment</label>
            //                         <input type="text" className="form-control" value="comments" onChange={this.onCommentsChange} required />                  </div>
            //                 </div>
            //                 <div className="modal-footer">
            //                     <input type="button" className="btn btn-default" data-dismiss="modal" onClick={() => this.setState({ checkedId: [] })} value="Cancel" />
            //                     <input type="submit" className="btn btn-info" value="Save" onClick={() => this.updateEmployee()} />
            //                 </div>
            //             </form>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

// const mapStateToProps = state => ({
//     employees: state.employeeReducer.employees
// })

const mapStateToProps = state => ({
    contacts: state.contactReducer.contacts,
    contact: state.contactReducer.editingObject
})
const mapPropsToDispatch = dispatch => ({
    getContacts: () => dispatch(getContacts()),
    editContact: (contact) => dispatch(editContact(contact))
})
export default connect(mapStateToProps, mapPropsToDispatch)(ContactUpdateForm);