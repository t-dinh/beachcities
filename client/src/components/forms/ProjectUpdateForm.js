import React, { Component } from 'react';
import axios from 'axios';
import { Field } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { editProject, getProjects } from '../../redux/actions/index';

class ProjectUpdateForm extends Component {
    state = {
        project: {
        address: this.props.project.address,
        city: this.props.project.city,
        zip: this.props.project.zip,
        est_cost: this.props.project.est_cost,
        est_finish: this.props.project.est_finish,
        start_date: this.props.project.start_date,
        end_date: this.props.project.end_date,
        materials: this.props.project.materials,
        actual_cost: this.props.project.actual_cost,
        comments: this.props.project.comments,
        satisfaction: this.props.project.satisfaction,
        // contact: {
        //     // name: this.props.project.contact.name
        // }
        },
        redirect: false
    }
    componentDidMount() {
        // this.props.getProjects();

        // console.log('project: ', this.props.project);

    }

    onClick = (e) => {
        // console.log("id from onclick: ", id);
        let id = this.props.project.project_id;
        this.props.editProject(id, this.state.project);
        this.setState({
           redirect: true
        });
    }
    onNameChange = event => {
        this.setState({
            name: event.target.value
        })
    }

    handleInputChange(c){
        this.setState({
             checkedId: c.target.id,
             isChecked: true
           });
         }

    render() {
        // console.log(this.props.location.state.data);
        const { redirect } = this.state
        console.log(this.props.project);

        if (redirect) return (<Redirect to="/projects"/>)
        return (
            <div>
                <div className="header">
                    <h1>Edit Project</h1>
                </div>
                <label>Address</label>
                <input type="text" className="form-control" id="address" value={this.state.project.address}
                    onChange={(e) => this.setState({project: { ...this.state.project, address: e.target.value } })} />
                
                <label>City</label>
                <input type="text" className="form-control" id="city" value={this.state.project.city}
                    onChange={(e) => this.setState({project: { ...this.state.project, city: e.target.value } })} />
                
                <label>Est. Cost</label>
                <input type="text" className="form-control" id="est_cost" value={this.state.project.est_cost}
                    onChange={(e) => this.setState({project: { ...this.state.project, est_cost: e.target.value } })} />
                
                <label>Est. Finish</label>
                <input type="text" className="form-control" id="est_finish" value={this.state.project.est_finish}
                    onChange={(e) => this.setState({project: { ...this.state.project, est_finish: e.target.value } })} />

                <label>Start Date</label>
                <input type="text" className="form-control" id="start_date" value={this.state.project.start_date}
                    onChange={(e) => this.setState({project: { ...this.state.project, start_date: e.target.value } })} />

                <label>End Date</label>
                <input type="text" className="form-control" id="end_date" value={this.state.project.end_date}
                    onChange={(e) => this.setState({project: { ...this.state.project, end_date: e.target.value } })} />

                <label>Materials</label>
                <input type="text" className="form-control" id="materials" value={this.state.project.materials}
                    onChange={(e) => this.setState({project: { ...this.state.project, materials: e.target.value } })} />

                <label>Actual Cost</label>
                <input type="text" className="form-control" id="actual_cost" value={this.state.project.actual_cost}
                    onChange={(e) => this.setState({project: { ...this.state.project, actual_cost: e.target.value } })} />

                <label>Comments</label>
                <input type="text" className="form-control" id="comments" value={this.state.project.comments}
                    onChange={(e) => this.setState({project: { ...this.state.project, comments: e.target.value } })} />

                <label>Satisfaction</label>
                <input type="text" className="form-control" id="satisfaction" value={this.state.project.satisfaction}
                    onChange={(e) => this.setState({project: { ...this.state.project, satisfaction: e.target.value } })} />

                <input type="submit" className="btn btn-info" value="Save" onClick={(e) => this.onClick(e)} />
            </div>


        );
    }
}

const mapStateToProps = state => ({
    projects: state.projectReducer.projects,
    project: state.projectReducer.editingProject
})
const mapPropsToDispatch = dispatch => ({
    getProjects: () => dispatch(getProjects()),
    editProject: (id, project) => dispatch(editProject(id, project))
})
export default connect(mapStateToProps, mapPropsToDispatch)(ProjectUpdateForm);