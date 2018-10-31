import {
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  EDIT_EMPLOYEE,
  RECEIVED_EMPLOYEE,
  ADD_PROJECT,
  DELETE_PROJECT,
  EDIT_PROJECT,
  FETCH_PROJECT,
  RECEIVED_PROJECT,
  ADD_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
  ADD_BID,
  DELETE_BID,
  EDIT_BID,
  FETCH_EMPLOYEE,
  FETCH_CONTACT
} from '../constants'
import axios from 'axios';

export const getEmployees = () => dispatch => {
console.log("hello");
  axios.get("http://localhost:5000/api/employees")
    .then(res => {
      dispatch({ type: FETCH_EMPLOYEE, payload: res.data })
    })}

export const addEmployee = (employee) => dispatch =>
  axios.post('http://localhost:5000/api/employees', employee)
    .then(res => {
      dispatch({ type: ADD_EMPLOYEE, payload: res.data })
    });

export const editEmployee = (employee) => dispatch =>
  axios.put(`http://localhost:5000/api/employees/${employee.employee_id}`, employee)
    .then(res => {
      dispatch({ type: EDIT_EMPLOYEE, payload: res.data })
    })

export const deleteEmployee = (id) => dispatch => {
  console.log("id" , id);
  axios.delete("http://localhost:5000/api/employees/", { data: id })
    .then(res => {
      console.log('delete res', res);
      dispatch({ type: DELETE_EMPLOYEE, payload: res.data })
    })};


// export const getEmployees = (employees) => dispatch => {
//   dispatch({ type: FETCH_EMPLOYEE });

//   axios.get(`https://localhost:5000/api/employees`) 
//       .then(res => {
//           console.log(res.data);
//           let employees = res.data.employees.map(employee => ({
//               employee_id: employee.employee_id,
//               name: employee.name,
//               phone: employee.phone,
//               email: employee.email,
//               address: employee.address,
//               city: employee.city,
//               status: employee.status
//           }))
//           dispatch({ type: FETCH_EMPLOYEE, payload: employees })
//       });
// }


// export const sendData = data => ({ type: ADD_EMPLOYEE, payload: data })

export const getProjects = () => dispatch => {
console.log("hello");
  axios.get("http://localhost:5000/api/projects")
    .then(res => {
      dispatch({ type: FETCH_PROJECT, payload: res.data })
    })}

export const addProject = (project) => dispatch =>
  axios.post('http://localhost:5000/api/projects', project)
    .then(res => {
      dispatch({ type: ADD_PROJECT, payload: res.data })
    });

export const editProject = (project) => dispatch =>
  axios.put(`http://localhost:5000/api/projects/${project.project_id}`, project)
    .then(res => {
      dispatch({ type: EDIT_PROJECT, payload: res.data })
    })

export const deleteProject = (id) => dispatch =>
  axios.delete(`http://localhost:5000/api/projects/${id}`)
    .then(res => {
      dispatch({ type: DELETE_PROJECT, payload: res.data })
    });

// export const ADD_EMPLOYEE
// export const DELETE_EMPLOYEE
// export const EDIT_EMPLOYEE



// export const ADD_PROJECT
// export const DELETE_PROJECT
// export const EDIT_PROJECT



// export const ADD_CONTACT
// export const DELETE_CONTACT
// export const EDIT_CONTACT
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
  
  export const editContact = (contact) => dispatch =>
    axios.put(`http://localhost:5000/api/contacts/${contact.contact_id}`, contact)
      .then(res => {
        dispatch({ type: EDIT_CONTACT, payload: res.data })
      })
  
  export const deleteContact = (id) => dispatch =>
    axios.delete(`http://localhost:5000/api/contacts/${id}`)
      .then(res => {
        dispatch({ type: DELETE_CONTACT, payload: res.data })
      });


// export const ADD_BID
// export const DELETE_BID
// export const EDIT_BID







