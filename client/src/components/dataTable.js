import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Contacts from './pages/contacts';
import Employee from './pages/employees';


class DataTable extends Component {
    state = {
    }


    render() {
        return (
            <div>
            
            <div className="header">
            <Link to="/">DataPage</Link>
            <Link to="/contacts">Contacts</Link>
            <Link to="/employees">Employees</Link>
            </div>
            </div>
        );
    }
}

export default DataTable;
