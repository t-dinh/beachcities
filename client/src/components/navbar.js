import React, { Component } from 'react';

import { Link } from 'react-router-dom'


class Navbar extends Component {
    render() {
        return (

            <div className="navbar">
                <div id="button-links-container">
                    <Link to="/employee"><a className="btn btn-primary">Employees</a></Link>
                    <Link to="/contacts"><a className="btn btn-secondary">Contacts</a></Link>
                    <Link to="/bids"><a className="btn btn-info">Bids</a></Link>
                    <Link to="/projects"><a className="btn btn-success">Projects</a></Link>
                   
                </div>
            </div>
        );
    }
}
export default Navbar;  