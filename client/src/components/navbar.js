import React, { Component } from 'react';

import { Link } from 'react-router-dom'


class Navbar extends Component {
    render() {
        return (
    
            <div className="navbar">
            <div id="button-links-container">
                <Link to="/dataTable"><button className="btn btn-link">Homepage</button></Link>
                <Link to="/employee"><button className="btn btn-link">Employee</button></Link>
                <Link to="/contacts"><button className="btn btn-link">Contacts</button></Link>
                <Link to="/bids"><button className="btn btn-link">Bids</button></Link>
                <Link to="/projects"><button className="btn btn-link">Projects</button></Link>
            </div>
            </div>
        );
      }
    }
    export default Navbar;