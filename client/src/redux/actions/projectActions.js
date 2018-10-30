import {

    ADD_PROJECT,
    DELETE_PROJECT,
    EDIT_PROJECT,
  } from '../constants'
  import axios from 'axios';
  
  export const getProjects = () => dispatch =>
    axios.get("http://localhost:5000/api/projects")
      .then(res => {
        dispatch({ type: FETCH_PROJECT, payload: res.data })
      })
  
  export const addProject = (project) => dispatch =>
    axios.post('http://localhost:5000/api/projects', project)
      .then(res => {
        dispatch({ type: ADD_PROJECT, payload: res.data })
      });
  
  export const editProject = (project) => dispatch =>
    axios.put(`http://localhost:5000/api/projects/${project.project_id}`, project)
      .then(res => {
        dispatch({ type: EDIT_PROJECT, payload: res.data })
      })
  
  export const deleteProject = (id) => dispatch =>
    axios.delete(`http://localhost:5000/api/projects/${id}`)
      .then(res => {
        dispatch({ type: DELETE_PROJECT, payload: res.data })
      });

  
  
  