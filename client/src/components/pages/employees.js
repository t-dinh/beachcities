import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NewEmployeeForm from '../forms/newEmployeeForm';
import { connect } from 'react-redux';
import { getEmployees, deleteEmployee, addEmployee } from '../../redux/actions/index';
import EmployeeUpdateForm from '../forms/EmployeeUpdateForm'

class Employees extends Component {
state={
    isChecked: false,
    checkedId: []
}

    componentDidMount() {
        this.props.getEmployees();
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

    render() {
        return (
            <div className= "container">
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
                                        <input className="checkbox" type="checkbox"
                                            value={this.state.isChecked}
                                            id={employees.employee_id}
                                            onChange={this.handleInputChange.bind(this)}>
                                        </input>
                                    </td>
                                    <td>{employees.name}</td>
                                    <td>{employees.phone}</td>
                                    <td>{employees.email}</td>
                                    <td>{employees.address}</td>
                                    <td>{employees.city}</td>
                                    <td>{employees.status}</td>
                                    <td>{employees.comments}</td>
                                    <td><Link to ="/update"><button className="btn btn-primary">update</button></Link></td>

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
                                    <input type="submit" className="btn btn-success" value="Delete"  onClick={() => this.props.deleteEmployee(this.state.checkedId)} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <NewEmployeeForm
                    addNewEmployee={this.props.addEmployee()}
                />
                <EmployeeUpdateForm />
            </div>

            


        );
    }
}
const mapStateToProps = state => ({
    employees: state.employeeReducer
})

const mapPropsToDispatch = dispatch => ({
    getEmployees: () => dispatch(getEmployees()),
    deleteEmployee: (id) => dispatch(deleteEmployee(id)),
    addEmployee: (employee) => dispatch(addEmployee(employee))
})
export default connect(mapStateToProps, mapPropsToDispatch)(Employees);