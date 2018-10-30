import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NewEmployeeForm from '../forms/newEmployeeForm';
import { connect } from 'react-redux';
import { getEmployees } from '../../redux/actions/index';
import EmployeeUpdateForm from '../forms/EmployeeUpdateForm'

class Employees extends Component {


    componentDidMount() {
        this.props.getEmployees();
    }



    //     editOn = (employee, event) => {
    //         console.log('event target:', event.target);
    //         console.log(employee);
    //         // this.setState({
    //         //     editingEmployee: this.state.employees[index],
    //         //     isEditing: !this.state.isEditing,
    //         //     editingIndex: index
    //         // })

    //         // event.target.setAttribute("data-toggle", "modal");
    //         this.setState({
    //             isEditing: true,
    //             editingEmployee: employee
    //         });
    //     }

    //     handleInputChange = e => {
    //         const checkedId = this.state.checkedId
    //         let index
    //         if (e.target.checked) {
    //             checkedId.push(+e.target.id)
    //         } else {
    //             index = checkedId.indexOf(+e.target.id)
    //             checkedId.splice(index, 1)
    //         }
    //         this.setState({
    //             checkedId: checkedId,
    //             isChecked: e.target.checked
    //         });
    //         console.log(this.state.checkedId);
    //     }



    //     grabEmployee = async data => {
    //         console.log('grab employee invoked');
    //         let res = await axios.get('http://localhost:5000/api/employees')
    //         this.setState({
    //             employees: res.data
    //         })


    //     }
    //     addNewEmployee = async employee => {
    //         console.log('add new employee invoked');
    //         let res = await axios.post('http://localhost:5000/api/employees', employee); // res.data => new employee object

    //         console.log("res: ", res.data);
    //         if (res.data) {
    //             this.setState({
    //                 employees: [...this.state.employees, res.data]
    //             });
    //         }
    //     }
    //     deleteEmployee = async employee => {
    //         console.log('delete employee');
    //         let res = await axios.delete('http://localhost:5000/api/employees/?name={name}', {
    //             name: this.state.name
    //         });
    //         console.log("res: ", res.data);
    //         if(res.data){
    //             this.setState({
    //                 employees: [...this.state.employees, res.data]
    //             });
    //         }
    //     }
    //     updateEmployee = async employee => {
    //         console.log('update existing employee invoked');
    //         let res = await axios.put('http://localhost:5000/api/id/?id={id}',{
    //              name: this.state.name      
    //     });

    //     console.log("res: ", res.data);
    //     if (res.data) {
    //         this.setState({
    //             employees: [...this.state.employees, res.data]
    //         });
    //     }
    //  }

    //     componentDidMount() {
    //         this.grabEmployee();
    //         // this.deleteEmployees();
    //     }

    //     // deleteEmployees() {
    //     //     for (let i = 6; i <= 11; i++) {
    //     //         axios.delete(`http://localhost:5000/api/employees/${i}`);
    //     //     }
    //     // }
    //     popId = e => {
    //         let checkedId = this.state.checkedId.pop();
    //         this.setState({
    //             checkedId: checkedId
    //         })
    //         console.log(e.name)
    //     }
    //     deleteEmployee = async employee => {
    //         console.log('delete employee');
    //         for (var i = 0; i < this.state.checkedId.length; i++) {
    //             let res = await axios.delete("http://localhost:5000/api/employees/" + this.state.checkedId[i]);
    //             console.log("res: ", res.data);
    //         }
    //     }
    //  checkwhatever = e => {
    //      console.log(this.state.employee_id)
    //  }
    //     checkstate = e => { console.log(this.state.checkedId) }

    render() {
        return (
            <div>
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
                        {
                            this.props.employees.employees.map(employees => (

                                <tr>
                                    <td>
                                        {/* <input className="checkbox" type="checkbox"
                                            value={this.state.isChecked}
                                            id={employees.employee_id}
                                            onChange={this.handleInputChange.bind(this)}>
                                        </input> */}
                                    </td>
                                    <td>{employees.name}</td>
                                    <td>{employees.phone}</td>
                                    <td>{employees.email}</td>
                                    <td>{employees.address}</td>
                                    <td>{employees.city}</td>
                                    <td>{employees.status}</td>
                                    <td>{employees.comments}</td>
                                    <td><button className="btn btn-primary">update</button></td>

                                </tr>
                            )
                            )}
                    </table>
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
                                    <input type="submit" className="btn btn-success" value="Delete" onClick={this.deleteEmployee} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <NewEmployeeForm
                    addNewEmployee={this.addNewEmployee}
                    name={this.state.name} /> */}
            </div>




            // {
            //     this.state.isEditing &&

            // <EmployeeUpdateForm 
            //     editOn={this.editOn}
            //     editingIndex={this.editingIndex}
            //     data={this.state.editingEmployee}
            //     />
            //    }

        );
    }
}
const mapStateToProps = state => ({
    employees: state.employeeReducer
})

const mapPropsToDispatch = dispatch => ({
    getEmployees: () => dispatch(getEmployees()),
})
export default connect(mapStateToProps, mapPropsToDispatch)(Employees);