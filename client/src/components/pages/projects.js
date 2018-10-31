import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import NewProjectForm from '../forms/newEmployeeForm';
import { connect } from 'react-redux';
import { getProjects } from '../../redux/actions/index';
// import ProjectUpdateForm from '../forms/ProjectUpdateForm'

class Projects extends Component {

    state = {
        isChecked : false
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


    render() {
        return (
            <div>
                <div className="nav"><a href="#addProjectModal" className="btn btn-success" data-toggle="modal">
                    <i className="material-icons">&#xE147;</i> <span>Add New project</span></a>
                    <a href="#updateProjectModal" className="btn btn-success" data-toggle="modal" onClick={this.popId}>
                        <i className="material-icons">&#xE147;</i> <span>Update project</span></a>
                    <a href="#deleteProjectModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons">&#xE15C;</i> <span>Delete
                </span></a></div>
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
                        </tr>
                        {
                            this.props.projects.projects.map(projects => (

                                <tr>
                                    <td>
                                        <input className="checkbox" type="checkbox"
                                            value={this.state.isChecked}
                                            id={projects.project_id}
                                            onChange={this.handleInputChange.bind(this)}>
                                        </input>
                                    </td>
                                    <td>{projects.contact.name}</td>
                                    <td>{projects.contact.phone}</td>
                                    <td>{projects.address}</td>
                                    <td>{projects.city}</td>
                                    <td>{projects.zip}</td>
                                    <td>{projects.est_cost}</td>
                                    <td>{projects.est_finish}</td>
                                    <td>{projects.start_date}</td>
                                    <td>{projects.materials}</td>
                                    <td>{projects.actual_cost}</td>
                                    <td>{projects.satisfaction}</td>
                                    <td>{projects.comments}</td>
                                    <td><button className="btn btn-primary">update</button></td>

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
                                    <input type="submit" className="btn btn-success" value="Delete" onClick={this.deleteProject} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>





        );
    }
}
const mapStateToProps = state => ({
    projects: state.projectReducer
})

const mapPropsToDispatch = dispatch => ({
    getProjects: () => dispatch(getProjects()),
})
export default connect(mapStateToProps, mapPropsToDispatch)(Projects);