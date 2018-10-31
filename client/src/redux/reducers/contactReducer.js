import {
    ADD_CONTACT,
    EDIT_CONTACT,
    DELETE_CONTACT,
    FETCH_CONTACT,
    RECEIVED_CONTACT
}from '../constants'


const initialState = {
    isLoggedin: false,
    isLoading: false,
    constants: [],
    employees: [],
    projects: [],
    bids: [],
  
}

const contactReducer = (state = intitialState, action) => {
    switch (action.type) {
        case RECIEVED_CONTACT:
        return { 
            ...state,
            contacts: action.payload,
            isLoading: false
        }
        case FETCH_CONTACT:
        return {
            ...state,
            contacts: [...action.payload],
            isLoading: true
          }
        case ADD_CONTACT:
          return {
            ...state,
            contacts: [...state.contacts, action.payload]
          }
        case EDIT_CONTACT:
          let updatedContact = action.payload;
          let index = state.contacts.findIndex(x => x.contact_id === updatedContact.contact_id)
          return {
            ...state,
            contacts: [
              ...state.contacts.slice(0, index),
              updatedContact,
              ...state.contacts.slice(index + 1)
            ]
          }
        case DELETE_CONTACT:
          // let deletedContactId = action.payload.contact_id;
          // let index = state.contacts.findIndex(x => x.contact_id === deletedContactId)
          return {
            ...state,
            contacts: action.payload
            // contacts: [
              // ...state.contacts.slice(0, index),
              // ...state.contacts.slice(index + 1)
            // ]
          }
    
    
        default:
          return state;
      }
    }
    
    export default contactReducer;
    
    