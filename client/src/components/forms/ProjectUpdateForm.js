import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { editProject, getProjects } from '../../redux/actions/index';

class ProjectUpdateForm extends Component {
    state = {
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
        contact: {
            name: '',
        },
    }
    componentDidMount() {
        this.props.getProjects();

        console.log('project: ', this.props.project);

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

    updateProject = () => {
        let project = {
            "address": this.state.address,
            "city": this.state.city,
            "est_cost": this.state.est_cost,
            "est_finish" : this.state.est_finish,
            "start_date" : this.state.start_date,
            "end_date" : this.state.end_date,
            "materials" : this.state.materials,
            "actual_cost" : this.state.actual_cost,
            "comments" : this.state.comments,
            "satisfaction" : this.state.satisfaction
        }
        console.log("update project")
        console.log({ project })
        if (this.state.isChecked === true) {
            let res = axios.put(`http://localhost:5000/api/projects/${this.state.projects.project_id}`, project)
        }
    }

    onClick = e => {
        e.preventDefault();
        this.updateProject(this.state);
        this.setState({
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
            satisfaction:''
        });
        // this.grabProject();
        console.log("end of onClick");
    }

    render() {
        // console.log(this.props.location.state.data);
        return (
            <div>
                <div className="header">
                    <h1>Edit Project</h1>
                </div>
                <label>Address</label>
                <input name="address" type="text" className="form-control" id={this.props.project_id} defaultValue={this.props.project.address}
                    onChange={this.onAddressChange} />
                
                <label>City</label>
                <input name="city" type="text" className="form-control" id={this.props.project_id} defaultValue={this.props.project.city}
                    onChange={this.onPhoneChange} />
                
                <label>Est. Cost</label>
                <input name="est_cost" type="text" className="form-control" id={this.props.project_id} defaultValue={this.props.project.est_cost}
                    onChange={this.onEmailChange} />
                
                <label>Est. Finish</label>
                <input name="est_finish"  type="text" className="form-control" id={this.props.project_id} defaultValue={this.props.project.est_finish}
                    onChange={this.onAdressChange} />

                <label>Start Date</label>
                <input name="start_date" type="text" className="form-control" id={this.props.project_id} defaultValue={this.props.project.start_date}
                    onChange={this.onAdressChange} />

                <label>End Date</label>
                <input name="end_date"  type="text" className="form-control" id={this.props.project_id} defaultValue={this.props.project.end_date}
                    onChange={this.onAdressChange} />

                <label>Materials</label>
                <input name="materials" type="text" className="form-control" id={this.props.project_id} defaultValue={this.props.project.materials}
                    onChange={this.onAdressChange} />

                <label>Actual Cost</label>
                <input name="actual_cost" type="text" className="form-control" id={this.props.project_id} defaultValue={this.props.project.actual_cost}
                    onChange={this.onAdressChange} />

                <label>Comments</label>
                <input name="comments" type="text" className="form-control" id={this.props.project_id} defaultValue={this.props.project.comments}
                    onChange={this.onAdressChange} />

                <label>Satisfaction</label>
                <input type="text" className="form-control" id={this.props.project_id} defaultValue={this.props.project.satisfaction}
                    onChange={this.onAdressChange} />

                <input type="submit" className="btn btn-info" value="Save" onClick={(project) => this.props.editProject(project)} />
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
    editProject: (project) => dispatch(editProject(project))
})
export default connect(mapStateToProps, mapPropsToDispatch)(ProjectUpdateForm);