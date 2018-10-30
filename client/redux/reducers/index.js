import { combineReducer } from 'redux'

import employeeReducer from './employeeReducer';
import contactReducer from './contactReducer';
export default combineReducer({
  employeeReducer,
  contactReducer
})