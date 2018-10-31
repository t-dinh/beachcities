import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NewProjectForm from '../forms/newProjectForm';
import { connect } from 'react-redux';
import { getProjects, deleteProject, addProject, storeProject } from '../../redux/actions/index';
import { Redirect } from 'react-router';

class Projects extends Component {
    state = {
        isChecked: false,
        checkedId: [],
        redirect: false
    }

    componentDidMount() {
        this.props.getProjects();
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

    onSendProject(project) {
        console.log('onsendproject');
        console.log(project);
        this.props.storeProject(project);
        this.setState({
            redirect: true
        })
    }

    render() {
        const { redirect } = this.state
        if (redirect) return (<Redirect to="/updateProject" />)
        return (
            <div className="containter">
                <div className="nav"><a href="#addProjectModal" className="btn btn-success" data-toggle="modal">
                    <i className="material-icons">&#xE147;</i> <span>Add New project</span></a>
                    <a href="#updateProjectModal" className="btn btn-success" data-toggle="modal" onClick={this.popId}>
                        <i className="material-icons">&#xE147;</i> <span>Update project</span></a>
                    <a href="#deleteProjectModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons">&#xE15C;</i> <span>Delete
                </span></a></div>
                <h1> Projects </h1>
                <div className="tableBox">
                    {/* what gets rendered in this table will come from the database */}
                    <table className="table">
                        <tr>
                            <th> </th>
                            <th>Contact Name</th>
                            <th>Contact Number</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Est. Cost</th>
                            <th>Est. Finish</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Materials</th>
                            <th>Actual Cost</th>
                            <th>Comments</th>
                            <th>Satisfaction</th>
                            <th>Update</th>
                        </tr>
                        {
                            this.props.projects.projects.map(project => (

                                <tr>
                                    <td>
                                        <input className="checkbox" type="checkbox"
                                            value={this.state.isChecked}
                                            id={project.project_id}
                                            onChange={this.handleInputChange.bind(this)}>
                                        </input>
                                    </td>
                                    <td>{project.contact.name}</td>
                                    <td>{project.contact.phone}</td>
                                    <td>{project.address}</td>
                                    <td>{project.city}</td>
                                    <td>{project.zip}</td>
                                    <td>{project.est_cost}</td>
                                    <td>{project.est_finish}</td>
                                    <td>{project.start_date}</td>
                                    <td>{project.materials}</td>
                                    <td>{project.actual_cost}</td>
                                    <td>{project.satisfaction}</td>
                                    <td>{project.comments}</td>
                                    <td>
                                        <button id={project.project_id} className="btn btn-primary" onClick={() => this.onSendProject(project)}>Update</button>

                                    </td>
                                </tr>
                            )
                            )}
                    </table>
                </div>

                <div id="deleteProjectModal" className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form>
                                <div className="modal-header">
                                    <h4 className="modal-title">Delete Project</h4>
                                    <h5>This Cannot Be Undone</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                                <div className="modal-footer">
                                    <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                    <input type="submit" className="btn btn-success" value="Delete" onClick={() => this.props.deleteProject(this.state.checkedId)} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <NewProjectForm
                addProjectEmployee={this.props.addProject()}
            />
            </div>


        );
    }
}
const mapStateToProps = state => ({
    projects: state.projectReducer
})

const mapPropsToDispatch = dispatch => ({
    getProjects: () => dispatch(getProjects()),
    deleteProject: (id) => dispatch(deleteProject(id)),
    addProject: (project) => dispatch(addProject(project)),
    storeProject: (project) => dispatch(storeProject(project))
})
export default connect(mapStateToProps, mapPropsToDispatch)(Projects);