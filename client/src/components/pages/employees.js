// import React, { Component } from 'react';
// import axios from 'axios';

// class Employee extends Component {
//     state = {
//         employees: []
//     }


//     grabEmployee = data => {
//         axios.get('http://localhost:5000/api/contacts')
//             .then(res => {
//                 this.setState({
//                     employees: res.data
//                 })
//             })
//     }
//     //test

//     componentDidMount() {
//         this.grabEmployee();
//     }

//     render() {
//         return (
//             <div>
//                 <div className="nav"><button className="btn btn-link">Clients</button></div>
//                 <div className="tableBox">
//                     {/* what gets rendered in this table will come from the database */}
//                     <table className="table">
//                         <tr>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Address</th>
//                             <th>Phone</th>
//                             <th>Projects</th>
//                             <th>Status</th>
//                             <th>Comments</th>
//                         </tr>
//                         {this.state.employees.map(c => {
//                             return (
//                                 <tr className="hoverButton">
//                                     <td>{c.name}</td>
//                                     <td>{c.phone}</td>
//                                     <td>{c.email}</td>
//                                     <button className="btn btn-danger" id="showButtons">x</button>
//                                 </tr>
//                             )
//                         })}
//                     </table>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Employee;