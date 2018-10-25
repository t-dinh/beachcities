import React, { Component } from 'react';
import Login from './components/login';
<<<<<<< HEAD
import Employee from './components/employee'

=======
import DataTable from './components/dataTable';
>>>>>>> 7ae7b6313f82a761be24a81597ed3ac996a4c7b9
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Contacts from './components/pages/contacts';

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <DataTable />
        <Switch>
            <div className="container">
            <Route exact path="/" render={() => <DataTable />} />
            <Route path="/contacts" render={() => <Contacts />}/>
            {/* <Route path="/employees" component={Employee} /> */}
            </div>
            </Switch>
            {/* <Contacts /> */}

=======
<<<<<<< HEAD
        <Login />
        <Employee />
=======
        {/* <Login /> */}
        <DataTable />
>>>>>>> 7ae7b6313f82a761be24a81597ed3ac996a4c7b9
>>>>>>> ff342692aa7ef17fde87d7ad9317788f77ec18dd
      </div>
    );
  }
}

export default App;
