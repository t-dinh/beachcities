import React, { Component } from 'react';

import { Link } from 'react-router-dom'


class Navbar extends Component {
    render() {
        return (
    
            <div className="navbar">
            <div id="button-links-container">
                {/* <Link to="/dataTable"><a className="btn btn-link">Homepage</a></Link> */}
                <Link to="/employee"><a className="btn btn-link">Employees</a></Link>
                <Link to="/contacts"><a className="btn btn-link">Contacts</a></Link>
                <Link to="/bids"><a className="btn btn-link">Bids</a></Link>
                <Link to="/projects"><a className="btn btn-link">Projects</a></Link>
            </div>
            </div>
        );
      }
    }
    export default Navbar;