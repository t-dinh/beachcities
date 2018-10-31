import {
  ADD_PROJECT,
  DELETE_PROJECT,
  EDIT_PROJECT,
  FETCH_PROJECT,
  RECEIVED_PROJECT
} from '../constants'


const initialState = {
  isLoggedin: false,
  isLoading: false,
  employees: [],
  projects: [],
  bids: [],
  contacts: []
}

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVED_PROJECT:
      return {
        ...state,
        projects: [action.payload],
        isLoading: false
      }
    case FETCH_PROJECT:
      return {
        ...state,
        projects: [...action.payload],
        isLoading: true
      }
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload]
      }
    case EDIT_PROJECT:
      let updatedProject = action.payload;
      let i = state.projects.findIndex(x => x.project_id === updatedProject.project_id)
      return {
        ...state,
        projects: [
          ...state.projects.slice(0, i),
          updatedProject,
          ...state.projects.slice(i + 1)
        ]
      }
    case DELETE_PROJECT:
      let deletedProjectId = action.payload.project_id;
      let index = state.projects.findIndex(x => x.project_id === deletedProjectId)
      return {
        ...state,
        projects: [
          ...state.projects.slice(0, index),
          ...state.projects.slice(index + 1)
        ]
      }


    default:
      return state;
  }
}

export default projectReducer;
