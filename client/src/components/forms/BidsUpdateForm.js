import React, { Component } from 'react';
// import axios from 'axios';
// import { Field } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { editBid, getBids} from '../../redux/actions/index';

class BidUpdateForm extends Component {
  state = {
    bid: {
      consultDate: this.props.bid.consultDate,
      lastContact: this.props.bid.lastContact,
      address: this.props.bid.address,
      city: this.props.bid.city,
      zip: this.props.bid.zip,
      estCost: this.props.bid.estCost,
      estFinish: this.props.bid.estFinish,
      status: this.props.bid.status,
      comments: this.props.bid.comments
    },
    redirect: false
  }

  componentDidMount() {

  }

  onClick = (e) => {
    // console.log("id from onclick: ", id);
    let id = this.props.bid.bid_id;
    this.props.editBid(id, this.state.bid);
    this.setState({
      redirect: true
    });
  }

  render() {
    const { redirect } = this.state
    console.log(this.props.bid);

    if (redirect) return (<Redirect to="/bid" />)
    return (
      <div>
        <div className="header">
          <h1>Edit bid</h1>
        </div>
        <label>Consultation Date</label>
        <input type="text" className="form-control" id="name" value={this.state.bid.consultDate}
          onChange={(e) => this.setState({ bid: { ...this.state.bid, consultDate: e.target.value } })} />
        <label>Last Contact</label>
        <input type="text" className="form-control" value={this.state.bid.lastContact}
          onChange={(e) => this.setState({ bid: { ...this.state.bid, name: e.target.value } })} />
        <label>Address</label>
        <input type="text" className="form-control" value={this.state.bid.address}
          onChange={(e) => this.setState({ bid: { ...this.state.bid, name: e.target.value } })} />
        <label>City</label>
        <input type="text" className="form-control" value={this.state.bid.city}
          onChange={(e) => this.setState({ bid: { ...this.state.bid, name: e.target.value } })} />
        <label>Zip</label>
        <input type="text" className="form-control" value={this.state.bid.zip}
          onChange={(e) => this.setState({ bid: { ...this.state.bid, name: e.target.value } })} />
        <label>Est. Cost</label>
        <input type="text" className="form-control" value={this.state.bid.estCost}
          onChange={(e) => this.setState({ bid: { ...this.state.bid, name: e.target.value } })} />
        <label>Est. Finish</label>
        <input type="text" className="form-control" value={this.state.bid.estFinish}
          onChange={(e) => this.setState({ bid: { ...this.state.bid, name: e.target.value } })} />
        <label>Status</label>
        <input type="text" className="form-control" value={this.state.bid.status}
          onChange={(e) => this.setState({ bid: { ...this.state.bid, name: e.target.value } })} />
        <label>Comments</label>
        <input type="text" className="form-control" value={this.state.bid.comments}
          onChange={(e) => this.setState({ bid: { ...this.state.bid, name: e.target.value } })} />

        <input type="submit" className="btn btn-info" value="Save" onClick={(e) => this.onClick(e)} />
      </div>

    );
  }
}

const mapStateToProps = state => ({
  bids: state.bidReducer.bids,
  bid: state.bidReducer.editingObject
})
const mapPropsToDispatch = dispatch => ({
  getBids: () => dispatch(getBids()),
  editBid: (id, bid) => dispatch(editBid(id, bid))
})
export default connect(mapStateToProps, mapPropsToDispatch)(BidUpdateForm);