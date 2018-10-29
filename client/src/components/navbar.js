import React, { Component } from 'react';

import { Link } from 'react-router-dom'


class Navbar extends Component {
    render() {
        return (

            <div className="navbar">
                <div id="button-links-container">
                    <Link to="/website"><a className="btn btn-primary">Website</a></Link>
                    <Link to="/login"><a className="btn btn-primary">Login</a></Link>
                    {/* <Link to="/dataTable"><a className="btn btn-link">Homepage</a></Link> */}
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