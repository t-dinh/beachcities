import {
    ADD_EMPLOYEE,
    DELETE_EMPLOYEE,
    EDIT_EMPLOYEE,
    ADD_PROJECT,
    DELETE_PROJECT,
    EDIT_PROJECT,
    ADD_CONTACT,
    DELETE_CONTACT,
    EDIT_CONTACT,
    ADD_BID,
    DELETE_BID,
    EDIT_BID,
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
          employees: action.payload,
          isLoading: false
        }
      case FETCH_EMPLOYEE:
        return {
          ...state,
          isLoading: true
        }
      case ADD_EMPLOYEE:
        return {
          ...state,
          employees: [...state.employees, action.payload]
        }
      case EDIT_EMPLOYEE:
        let updatedEmployee = action.payload;
        let index = state.employees.findIndex(x => x.employee_id === updatedEmployee.employee_id)
        return {
          ...state,
          employees: [
            ...state.employees.slice(0, index),
            updatedEmployee,
            ...state.employees.slice(index + 1)
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
  