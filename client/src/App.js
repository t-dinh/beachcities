import React, { Component } from 'react';
import Login from './components/login';
import Employees from './components/employee';
import DataTable from './components/dataTable';
import Projects from './components/pages/projects';
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
            <Route path="/employees" render={() => <Employees />} />
            </div>
            </Switch>        
      </div>
    );
  }
}

export default App;
