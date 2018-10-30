import {
    ADD_CONTACT,
    EDIT_CONTACT,
    DELETE_CONTACT,
}from '../constants'


const initialState = {
    isLoggedin: false,
    isLoading: false,
    constants: []
}

const contactReducer = (state = intitialState, action) => {
    switch (action.type) {
        case RECIEVED_CONTACT:
        return { 
            ...state,
            contact: action.payload,
            isLoading: false
        }
        case FETCH_CONTACT:
        return {
            ...state,
            isLoading: true
          }
        case ADD_CONTACT:
          return {
            ...state,
            contact: [...state.contact, action.payload]
          }
        case EDIT_CONTACT:
          let updatedContact = action.payload;
          let index = state.contact.findIndex(x => x.contact_id === updatedContact.contact_id)
          return {
            ...state,
            contact: [
              ...state.contact.slice(0, index),
              updatedContact,
              ...state.contact.slice(index + 1)
            ]
          }
        case DELETE_CONTACT:
          let deletedContactId = action.payload.contact_id;
          let index = state.contact.findIndex(x => x.contact_id === deletedContactId)
          return {
            ...state,
            contact: [
              ...state.contact.slice(0, index),
              ...state.contact.slice(index + 1)
            ]
          }
    
    
        default:
          return state;
      }
    }
    
    export default contactReducer;
    
    