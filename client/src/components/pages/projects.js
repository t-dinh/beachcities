import React, { Component } from 'react';
import axios from 'axios';
import NewProjectForm from '../forms/newProjectForm';

class Projects extends Component {
    state = {
        projects: [],
        id:'',
        address: '',
        city: '',
        zip: '',
        est_cost: '',
        est_finish: '',
        start_date: '',
        end_date: '',
        materials: '',
        actual_cost: '',
        comments: '',
        satisfaction:'',
        contact:'',
        isChecked: false,
        checkedId: ''
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

    onSatisfactionChange = event => {
        this.setState({
            satisfaction: event.target.value
        })
    }
    onCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }

    onClick = async e => {
        e.preventDefault();
        this.addNewProject();
        this.setState({
            name: ""
        });
        await this.grabProject();
        console.log("end of onClick");
    }

    grabProject = async data => {
        console.log('grab project invoked');
        let res = await axios.get('http://localhost:5000/api/projects')
        this.setState({
            projects: res.data
        })

    }
    addNewProject = async project => {
        console.log('add new project invoked');
        let res = await axios.post('http://localhost:5000/api/projects', {
            name: this.state.name
        }); // res.data => new project object

        console.log("res: ", res.data);
        if (res.data) {
            this.setState({
                projects: [...this.state.projects, res.data]
            });
        }
    }

    componentDidMount() {
        this.grabProject();
        // this.deleteprojects();
    }

    // deleteprojects() {
    //     for (let i = 6; i <= 11; i++) {
    //         axios.delete(`http://localhost:5000/api/projects/${i}`);
    //     }
    // }

    handleInputChange(c){
     this.setState({
          checkedId: c.target.id,
          isChecked: true
        });
      }
      
     deleteproject = project => {
         if (this.state.isChecked == true) {
            let response = axios.delete(`http://localhost:5000/api/projects/${this.state.checkedId}`)
         }
        }
   

    render() {
        return (
            <div>
                <div className="nav"><a href="#addProjectModal" className="btn btn-success" data-toggle="modal">
                    <i className="material-icons">&#xE147;</i> <span>Add New Project</span></a>
                    <a href="#deleteProjectModal" className="btn btn-danger" onClick={this.deleteProject} data-toggle="modal"><i className="material-icons">&#xE15C;</i> <span>Delete
                </span></a></div>
                <div className="tableBox">
                    {/* what gets rendered in this table will come from the database */}
                    <table className="table">
                        <tr>
                            <th></th>
                            <th>Contact</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Zip</th>
                            <th>Est. Cost</th>
                            <th>Est. Finish</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Materials</th>
                            <th>Actual Cost</th>
                            <th>Comments</th>
                            <th>Satisfaction</th>
                        </tr>
                        {this.state.projects.map(p => {
                            return (
                                <tr>
                                    <td>
                                    <input className="checkbox" type="checkbox" 
                                    value= {this.state.isChecked} 
                                    id={p.project_id}
                                    onChange={this.handleInputChange.bind(this)}>
                                    </input>
                                    </td>
                                    <td>{p.contact.name}</td>
                                    <td>{p.address}</td>
                                    <td>{p.city}</td>
                                    <td>{p.zip}</td>
                                    <td>{p.est_cost}</td>
                                    <td>{p.est_finish}</td>
                                    <td>{p.start_date}</td>
                                    <td>{p.end_date}</td>
                                    <td>{p.materials}</td>
                                    <td>{p.actual_cost}</td>
                                    <td>{p.comments}</td>
                                    <td>{p.satisfaction}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>


                <NewProjectForm />




                <div id="editprojectModal" className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form>
                                <div className="modal-header">
                                    <h4 className="modal-title">Edit project</h4>
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


                <div id="deleteprojectModal" className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form>
                                <div className="modal-header">
                                    <h4 className="modal-title">Delete project</h4>
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

export default Projects;