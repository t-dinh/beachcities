import React, { Component } from 'react';
import axios from 'axios';

class Employee extends Component {
    state = {
        employees: [],
        name: ""
    }

    onNameChange = e =>{
        this.setState({
            name: e.target.value
        })
    }
        onClick = async e => {
            e.preventDefault();
            this.addNewEmployee();
            this.setState({
                name: ""
            });
            await this.grabEmployee();
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
   addNewEmployee = async employee => {
       console.log('add new employee invoked');
       let res = await axios.post('http://localhost:5000/api/employees', {
           name: this.state.name
       }); // res.data => new employee object
       
       console.log("res: ", res.data);
       if (res.data) {
           this.setState({
               employees: [...this.state.employees, res.data]
           });
       }
   }

    componentDidMount() {
        this.grabEmployee();
        // this.addNewEmployee();
        // this.deleteEmployees();
    }

    deleteEmployees() {
        for (let i = 59; i <= 65; i++) {
            axios.delete(`http://localhost:5000/api/employees/${i}`);
        }
    }

    render() {
        return (
            <div>
                <div className="nav"><a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal">
                    <i className="material-icons">&#xE147;</i> <span>Add New Employee</span></a>
                    <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons">&#xE15C;</i> <span>Delete
                </span></a></div>
                <div className="tableBox">
                    {/* what gets rendered in this table will come from the database */}
                    <table className="table">
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Status</th>
                        </tr>
                        {this.state.employees.map(e => {
                            return (
                                <tr className="hoverButton">
                                    <td>{e.name}</td>
                                    <td>{e.phone}</td>
                                    <td>{e.email}</td>
                                    <td>{e.address}</td>
                                    <td>{e.status}</td>
                                    <button className="btn btn-danger" id="showButtons">x</button>
                                </tr>
                            )
                        })}
                    </table>
                </div>

                {/* modal */}

                <div id="addEmployeeModal" className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form>
                                <div className="modal-header">
                                    <h4 className="modal-title">Add Employee</h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                                {/* <div className="modal-body">
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input type="text" className="form-control" value={this.state.lastName}
                                            onChange={this.onLastNameChange} required />
                                    </div> */}
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" className="form-control" value={this.state.name}
                                            onChange={this.onNameChange} required />
                                    </div>
                                    {/* <div className="form-group">
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
                                </div> */}
                                <div className="modal-footer">
                                    <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                    <input type="submit" className="btn btn-success" value="Add" onClick={this.onClick}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>



                <div id="editEmployeeModal" className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form>
                                <div className="modal-header">
                                    <h4 className="modal-title">Edit Employee</h4>
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


                <div id="deleteEmployeeModal" className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form>
                                <div className="modal-header">
                                    <h4 className="modal-title">Delete Employee</h4>
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

export default Employee;