import React, { Component } from 'react';
<<<<<<< HEAD
import { Switch, Route } from 'react-router-dom';
import DataTable from './components/dataTable';
import Navbar from './components/navbar';
import Employee from './components/employee';
import Contacts from './components/contacts';
import Bids from './components/bids';
import Projects from './components/projects';
=======
import Login from './components/login';
import Employee from './components/employee'

>>>>>>> a24c3b4bc2db817bb913da00c0cd47011ce09d69
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Contacts from './components/pages/contacts';

class App extends Component {
  render() {
    return (
      <div className="App">

        <DataTable />
        <Switch>
            <div className="container">
            <Route exact path="/" render={() => <Projects />} />
            <Route path="/contacts" render={() => <Contacts />}/>
            {/* <Route path="/employees" component={Employee} /> */}
            </div>
            </Switch>
            {/* <Contacts /> */}

        {/* <Login /> */}
        <DataTable />
        <Navbar/>
        <Switch>
          <Route path="/homepage" render={()=> <DataTable />} />
          <Route path="/employee" render={()=> <Employee />} />
          <Route path="/contacts" render={()=> <Contacts />} />
          <Route path="/bids" render={()=> <Bids />} />
          <Route path="/projects" render={()=> <Projects />} />
        </Switch>

      </div>
    );
  }
}

export default App;
