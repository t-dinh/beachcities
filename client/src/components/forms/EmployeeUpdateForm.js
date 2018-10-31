import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { editEmployee , getEmployees} from '../../redux/actions/index';

class EmployeeUpdateForm extends Component {
    state = {
        name: this.props.employees.name,
        phone: "",
        email: "",
        address: "",
        city: "",
        zip: "",
        status: "",
        comments: ""
    }
componentDidMount() {
    console.log(this.props.location && this.props.location.state);
    this.props.getEmployees();

}

    onNameChange = event => {
        this.setState({
            name: event.target.value
        })
    }

    onEmailChange = () => {
        console.log('on name change');
    }

    onPhoneChange = () => {
        console.log('on name change');
    }

    onAddressChange = () => {
        console.log('on name change');
    }

    onCityChange = () => {
        console.log('on name change');
    }

    onStatusChange = () => {
        console.log('on name change');
    }

    onCommentsChange = () => {
        console.log('on name change');
    }

    updateEmployee = () => {
        let employee = {
            "name": this.state.name,
            "phone": this.state.phone,
            "email": this.state.email,
            "address": this.state.address,
            "city": this.state.city,
            "zip": this.state.zip,
            "status": this.state.status
        }
        console.log("update employee")
        console.log({employee})
        if (this.state.isChecked == true) {
            let res = axios.put(`http://localhost:5000/api/employees/${this.state.employees.employee_id}`, employee)
        }
    }

    onClick = e => {
        e.preventDefault();
        this.updateEmployee(this.state);
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

    render() {
        // let employee = this.props.data
        // console.log('employee:', employee);
        return (
            <div>
                <div className="header">
                    <h1>Edit employee</h1>
                </div>
                <label>Name</label>
                <input type="text" className="form-control" id={this.props.employee_id} initialState={this.props.employees.name}
                    onChange={this.onNameChange} />
                     <label>Name</label>
                <input type="text" className="form-control" 
                    onChange={this.onPhoneChange} />
                     <label>Name</label>
                <input type="text" className="form-control" 
                    onChange={this.onEmailChange} />
                     <label>Name</label>
                <input type="text" className="form-control" 
                    onChange={this.onAdressChange} />
                <input type="submit" className="btn btn-info" value="Save" onClick={(employee) => this.props.editEmployee(employee)} />
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

const mapStateToProps = state => ({
    employees: state.employeeReducer.employees
})
const mapPropsToDispatch = dispatch => ({
    getEmployees: () => dispatch(getEmployees()),
    editEmployee: (employee) => dispatch(editEmployee(employee))
})
export default connect(mapStateToProps, mapPropsToDispatch)(EmployeeUpdateForm);