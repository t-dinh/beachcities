import {
    ADD_CONTACT,
    DELETE_CONTACT,
    EDIT_CONTACT,

} from '../constants'
import axios from 'axios';

  
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

