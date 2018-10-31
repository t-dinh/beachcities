import React, { Component } from 'react';
import axios from 'axios';
import { addProject } from '../../redux/actions/index';
import { connect } from 'react-redux';

class NewProjectForm extends Component {
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
        isChecked: false,
        checkedId: ''
    }

    handleOnChange = e => this.setState({ [e.target.name]: e.target.value })

    onContactChange = event => {
        this.setState({
            contact:
            {
                name: event.target.value
            }
            })
    }

    onClick = e => {
        e.preventDefault();
        this.props.addProject(this.state);
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
            satisfaction:'',
            contact:''
        });
        // this.grabEmployee();
        console.log("end of onClick");
    }

    submitProject = async project => {
        await axios.post('http://localhost:5000/api/projects', project)
    }

    grabProject = async data => {
        console.log('grab project invoked');
        let res = await axios.get('http://localhost:5000/api/projects')
        this.setState({
            projects: res.data
        })

    }

    componentDidMount() {
        this.grabProject();
        // this.deleteprojects();
    }


    handleInputChange(c){
     this.setState({
          checkedId: c.target.id,
          isChecked: true
        });
      }
      
    //   deleteProjects() {
    //     for (let i = 59; i <= 65; i++) {
    //         axios.delete(`http://localhost:5000/api/projects/${i}`);
    //     }
    // }
   
    render() {
        return (
            <div id="addProjectModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Add Project</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>

                    {/* FORM CODE */}
                    <div className="form-group form-group-top">
                                    
                                    <label>Contact Name</label>
                                    <input lftype="text" value={this.state.contact.name} onChange={this.onContactChange} className="form-control" placeholder="" />
                                
                            </div>
                            <div className="form-group">
                                
                                    <label>Address</label>
                                    <input name = "address" type="text" value={this.state.address} onChange={this.handleOnChange} className="form-control" placeholder="" />
                                
                            </div>
                            <div className="form-group">
                                    
                                    <label>City</label>
                                    <input name="city" type="text" value={this.state.city} onChange={this.handleOnChange} className="form-control" placeholder="" />
                                
                            </div>
                            <div className="form-group">
                            
                                    <label>Zip</label>
                                    <input name="zip" type="text" value={this.state.zip} onChange={this.handleOnChange} className="form-control" placeholder="" />
                                
                            </div>
                            <div className="form-group">
                            
                                    <label>Est. Cost</label>
                                    <input name="est_cost" type="text" value={this.state.est_cost} onChange={this.handleOnChange} className="form-control" placeholder="" />
                                
                            </div>
                            <div className="form-group">
                            
                                    <label>Est. Finish Date</label>
                                    <input name="est_finish" type="text" value={this.state.est_finish} onChange={this.handleOnChange} className="form-control" placeholder="" />
                                
                            </div>
                            <div className="form-group">
                            
                                    <label>Start Date</label>
                                    <input name="start_date" type="text" value={this.state.start_date} onChange={this.handleOnChange} className="form-control" placeholder="" />
                                
                            </div>
                            <div className="form-group">
                      
                                    <label>Materials</label>
                                    <input name="materials" type="text" value={this.state.materials} onChange={this.handleOnChange} className="form-control" placeholder="" />
                                
                            </div>
                            <div className="form-group">
                                    <label>Comments</label>
                                    <input name="comments" type="text" value={this.state.comments} onChange={this.handleOnChange} className="form-control" placeholder="" />
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-success" value="Add" onClick={this.onClick} data-dismiss="modal" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>



        );

    }

}
const mapDispatchToProps = dispatch => ({
    addProject: Project => dispatch(addProject(Project))
})
                    
export default connect(null, mapDispatchToProps)(NewProjectForm);