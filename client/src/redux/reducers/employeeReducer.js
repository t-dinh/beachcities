import {
    ADD_EMPLOYEE,
    DELETE_EMPLOYEE,
    EDIT_EMPLOYEE,
    FETCH_EMPLOYEE,
    RECEIVED_EMPLOYEE
  } from '../constants'
  
  
  const initialState = {
    isLoggedin: false,
    isLoading: false,
    employees: [],
    projects: [],
    bids: [],
    contacts: []
  }
  
  const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
      case RECEIVED_EMPLOYEE:
        return {
          ...state,
          employees: [action.payload],
          isLoading: false
        }
      case FETCH_EMPLOYEE:
        return {
          ...state,
          employees: [...action.payload],
          isLoading: true
        }
      case ADD_EMPLOYEE:
        return {
          ...state,
          employees: [...state.employees, action.payload]
        }
      case EDIT_EMPLOYEE:
        let updatedEmployee = action.payload;
        let i = state.employees.findIndex(x => x.employee_id === updatedEmployee.employee_id)
        return {
          ...state,
          employees: [
            ...state.employees.slice(0, i),
            updatedEmployee,
            ...state.employees.slice(i + 1)
          ]
        }
      case DELETE_EMPLOYEE:
        let deletedEmployeeId = action.payload.employee_id;
        let index = state.employees.findIndex(x => x.employee_id === deletedEmployeeId)
        return {
          ...state,
          employees: [
            ...state.employees.slice(0, index),
            ...state.employees.slice(index + 1)
          ]
        }
  
  
      default:
        return state;
    }
  }
  
  export default employeeReducer;
  