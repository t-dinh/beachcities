import {
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  EDIT_EMPLOYEE,
  RECEIVED_EMPLOYEE,
  ADD_PROJECT,
  DELETE_PROJECT,
  EDIT_PROJECT,
  ADD_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
  ADD_BID,
  DELETE_BID,
  EDIT_BID,
  FETCH_EMPLOYEE
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



// export const ADD_EMPLOYEE
// export const DELETE_EMPLOYEE
// export const EDIT_EMPLOYEE



// export const ADD_PROJECT
// export const DELETE_PROJECT
// export const EDIT_PROJECT



// export const ADD_CONTACT
// export const DELETE_CONTACT
// export const EDIT_CONTACT



// export const ADD_BID
// export const DELETE_BID
// export const EDIT_BID







