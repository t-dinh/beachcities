import { combineReducers } from 'redux'
import projectReducer from './projectReducer'
import employeeReducer from './employeeReducer'


export default combineReducers({
  employeeReducer,
  projectReducer,
  contactReducer,
  
})