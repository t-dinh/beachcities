import {
  ADD_BID,
  DELETE_BID,
  EDIT_BID,
  FETCH_BID,
  RECEIVED_BID,
  STORE_BID
} from '../constants'


const initialState = {
  isLoggedin: true,
  isLoading: false,
  employees: [],
  projects: [],
  bids: [],
  contacts: [],
  editingObject: {}
}

const bidReducer = (state = initialState, action) => {
  let index;
  switch (action.type) {
    case RECEIVED_BID:
      return {
        ...state,
        bids: [action.payload],
        isLoading: false
      }
    case FETCH_BID:
      return {
        ...state,
        bids: action.payload,
        isLoading: true
      }
    case ADD_BID:
      return {
        ...state,
        bids: [...state.bids, action.payload]
      }
    case EDIT_BID:
      let updatedBid = action.payload;
      index = state.bids.findIndex(x => x.bid_id === updatedBid.bid_id)
      console.log(index)
      return {
        ...state,
        bids: [
          ...state.bids.slice(-1, index),
          updatedBid,
          ...state.bids.slice(index + 0)
        ]
      }
      
      case STORE_BID:
      return {
        ...state,
        editingObject: action.payload
      }
    case DELETE_BID:
      // let deletedBidId = action.payload.bid_id;
      // let index = state.bids.findIndex(x => x.bid_id === deletedBidId)
      return {
        ...state,
        bids: action.payload
        // bids: [
        //   ...state.bids.slice(0, index),
        //   ...state.bids.slice(index + 1)
        // ]
      }


    default:
      return state;
  }
}

export default bidReducer;
