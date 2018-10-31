import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import NewProjectForm from '../forms/newEmployeeForm';
import { connect } from 'react-redux';
import { getProjects } from '../../redux/actions/index';
// import ProjectUpdateForm from '../forms/ProjectUpdateForm'

class Projects extends Component {


    componentDidMount() {
        this.props.getProjects();
    }



    //     editOn = (project, event) => {
    //         console.log('event target:', event.target);
    //         console.log(project);
    //         // this.setState({
    //         //     editingProject: this.state.projects[index],
    //         //     isEditing: !this.state.isEditing,
    //         //     editingIndex: index
    //         // })

    //         // event.target.setAttribute("data-toggle", "modal");
    //         this.setState({
    //             isEditing: true,
    //             editingProject: project
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



    //     grabProject = async data => {
    //         console.log('grab project invoked');
    //         let res = await axios.get('http://localhost:5000/api/projects')
    //         this.setState({
    //             projects: res.data
    //         })


    //     }
    //     addNewProject = async project => {
    //         console.log('add new project invoked');
    //         let res = await axios.post('http://localhost:5000/api/projects', project); // res.data => new project object

    //         console.log("res: ", res.data);
    //         if (res.data) {
    //             this.setState({
    //                 projects: [...this.state.projects, res.data]
    //             });
    //         }
    //     }
    //     deleteProject = async project => {
    //         console.log('delete project');
    //         let res = await axios.delete('http://localhost:5000/api/projects/?name={name}', {
    //             name: this.state.name
    //         });
    //         console.log("res: ", res.data);
    //         if(res.data){
    //             this.setState({
    //                 projects: [...this.state.projects, res.data]
    //             });
    //         }
    //     }
    //     updateProject = async project => {
    //         console.log('update existing project invoked');
    //         let res = await axios.put('http://localhost:5000/api/id/?id={id}',{
    //              name: this.state.name      
    //     });

    //     console.log("res: ", res.data);
    //     if (res.data) {
    //         this.setState({
    //             projects: [...this.state.projects, res.data]
    //         });
    //     }
    //  }

    //     componentDidMount() {
    //         this.grabProject();
    //         // this.deleteProjects();
    //     }

    //     // deleteProjects() {
    //     //     for (let i = 6; i <= 11; i++) {
    //     //         axios.delete(`http://localhost:5000/api/projects/${i}`);
    //     //     }
    //     // }
    //     popId = e => {
    //         let checkedId = this.state.checkedId.pop();
    //         this.setState({
    //             checkedId: checkedId
    //         })
    //         console.log(e.name)
    //     }
    //     deleteProject = async project => {
    //         console.log('delete project');
    //         for (var i = 0; i < this.state.checkedId.length; i++) {
    //             let res = await axios.delete("http://localhost:5000/api/projects/" + this.state.checkedId[i]);
    //             console.log("res: ", res.data);
    //         }
    //     }
    //  checkwhatever = e => {
    //      console.log(this.state.project_id)
    //  }
    //     checkstate = e => { console.log(this.state.checkedId) }

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
                                        {/* <input className="checkbox" type="checkbox"
                                            value={this.state.isChecked}
                                            id={projects.project_id}
                                            onChange={this.handleInputChange.bind(this)}>
                                        </input> */}
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
                                    <td>{projects.contact.name}</td>
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
                {/* <NewprojectForm
                    addNewproject={this.addNewproject}
                    name={this.state.name} /> */}
            </div>




            // {
            //     this.state.isEditing &&

            // <projectUpdateForm 
            //     editOn={this.editOn}
            //     editingIndex={this.editingIndex}
            //     data={this.state.editingproject}
            //     />
            //    }

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