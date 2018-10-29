import React, { Component } from 'react';
import axios from 'axios';

class NewEmployeeForm extends Component {

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
        this.props.addNewEmployee(this.state);
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
        // this.grabEmployee();
        console.log("end of onClick");
    }

    submitEmployee = async employee => {
        let response = await axios.post('http://localhost:5000/api/employees', employee)
    }

    grabEmployee = async data => {
        console.log('grab employee invoked');
        let res = await axios.get('http://localhost:5000/api/employees')
        this.setState({
            employees: res.data
        })

    }
    // addNewEmployee = async employee => {
    //     console.log('add new employee invoked');
    //     let res = await axios.post('http://localhost:5000/api/employees', {
    //         name: this.state.name,
    //         phone: this.state.phone,
    //         email: this.state.email,
    //         address: this.state.address,
    //         city: this.state.city,
    //         zip: this.state.zip,
    //         status: this.state.status,
    //         comments: this.state.comments
    //     }); 
    //res.data => new employee object

    //     console.log("res: ", res.data);
    //     if (res.data) {
    //         this.setState({
    //             employees: [...this.state.employees, res.data]
    //         });
    //     }
    // }

    componentDidMount() {
        this.grabEmployee();
        //this.addNewEmployee();
        // this.deleteEmployees();
    }

    deleteEmployees() {
        for (let i = 59; i <= 65; i++) {
            axios.delete(`http://localhost:5000/api/employees/${i}`);
        }

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
            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Add Employee</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>


                            <div className="form-group form-group-top">

                                <label>Employee Name</label>
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
                                <input type="text" value={this.state.zip} onChange={this.onZipChange} className="form-control" placeholder="" />

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

export default NewEmployeeForm;