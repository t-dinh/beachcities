import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Contacts from './pages/contacts';
import Employee from './pages/employees';


class DataTable extends Component {
    state = {
    }


    render() {
        return (
            <div className="container">
            <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.."></input>
            </div>
        );
    }
}

export default DataTable;
