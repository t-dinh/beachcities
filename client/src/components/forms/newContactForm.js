// import React, { Component } from 'react';
// import axios from 'axios';

// class NewContactForm extends Component {

//     state = {
//         name: '',
//         phone: '',
//         email: '',
//         address: '',
//         city: '',
//         zip: '',
//         status: '',
//         comments: ''
//     }

//     onNameChange = event => {
//         this.setState({
//             name: event.target.value
//         })
//     }

//     onPhoneChange = event => {
//         this.setState({
//             phone: event.target.value
//         })
//     }

//     onEmailChange = event => {
//         this.setState({
//             email: event.target.value
//         })
//     }

//     onAddressChange = event => {
//         this.setState({
//             address: event.target.value
//         })
//     }
//     onCityChange = event => {
//         this.setState({
//             city: event.target.value
//         })
//     }

//     onZipChange = event => {
//         this.setState({
//             zip: event.target.value
//         })
//     }

//     onStatusChange = event => {
//         this.setState({
//             status: event.target.value
//         })
//     }

//     onCommentsChange = event => {
//         this.setState({
//             comments: event.target.value
//         })
//     }

//     // formLogin = event => {
//     //     event.preventDefault();

//     //     this.props.addToItems(this.state);

//     //     this.setState({
//     //         username: ' ',
//     //         password: ' '
//     //     })
//     // }

//     render() {
//         return (
//             <div className="login-page-background">
//                 <div className='container'>
                    
                    
                    
//                     <div className="row title-row">
                        
//                     </div>
//                     <div className="row">
//                         <div class="col-md-4 div-height"></div>
//                         <div class="col-md-4 div-height" style ={{background: 'blue'}}>
//                         <h2> Add New Contact </h2>

//                     {/* FORM CODE */}
//                     <div className="form-group form-group-top">
//                                 <login onSubmit={this.formLogin}>
//                                     <label>Contact Name</label>
//                                     <input type="text" value={this.state.name} onChange={this.onNameChange} className="form-control" placeholder="" />
//                                 </login>
//                             </div>
//                             <div className="form-group">
//                                     <login onSubmit={this.formLogin}>
//                                     <label>Phone</label>
//                                     <input type="text" value={this.state.phone} onChange={this.onPhoneChange} className="form-control" placeholder="" />
//                                 </login>
//                             </div>
//                             <div className="form-group">
//                             <login onSubmit={this.formLogin}>
//                                     <label>Email</label>
//                                     <input type="text" value={this.state.email} onChange={this.onEmailChange} className="form-control" placeholder="" />
//                                 </login>
//                             </div>
//                             <div className="form-group">
//                             <login onSubmit={this.formLogin}>
//                                     <label>Address</label>
//                                     <input type="text" value={this.state.address} onChange={this.onAddressChange} className="form-control" placeholder="" />
//                                 </login>
//                             </div>
//                             <div className="form-group">
//                             <login onSubmit={this.formLogin}>
//                                     <label>City</label>
//                                     <input type="text" value={this.state.city} onChange={this.onCityChange} className="form-control" placeholder="" />
//                                 </login>
//                             </div>
//                             <div className="form-group">
//                             <login onSubmit={this.formLogin}>
//                                     <label>Zip</label>
//                                     <input type="text" value={this.state.zipCode} onChange={this.onZipChange} className="form-control" placeholder="" />
//                                 </login>
//                             </div>
//                             <div className="form-group">
//                             <login onSubmit={this.formLogin}>
//                                     <label>Status</label>
//                                     <input type="text" value={this.state.status} onChange={this.onStatusChange} className="form-control" placeholder="" />
//                                 </login>
//                             </div>
//                             <div className="form-group">
//                                     <label>Comments</label>
//                                     <input type="text" value={this.state.comments} onChange={this.onCommentsChange} className="form-control" placeholder="" />
//                                     <button className="btn btn-primary swap" float-right onClick={() => { /*this.props.changePage("logInPage")*/ }}> Submit </button>
//                             </div>
//                             </div>
//                             <div class="col-md-4 div-height"></div>
//                      {/* END FORM CODE */}


//                         </div>
                    
                    
                    
//                     </div >
//                 </div>


//                 );
//             }
        
//         }
        

                    
// export default NewContactForm;