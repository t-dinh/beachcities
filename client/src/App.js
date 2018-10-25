import './App.css';

import React, { Component } from 'react';
// import {Switch, Route} from 'react-router-dom';
import Login from './components/login';
// import Employee from './components/employee';
// import DataTable from './components/dataTable';
// import Projects from './components/pages/projects';
// import Contacts from './components/pages/contacts';



class App extends Component {
  render() {
    return (
      <div className="App">

        <Login></Login>
      </div>
    );
  }
}

export default App;
