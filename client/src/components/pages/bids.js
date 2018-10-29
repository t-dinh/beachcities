import React, { Component } from 'react';
import axios from 'axios';
import NewBidForm from '../forms/newBidForm';

class Bids extends Component {
    state = {
        Bids: [],
        id:'',
        consult_date: '',
        address: '',
        phone: '',
        city: '',
        zip: '',
        est_cost:'',
        est_finish:'',
        status: '',
        comments: '',
        contact:'',
        isChecked: false,
        checkedId: ''
    }

    onNameChange = e => {
        this.setState({
            name: e.target.value
        })
    }
    onPhoneChange = event => {
        this.setState({
            phone: event.target.value
        })
    }

    onEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    }

    onAddressChange = event => {
        this.setState({
            address: event.target.value
        })
    }
    onCityChange = event => {
        this.setState({
            city: event.target.value
        })
    }

    onZipChange = event => {
        this.setState({
            zip: event.target.value
        })
    }

    onStatusChange = event => {
        this.setState({
            status: event.target.value
        })
    }

    onSatisfactionChange = event => {
        this.setState({
            satisfaction: event.target.value
        })
    }
    onCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }

    onClick = async e => {
        e.preventDefault();
        this.addNewBid();
        this.setState({
            name: ""
        });
        await this.grabBid();
        console.log("end of onClick");
    }

    grabBid = async data => {
        console.log('grab Bid invoked');
        let res = await axios.get('http://localhost:5000/api/Bids')
        this.setState({
            Bids: res.data
        })

    }
    addNewBid = async Bid => {
        console.log('add new Bid invoked');
        let res = await axios.post('http://localhost:5000/api/Bids', {
            name: this.state.name
        }); // res.data => new Bid object

        console.log("res: ", res.data);
        if (res.data) {
            this.setState({
                Bids: [...this.state.Bids, res.data]
            });
        }
    }

    componentDidMount() {
        this.grabBid();
        // this.deleteBids();
    }

    // deleteBids() {
    //     for (let i = 6; i <= 11; i++) {
    //         axios.delete(`http://localhost:5000/api/Bids/${i}`);
    //     }
    // }

    handleInputChange(c){
     this.setState({
          checkedId: c.target.id,
          isChecked: true
        });
      }
      
     deleteBid = Bid => {
         if (this.state.isChecked == true) {
            let response = axios.delete(`http://localhost:5000/api/Bids/${this.state.checkedId}`)
         }
        }
   

    render() {
        return (
            <div>
                <div className="nav"><a href="#addBidModal" className="btn btn-success" data-toggle="modal">
                    <i className="material-icons">&#xE147;</i> <span>Add New Bid</span></a>
                    <a href="#deleteBidModal" className="btn btn-danger" onClick={this.deleteBid} data-toggle="modal"><i className="material-icons">&#xE15C;</i> <span>Delete
                </span></a></div>
                <div className="tableBox">
                    {/* what gets rendered in this table will come from the database */}
                    <table className="table">
                        <tr>
                            <th></th>
                            <th>Consultation Date</th>
                            <th>Last Contact</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Zip</th>
                            <th>Est. Cost</th>
                            <th>Est. Finish</th>
                            <th>Status</th>
                            <th>Comments</th>
                            <th>Contact</th>
                        </tr>
                        {this.state.Bids.map(b => {
                            return (
                                <tr>
                                    <td>
                                    <input className="checkbox" type="checkbox" 
                                    value= {this.state.isChecked} 
                                    id={b.bid_id}
                                    onChange={this.handleInputChange.bind(this)}>
                                    </input>
                                    </td>
                                    <td>{b.consult_date}</td>
                                    <td>{b.last_contact}</td>
                                    <td>{b.address}</td>
                                    <td>{b.city}</td>
                                    <td>{b.zip}</td>
                                    <td>{b.est_cost}</td>
                                    <td>{b.est_finish}</td>
                                    <td>{b.status}</td>
                                    <td>{b.comments}</td>
                                    <td>{b.contact.name}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>


                <NewBidForm />



              


                <div id="deleteBidModal" className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form>
                                <div className="modal-header">
                                    <h4 className="modal-title">Delete Bid</h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                                <div className="modal-body">
                                    <p>Are you sure you want to delete these Records?</p>
                                    <p className="text-warning"><small>This action cannot be undone.</small></p>
                                </div>
                                <div className="modal-footer">
                                    <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                    <input type="submit" className="btn btn-danger" value="Delete" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Bids;