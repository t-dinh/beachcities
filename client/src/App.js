import React, { Component } from 'react';
import Login from './components/login';
import Employee from './components/employee'

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
      </div>
    );
  }
}

export default App;
