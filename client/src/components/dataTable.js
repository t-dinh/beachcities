import React, { Component } from 'react';
import axios from 'axios';


class DataTable extends Component {
    state = {
        employees: [],
        projects: [],
        contacts: []
    }

    grabData = data => {
        axios.get('http://localhost:5000/api/contacts')
        .then(res => {
            this.setState({
                employees: res.data,
                projects: res.data,
                contacts: res.data
            })
    })
}
//test
//test
    componentDidMount() {
        this.grabData();
    }


    render() {
        return (
            <div className="container">
                <div className="nav"><button className="btn btn-link">Employees</button></div>
                <div className="tableBox">
                    {/* what gets rendered in this table will come from the database */}
                    <table className="table">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                        {this.state.contacts.map(c => {
                            return(
                        <tr className="hoverButton">
                            <td>{c.contact_id}</td>
                            <td>{c.name}</td>
                            <td>{c.phone}</td>
                            <td>{c.email}</td>
                            <button className="btn btn-danger" id="showButtons">x</button>
                        </tr>
                        
                        )})}
                    </table>
                </div>
            </div>
        );
    }
}

export default DataTable;
