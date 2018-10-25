import React, { Components } from 'react';
import axios from 'axios';

class Projects extends Component {
    state = {
        projects: []
    }

    grabProjects = data => {
        axios.get('http://localhost:5000/api/')
            .then(res => {
                this.setState({
                    projects: res.data
                })
            })
    }

    componentDidMount() {
        this.grabProjects();
    }



    render() {
        return ( 

         );
    }
}

export default Projects;