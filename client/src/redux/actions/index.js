import {
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  EDIT_EMPLOYEE,
  FETCH_EMPLOYEE,

  ADD_PROJECT,
  DELETE_PROJECT,
  EDIT_PROJECT,
  FETCH_PROJECT,
  STORE_PROJECT,

  ADD_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
  FETCH_CONTACT,
  STORE_CONTACT,

  ADD_BID,
  DELETE_BID,
  EDIT_BID,
  STORE_EMPLOYEE, 
  FETCH_BID,
  STORE_BID
} from '../constants'
import axios from 'axios';


/**
 * =-=-=-=-=-=-=-=-= EMPLOYEE ACTIONS
*/

export const getEmployees = () => dispatch => {
console.log("get employees");
  axios.get("http://localhost:5000/api/employees")
    .then(res => {
      dispatch({ type: FETCH_EMPLOYEE, payload: res.data })
    })}

export const addEmployee = (employee) => dispatch =>
  axios.post('http://localhost:5000/api/employees', employee)
    .then(res => {
      dispatch({ type: ADD_EMPLOYEE, payload: res.data })
    });

export const storeEmployee = (employee) => dispatch =>
    dispatch({ type: STORE_EMPLOYEE, payload: employee})

export const editEmployee = (id, employee) => dispatch => {
    console.log('from redux action');
    console.log(employee);
  axios.put(`http://localhost:5000/api/employees/${id}`, employee)
    .then(res => {
      dispatch({ type: EDIT_EMPLOYEE, payload: res.data })
    })
  }

export const deleteEmployee = (id) => dispatch => {
  console.log("id" , id);
  axios.delete("http://localhost:5000/api/employees/", { data: id })
    .then(res => {
      console.log('delete res', res);
      dispatch({ type: DELETE_EMPLOYEE, payload: res.data })
    })};

/**
 * =-=-=-=-=-=-=-=-=PROJECTS ACTIONS
*/    

export const getProjects = () => dispatch => {
console.log("getProjects");
  axios.get("http://localhost:5000/api/projects")
    .then(res => {
      dispatch({ type: FETCH_PROJECT, payload: res.data })
    })}

export const addProject = (project) => dispatch =>
  axios.post('http://localhost:5000/api/projects', project)
    .then(res => {
      dispatch({ type: ADD_PROJECT, payload: res.data })
    });

export const storeProject = (project) => dispatch =>
    dispatch({ type: STORE_PROJECT, payload: project})

    export const editProject = (id, project) => dispatch => {
      console.log('editing the project');
      console.log(project);
    axios.put(`http://localhost:5000/api/projects/${id}`, project)
      .then(res => {
        dispatch({ type: EDIT_PROJECT, payload: res.data })
      })
    }

export const deleteProject = (id) => dispatch =>
  axios.delete(`http://localhost:5000/api/projects/${id}`)
    .then(res => {
      dispatch({ type: DELETE_PROJECT, payload: res.data })
    });

/**
 * =-=-=-=-=-=-=-=-=CONTACTS ACTIONS
*/

export const getContacts = () => dispatch =>
    axios.get("http://localhost:5000/api/contacts")
      .then(res => {
        dispatch({ type: FETCH_CONTACT, payload: res.data })
      })
  
  export const addContact = (contact) => dispatch =>
    axios.post('http://localhost:5000/api/contacts', contact)
      .then(res => {
        dispatch({ type: ADD_CONTACT, payload: res.data })
      });
  
  export const editContact = (id, contact) => dispatch =>
    axios.put(`http://localhost:5000/api/contacts/${id}`, contact)
      .then(res => {
        dispatch({ type: EDIT_CONTACT, payload: res.data })
      })

   export const storeContact = (contact) => dispatch =>
    dispatch({ type: STORE_CONTACT, payload: contact})
  
  export const deleteContact = (id) => dispatch =>
    axios.delete(`http://localhost:5000/api/contacts/${id}`)
      .then(res => {
        dispatch({ type: DELETE_CONTACT, payload: res.data })
      });


/**
 * =-=-=-=-=-=-=-=-=BID ACTIONS 
*/

export const getBids = () => dispatch =>
    axios.get("http://localhost:5000/api/bids")
      .then(res => {
        dispatch({ type: FETCH_BID, payload: res.data })
      })
  
  export const addBid = (bid) => dispatch =>
    axios.post('http://localhost:5000/api/bids', bid)
      .then(res => {
        dispatch({ type: ADD_BID, payload: res.data })
      })
  
  export const editBid = (bid) => dispatch =>
    axios.put(`http://localhost:5000/api/bids/${bid.bid_id}`, bid)
      .then(res => {
        dispatch({ type: EDIT_BID, payload: res.data })
      })

   export const storeBid = (bid) => dispatch =>
    dispatch({ type: STORE_BID, payload: bid})
  
  export const deleteBid = (id) => dispatch =>
    axios.delete(`http://localhost:5000/api/bids/${id}`)
      .then(res => {
        dispatch({ type: DELETE_BID, payload: res.data })
      })



