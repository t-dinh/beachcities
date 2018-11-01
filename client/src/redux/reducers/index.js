import { combineReducers } from 'redux'
import projectReducer from './projectReducer'
import employeeReducer from './employeeReducer'
import contactReducer from './contactReducer'
import bidReducer from './bidReducer'


export default combineReducers({
  employeeReducer,
  projectReducer,
  contactReducer,
  bidReducer
  
})