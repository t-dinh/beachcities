import React, { Component } from 'react';

class EmoployeeUpdateForm extends Component {
    state = {
        name: "test`",
        phone: "test`",
        email: "test`",
        address: "test`",
        city: "test`",
        zip: "test`",
        status: "test`",
        comments: "test`"
    }

    onNameChange = () => {
        console.log('on name change');
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



    render() {
        let employee = this.props.data
        console.log('employee:', employee);
        return (
            <div>
                <div className="header">
                    <h1>Edit employee</h1>
                </div>
                <label>Name</label>
                <input type="text" className="form-control" defaultValue={employee.name}
                    onChange={this.onNameChange} />
                     <label>Name</label>
                <input type="text" className="form-control" value={employee.phone}
                    onChange={this.onPhoneChange} />
                     <label>Name</label>
                <input type="text" className="form-control" value={employee.email}
                    onChange={this.onEmailChange} />
                     <label>Name</label>
                <input type="text" className="form-control" value={employee.address}
                    onChange={this.onAdressChange} />
                <input type="submit" className="btn btn-info" value="Save" onClick={() => this.props.updateEmployee()} />
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

export default EmoployeeUpdateForm;