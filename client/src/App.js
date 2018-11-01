
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Contacts from './components/pages/contacts';
import Bids from './components/pages/bids';
import Projects from './components/pages/projects'
import Login from './components/login';
import Employees from './components/pages/employees';
import EmployeeUpdateForm from './components/forms/EmployeeUpdateForm';
import ProjectUpdateForm from './components/forms/ProjectUpdateForm';
import BidUpdateForm from './components/forms/BidsUpdateForm';
// import NewEmployeeForm from './components/forms/newEmployeeForm';
// import NewContactForm from './components/forms/newContactForm';
// import NewBidForm from './components/forms/newBidForm';
// import NewProjectForm from './components/forms/newProjectForm';
// import Calendar from 'react-calendar';
import Navbar from './components/navbar';
import './App.css';
import ContactUpdateForm from './components/forms/ContactUpdateForm';


class App extends Component {
  state = {
    admin: [
      {
        username: 'jtorres',
        password: 'fj39g883'
    }
    ],
    loggedin: false
  };

  login = (username, password) => {
    let adminUser = this.state.admin.filter(account => account.username === username && account.password === password);
    return this.state.loggedin = true;
  }
componentDidMount() {
  console.log(this.state.admin.username)
}

  render() {
    return (
      <div className="container">
      
        {
          this.state.loggedin && <div className="navbar"><Navbar /> Welcome, {this.state.admin.username}</div>
        }
          <div>
        <Switch>
          <Route exact path="/" render={() => <Login login={this.login} />} />
          <Route path="/contacts" render={() => <Contacts />} />
          <Route path="/employee" render={() => <Employees />} />
          <Route path="/bids" render={() => <Bids />} />
          <Route path="/projects" render={() => <Projects />} />
          <Route path="/update" render={() => <EmployeeUpdateForm />} />
          <Route path="/updateProject" render={() => <ProjectUpdateForm />} />
          <Route path="/updateBid" render={() => <BidUpdateForm />} />
          <Route path="/updateContact" render={() => <ContactUpdateForm />} />

        </Switch>
        </div>

      </div>
    );
  }
}
//test

export default App;

