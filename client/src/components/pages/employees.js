import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import NewEmployeeForm from '../forms/newEmployeeForm';
import EmployeeUpdateForm from '../forms/EmployeeUpdateForm'

class Employees extends Component {
    state = {
        employees: [],
        employee_id: "",
        id: '',
        name: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        status: '',
        comments: '',
        isChecked: false,
        checkedId: [],
        isEditing: false,
        editingEmployee: null,
        editingIndex: 0
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

    onCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }

    onClick = e => {
        e.preventDefault();
        this.addNewEmployee();
        this.setState({
            name: ""
        });
        this.grabEmployee();
        console.log("end of onClick");
    }

    editOn = (employee, event) => {
        console.log('event target:', event.target);
        console.log(employee);
        // this.setState({
        //     editingEmployee: this.state.employees[index],
        //     isEditing: !this.state.isEditing,
        //     editingIndex: index
        // })

        // event.target.setAttribute("data-toggle", "modal");
        this.setState({
            isEditing: true,
            editingEmployee: employee
        });
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
   


    grabEmployee = async data => {
        console.log('grab employee invoked');
        let res = await axios.get('http://localhost:5000/api/employees')
        this.setState({
            employees: res.data
        })
        

    }
    addNewEmployee = async employee => {
        console.log('add new employee invoked');
        let res = await axios.post('http://localhost:5000/api/employees', employee); // res.data => new employee object

        console.log("res: ", res.data);
        if (res.data) {
            this.setState({
                employees: [...this.state.employees, res.data]
            });
        }
    }
    deleteEmployee = async employee => {
        console.log('delete employee');
        let res = await axios.delete('http://localhost:5000/api/employees/?name={name}', {
            name: this.state.name
        });
        console.log("res: ", res.data);
        if(res.data){
            this.setState({
                employees: [...this.state.employees, res.data]
            });
        }
    }
    updateEmployee = async employee => {
        console.log('update existing employee invoked');
        let res = await axios.put('http://localhost:5000/api/id/?id={id}',{
             name: this.state.name      
    });
 
    console.log("res: ", res.data);
    if (res.data) {
        this.setState({
            employees: [...this.state.employees, res.data]
        });
    }
 }

    componentDidMount() {
        this.grabEmployee();
        // this.deleteEmployees();
    }

    // deleteEmployees() {
    //     for (let i = 6; i <= 11; i++) {
    //         axios.delete(`http://localhost:5000/api/employees/${i}`);
    //     }
    // }
    popId = e => {
        let checkedId = this.state.checkedId.pop();
        this.setState({
            checkedId: checkedId
        })
        console.log(e.name)
    }
    deleteEmployee = async employee => {
        console.log('delete employee');
        for (var i = 0; i < this.state.checkedId.length; i++) {
            let res = await axios.delete("http://localhost:5000/api/employees/" + this.state.checkedId[i]);
            console.log("res: ", res.data);
        }
    }
 checkwhatever = e => {
     console.log(this.state.employee_id)
 }
    checkstate = e => { console.log(this.state.checkedId) }

    render() {
        return (
            <div>
                <button onClick={this.checkstate}>hi</button>
                <div className="nav"><a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal">
                    <i className="material-icons">&#xE147;</i> <span>Add New Employee</span></a>
                    <a href="#updateEmployeeModal" className="btn btn-success" data-toggle="modal" onClick={this.popId}>
                        <i className="material-icons">&#xE147;</i> <span>Update Employee</span></a>
                    <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons">&#xE15C;</i> <span>Delete
                </span></a></div>
                <div className="tableBox">
                    {/* what gets rendered in this table will come from the database */}
                    <table className="table">
                        <tr>
                            <th> </th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Status</th>
                        </tr>
                        {this.state.employees.map(e => {
                            return (
                                <tr>
                                    <td>
                                        <input className="checkbox" type="checkbox"
                                            value={this.state.isChecked}
                                            id={e.employee_id}
                                            onChange={this.handleInputChange.bind(this)}>
                                        </input>
                                    </td>
                                    <td>{e.name}</td>
                                    <td>{e.phone}</td>
                                    <td>{e.email}</td>
                                    <td>{e.address}</td>
                                    <td>{e.city}</td>
                                    <td>{e.status}</td>
                                    <td>{e.comments}</td>
                                    <td><Link to="/employee/${e.employee_id}" ><button className="btn btn-primary" onClick={(event) => this.editOn(e, event)}>update</button></Link></td>

                                </tr>
                            )
                        })}
                    </table>
                </div>


                 <div id="updateEmployeeModal" className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form>
                                <div className="modal-header">
                                    <h4 className="modal-title">Update Employee</h4>
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
                                     <div className="form-group">
                                        <label>Email</label>
                                        <input type="text" className="form-control" value={this.state.email}
                                            onChange={this.onEmailChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input type="text" className="form-control" value={this.state.phone}
                                            onChange={this.onPhoneChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label>Status</label>
                                        <input type="text" className="form-control" value={this.state.status}
                                            onChange={this.onStatusChange} required />
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
                                    <input type="submit" className="btn btn-success" value="Update" onClick={this.onUpdateClick}/>
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
                                    <h5>This Cannot Be Undone</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                                 <div className="modal-footer">
                                    <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                    <input type="submit" className="btn btn-success" value="Delete" onClick={this.deleteEmployee}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <NewEmployeeForm
                    addNewEmployee={this.addNewEmployee}
                    name={this.state.name} />

            
                {
                    this.state.isEditing &&

                <EmployeeUpdateForm 
                    editOn={this.editOn}
                    updateEmployee={this.updateEmployee}
                    editingIndex={this.editingIndex}
                    updateEmployee={this.updateEmployee}
                    data={this.state.editingEmployee}
                    />
                   }

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
                                    <input type="submit" className="btn btn-danger" value="Delete" onClick={this.deleteEmployee} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Employees;