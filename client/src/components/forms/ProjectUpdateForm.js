import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { editProject, getProjects } from '../../redux/actions/index';

class ProjectUpdateForm extends Component {
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
        contact: {
            name: '',
        },
    }
    componentDidMount() {
        // console.log(this.props.location.state);
        this.props.getProjects();

        console.log('project: ', this.props.project);

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

    updateProject = () => {
        let project = {
            "name": this.state.name,
            "phone": this.state.phone,
            "email": this.state.email,
            "address": this.state.address,
            "city": this.state.city,
            "zip": this.state.zip,
            "status": this.state.status
        }
        console.log("update project")
        console.log({ project })
        if (this.state.isChecked === true) {
            let res = axios.put(`http://localhost:5000/api/projects/${this.state.projects.project_id}`, project)
        }
    }

    onClick = e => {
        e.preventDefault();
        this.updateproject(this.state);
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
                <input type="text" className="form-control" id={this.props.project_id} defaultValue={this.props.projects.address}
                    onChange={this.onNameChange} />
                
                <label>City</label>
                <input type="text" className="form-control"
                    onChange={this.onPhoneChange} />
                
                <label>Est. Cost</label>
                <input type="text" className="form-control"
                    onChange={this.onEmailChange} />
                
                <label>Est. Finish</label>
                <input type="text" className="form-control"
                    onChange={this.onAdressChange} />

                <label>Start Date</label>
                <input type="text" className="form-control"
                    onChange={this.onAdressChange} />

                <label>End Date</label>
                <input type="text" className="form-control"
                    onChange={this.onAdressChange} />

                <label>Materials</label>
                <input type="text" className="form-control"
                    onChange={this.onAdressChange} />

                <label>Actual Cost</label>
                <input type="text" className="form-control"
                    onChange={this.onAdressChange} />

                <label>Comments</label>
                <input type="text" className="form-control"
                    onChange={this.onAdressChange} />

                <label>Satisfaction</label>
                <input type="text" className="form-control"
                    onChange={this.onAdressChange} />

                <label>Update</label>
                <input type="text" className="form-control"
                    onChange={this.onAdressChange} />    
                
                <input type="submit" className="btn btn-info" value="Save" onClick={(project) => this.props.editProject(project)} />
            </div>


        );
    }
}

const mapStateToProps = state => ({
    projects: state.projectReducer.projects,
    project: state.projectReducer.editingObject
})
const mapPropsToDispatch = dispatch => ({
    getProjects: () => dispatch(getProjects()),
    editProject: (project) => dispatch(editProject(project))
})
export default connect(mapStateToProps, mapPropsToDispatch)(ProjectUpdateForm);