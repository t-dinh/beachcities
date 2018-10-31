import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NewContactForm from '../forms/newContactForm';
import { connect } from 'react-redux';
import { getContacts, deleteContact, addContact,storeContact } from '../../redux/actions/index';
import ContactUpdateForm from '../forms/ContactUpdateForm'
import { Redirect } from 'react-router';


class Contacts extends Component {
    state = {
        isChecked: false,
        checkedId: [],
        redirect: false
    }
    componentWillMount() {
        this.props.getContacts();
    }

    handleInputChange = e => {
        const checkedId = this.state.checkedId
        let index
        if (e.target.checked) {
            checkedId.push(+e.target.id)
        } else {
            index = checkedId.indexOf(+e.target.id)
            checkedId.splice(index, 1)
        }
        this.setState({
            checkedId: checkedId,
            isChecked: e.target.checked
        });
        console.log(this.state.checkedId);
    }

    onSendContact(contact){
        console.log('onsendcontact');
        console.log(contact);
        this.props.storeContact(contact);
        this.setState({
            redirect: true
        })
    }
    render() {
        const { redirect } = this.state
        if(redirect) return (<Redirect to="/update" />)
        return (
            <div className="container">
                <div className="nav"><a href="#addContactModal" className="btn btn-success" data-toggle="modal">
                    <i className="material-icons">&#xE147;</i> <span>Add New Contact</span></a>
                    <a href="#updateContactModal" className="btn btn-success" data-toggle="modal" onClick={this.popId}>
                        <i className="material-icons">&#xE147;</i> <span>Update Contact</span></a>
                    <a href="#deleteContactModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons">&#xE15C;</i> <span>Delete
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
                        {
                            this.props.contacts.contacts.map(contacts => (

                                <tr>
                                    <td>
                                        <input className="checkbox" type="checkbox"
                                            value={this.state.isChecked}
                                            id={contacts.contact_id}
                                            onChange={this.handleInputChange.bind(this)}>
                                        </input>
                                    </td>
                                    <td>{contacts.name}</td>
                                    <td>{contacts.phone}</td>
                                    <td>{contacts.email}</td>
                                    <td>{contacts.address}</td>
                                    <td>{contacts.city}</td>
                                    <td>{contacts.status}</td>
                                    <td>{contacts.comments}</td>
                                    <button id={contacts.contact_id} className="btn btn-primary" onClick={() => this.onSendContact(contacts)}>update</button>

                                </tr>
                            )
                            )}
                    </table>
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
                                    <input type="submit" className="btn btn-success" value="Delete" onClick={() => this.props.deleteContact(this.state.checkedId)} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <NewContactForm
                    addContact={this.props.addContact()}
                />
                <ContactUpdateForm />
            </div>

        );
    }
}
const mapStateToProps = state => ({
    contacts: state.contactReducer
})

const mapPropsToDispatch = dispatch => ({
    getContacts: () => dispatch(getContacts()),
    deleteContact: (id) => dispatch(deleteContact(id)),
    addContact: (contact) => dispatch(addContact(contact)),
    storeContact: (contact) => dispatch(storeContact(contact))
})
export default connect(mapStateToProps, mapPropsToDispatch)(Contacts);