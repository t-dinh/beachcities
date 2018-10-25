import React, { Component } from 'react';
import axios from 'axios'

class Contacts extends Component {
    state = {
        contacts: []
    }

    grabData = data => {
        axios.get('http://localhost:5000/api/contacts')
        .then(response => {
            console.log(response.server.contacts)
            let contacts = response.server.contacts;
            this.setState({
    
                contacts: contacts
            })
    });
}
    componentDidMount() {
        this.grabData();
    }

    render() {
        return (
    
           <div>Contacts</div>
        );
      }
    }
    export default Contacts;