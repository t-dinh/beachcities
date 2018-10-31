import { combineReducer } from 'redux'
import projectReducer from './projectReducer';
import employeeReducer from './employeeReducer';
import contactReducer from './contactReducer';
export default combineReducer({
  employeeReducer,
  contactReducer,
  projectReducer
})