import React, { Component } from 'react';
import Login from './components/login';
import DataTable from './components/dataTable';
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
            <Route exact path="/" render={() => <DataTable />} />
            <Route path="/contacts" render={() => <Contacts />}/>
            {/* <Route path="/employees" component={Employee} /> */}
            </div>
            </Switch>
            {/* <Contacts /> */}

      </div>
    );
  }
}

export default App;
