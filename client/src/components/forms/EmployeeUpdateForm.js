import React, { Component } from 'react';
import axios from 'axios';
import { Field } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { editEmployee, getEmployees } from '../../redux/actions/index';

class EmployeeUpdateForm extends Component {
    state = {
        employee: {
            name: this.props.employee.name,
            phone: this.props.employee.phone,
            email: this.props.employee.email,
            address: this.props.employee.address,
            city: this.props.employee.city,
            zip: this.props.employee.zip,
            status: this.props.employee.status,
            comments: this.props.employee.comments,
            project_id: this.props.employee.project_id,
            project: this.props.employee.project
        },
        redirect: false
    }

    componentDidMount() {

    }

    onClick = (e) => {
        // console.log("id from onclick: ", id);
        let id = this.props.employee.employee_id;
        this.props.editEmployee(id, this.state.employee);
        this.setState({
           redirect: true
        });
    }

    render() {
        const { redirect } = this.state
        console.log(this.props.employee);

        if (redirect) return (<Redirect to="/employee" />)
        return (
            <div>
                <div className="header">
                    <h1>Edit employee</h1>
                </div>
                <label>Name</label>
                <input type="text" className="form-control" id="name" value={this.state.employee.name}
                    onChange={(e) => this.setState({ employee: { ...this.state.employee, name: e.target.value } })} />
                <label>Name</label>
                <input type="text" className="form-control" value={this.state.employee.phone}
                    onChange={(e) => this.setState({ employee: {...this.state.employee, phone: e.target.value }})} />
                <label>Name</label>
                <input type="text" className="form-control" value={this.state.employee.email}
                    onChange={(e) => this.setState({ employee: {...this.state.employee, email: e.target.value }})} />
                <label>Name</label>
                <input type="text" className="form-control" value={this.state.employee.address}
                    onChange={(e) => this.setState({ employee: {...this.state.employee, address: e.target.value }})} />
                <input type="submit" className="btn btn-info" value="Save" onClick={(e) => this.onClick(e)} />
            </div>

        );
    }
}

const mapStateToProps = state => ({
    employees: state.employeeReducer.employees,
    employee: state.employeeReducer.editingObject
})
const mapPropsToDispatch = dispatch => ({
    getEmployees: () => dispatch(getEmployees()),
    editEmployee: (id, employee) => dispatch(editEmployee(id, employee))
})
export default connect(mapStateToProps, mapPropsToDispatch)(EmployeeUpdateForm);