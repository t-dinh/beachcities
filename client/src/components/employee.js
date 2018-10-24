import React, { Component } from 'react';

class Employee extends Component {

  state = {
    lastName: "",
    firstName: "",
    email: "",
    phone: "",
    status: "",
    action: ""
  }

  onLastNameChange = e => {
    this.setState({
      lastName: e.target.value
    })
  }

  onFirstNameChange = e => {
    this.setState({
      firstName: e.target.value
    })
  }

  onEmailChange = e => {
    this.setState({
      email: e.target.value
    })
  }
  onPhoneChange = e => {
    this.setState({
      phone: e.target.value
    })
  }
  onStatusChange = e => {
    this.setState({
      status: e.target.value
    })
  }
  onActionChange = e => {
    this.setState({
      action: e.target.value
    })
  }

  render() {
    return (

      <body>

        
        <div className="container">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2><b>Employee</b>Management</h2>
                </div>
                <div className="col-sm-6">
                  <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal">
                    <i className="material-icons">&#xE147;</i> <span>Add New Employee</span></a>
                  <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons">&#xE15C;</i> <span>Delete
  </span></a>
                </div>

              </div>
            </div>
            <table className="table-employee">
              <thead>
                <tr>
                  <th>
                    <span className="checkbox" id="selectAll">
                      <label for="selectAll">

                      </label>


                    </span>

                  </th>
                  <th>Last Name</th>
                  <th>First Name</th>
                  <th>Email</th>
                  <th>Phone #</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="custom-checkbox">
                      <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                      <label for="checkbox1"></label>
                    </span>
                  </td>
                  <td>Patel</td>
                  <td>Hemal</td>
                  <td>TheHemalPatel@gmail.com</td>
                  <td>1-714-369-9032</td>
                  <td>Active</td>
                  <td>
                    {/* <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a> */}
                    <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a></td>
                </tr>

              </tbody>
            </table>

          </div>
        </div>


        <div id="addEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title">Add Employee</h4>
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
                  <input type="submit" className="btn btn-success" value="Add" />
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

      </body>


    );
  }
}

export default Employee;