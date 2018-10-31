import { combineReducers } from 'redux'
import projectReducer from './projectReducer'
import employeeReducer from './employeeReducer'
import contactReducer from './contactReducer'


export default combineReducers({
  employeeReducer,
  projectReducer,
  contactReducer,
  
})