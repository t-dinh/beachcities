import React, { Component } from 'react';
import axios from 'axios';

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
        contact:{
            name: '',
        },
        isChecked: false,
        checkedId: ''
    }

    onContactChange = event => {
        this.setState({
            contact:
            {
                name: event.target.value
            }
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

    onEstCostChange = event => {
        this.setState({
            est_cost: event.target.value
        })
    }

    onEstFinishChange = event => {
        this.setState({
            est_finish: event.target.value
        })
    }

    onStartDateChange = event => {
        this.setState({
            start_date: event.target.value
        })
    }

    onEndDateChange = event => {
        this.setState({
            end_date: event.target.value
        })
    }
    onMaterialsChange = event => {
        this.setState({
            materials: event.target.value
        })
    }

    onActCostChange = event => {
        this.setState({
            actual_cost: event.target.value
        })
    }

    onCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }

    onSatisfactionChange = event => {
        this.setState({
            satisfaction: event.target.value
        })
    }


    onClick = e => {
        e.preventDefault();
        this.props.addNewProject(this.state);
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
        let response = await axios.post('http://localhost:5000/api/projects', project)
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
      
      deleteProjects() {
        for (let i = 59; i <= 65; i++) {
            axios.delete(`http://localhost:5000/api/projects/${i}`);
        }
    }
   
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
                                    <input type="text" value={this.state.contact.name} onChange={this.onContactChange} className="form-control" placeholder="" />
                                
                            </div>
                            <div className="form-group">
                                
                                    <label>Address</label>
                                    <input type="text" value={this.state.address} onChange={this.onAddressChange} className="form-control" placeholder="" />
                                
                            </div>
                            <div className="form-group">
                                    
                                    <label>City</label>
                                    <input type="text" value={this.state.city} onChange={this.onCityChange} className="form-control" placeholder="" />
                                
                            </div>
                            <div className="form-group">
                            
                                    <label>Zip</label>
                                    <input type="text" value={this.state.zip} onChange={this.onZipChange} className="form-control" placeholder="" />
                                
                            </div>
                            <div className="form-group">
                            
                                    <label>Est. Cost</label>
                                    <input type="text" value={this.state.est_cost} onChange={this.onEstCostChange} className="form-control" placeholder="" />
                                
                            </div>
                            <div className="form-group">
                            
                                    <label>Est. Finish Date</label>
                                    <input type="text" value={this.state.est_finish} onChange={this.onEstFinishChange} className="form-control" placeholder="" />
                                
                            </div>
                            <div className="form-group">
                            
                                    <label>Start Date</label>
                                    <input type="text" value={this.state.start_date} onChange={this.onStartDateChange} className="form-control" placeholder="" />
                                
                            </div>
                            <div className="form-group">
                      
                                    <label>Materials</label>
                                    <input type="text" value={this.state.materials} onChange={this.onMaterialsChange} className="form-control" placeholder="" />
                                
                            </div>
                            <div className="form-group">
                                    <label>Comments</label>
                                    <input type="text" value={this.state.comments} onChange={this.onCommentsChange} className="form-control" placeholder="" />
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

                    
// export default NewProjectForm;