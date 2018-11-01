import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { editContact , getContacts} from '../../redux/actions/index';

class ContactUpdateForm extends Component {
    state = {
        contact: {
        name: this.props.contact.name,
        phone: this.props.contact.phone,
        email: this.props.contact.email,
        address: this.props.contact.address,
        city: this.props.contact.city,
        zip: this.props.contact.zip,
        status: this.props.contact.status,
        comments: this.props.contact.comments
    },
    redirect: false
}
 onClick = (e) => {
     let id = this.props.contact.contact_id;
        this.props.editContact(id, this.state.contact);
        this.setState({
            redirect: true
        });
    }

    render() {
        const { redirect } = this.state
        if (redirect) return (<Redirect to="/contacts" />)
        return (
            <div>
                <div className="header">
                    <h1>Edit contacts</h1>
                </div>
                <label>Name</label>
                <input type="text" className="form-control"  value={this.state.contact.name}
                    onChange={(e) => this.setState({ contact: { ...this.state.contact, name: e.target.value } })} />
                     <label>Phone</label>
                <input type="text" className="form-control"  value={this.state.contact.phone}
                    onChange={(e) => this.setState({ contact: { ...this.state.contact, phone: e.target.value } })} />
                     <label>Email</label>
                <input type="text" className="form-control"  value={this.state.contact.email}
                    onChange={(e) => this.setState({ contact: { ...this.state.contact, email: e.target.value } })} />
                     <label>Address</label>
                <input type="text" className="form-control"  value={this.state.contact.address}
                    onChange={(e) => this.setState({ contact: { ...this.state.contact, address: e.target.value } })} />
                 <label>City</label>
                <input type="text" className="form-control"  value={this.state.contact.city}
                    onChange={(e) => this.setState({ contact: { ...this.state.contact, city: e.target.value } })} />
                 <label>Zip</label>
                <input type="text" className="form-control"  value={this.state.contact.zip}
                    onChange={(e) => this.setState({ contact: { ...this.state.contact, zip: e.target.value } })} />
                 <label>Status</label>
                <input type="text" className="form-control"  value={this.state.contact.status}
                    onChange={(e) => this.setState({ contact: { ...this.state.contact, status: e.target.value } })} />
                 <label>Comments</label>
                <input type="text" className="form-control"  value={this.state.contact.comments}
                    onChange={(e) => this.setState({ contact: { ...this.state.contact, comments: e.target.value } })} />
                <input type="submit" className="btn btn-info" value="Save" onClick={(e) => this.onClick(e)} />
            </div>
        

        );
    }
}

const mapStateToProps = state => ({
    contacts: state.contactReducer.contacts,
    contact: state.contactReducer.editingObject
})
const mapPropsToDispatch = dispatch => ({
    getContacts: () => dispatch(getContacts()),
    editContact: (id, contact) => dispatch(editContact(id, contact))
})
export default connect(mapStateToProps, mapPropsToDispatch)(ContactUpdateForm);