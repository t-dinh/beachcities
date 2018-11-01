import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NewBidForm from '../forms/newBidForm';
import { connect } from 'react-redux';
import { getBids, deleteBid, addBid, storeBid } from '../../redux/actions/index';
// import BidUpdateForm from '../forms/BidUpdateForm'
import { Redirect } from 'react-router';

class Bids extends Component {
  state = {
    isChecked: false,
    checkedId: [],
    redirect: false
  }

  componentDidMount() {
    this.props.getBids();
  }

  handleInputChange = e => {
    const checkedId = this.state.checkedId
    let index
    if (e.target.checked) {
      checkedId.push(+e.target.id)
    } else {
      index = checkedId.indexOf(+e.target.id)
      checkedId.splice(index, 1)
    }
    this.setState({
      checkedId: checkedId,
      isChecked: e.target.checked
    });
    console.log(this.state.checkedId);
  }

  onSendBid(bid) {
    console.log('onsendbid');
    console.log(bid);
    this.props.storeBid(bid);
    this.setState({
      redirect: true
    })
  }



  render() {
    const { redirect } = this.state
    if (redirect) return (<Redirect to="/updateBid" />)

    return (
      <div className="container">
        <div className="nav"><a href="#addBidModal" className="btn btn-success" data-toggle="modal">
          <i className="material-icons">&#xE147;</i> <span>Add New Bid</span></a>
          <a href="#updateBidModal" className="btn btn-success" data-toggle="modal" onClick={this.popId}>
            <i className="material-icons">&#xE147;</i> <span>Update Bid</span></a>
          <a href="#deleteBidModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons">&#xE15C;</i> <span>Delete
                </span></a></div>
        <div className="tableBox">
        <h1> Bids </h1>
          <table className="table">
            <tr>
              <th> </th>
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
            {this.props.bids.bids.map(bids => (
                <tr>
                  <td>
                    <input className="checkbox" type="checkbox"
                      value={this.state.isChecked}
                      id={bids.bid_id}
                      onChange={this.handleInputChange.bind(this)}>
                    </input>
                  </td>
                  <td>{bids.consult_date}</td>
                  <td>{bids.last_contact}</td>
                  <td>{bids.address}</td>
                  <td>{bids.city}</td>
                  <td>{bids.zip}</td>
                  <td>{bids.est_cost}</td>
                  <td>{bids.est_finish}</td>
                  <td>{bids.status}</td>
                  <td>{bids.comments}</td>
                  <td>{bids.contact.name}</td>
                  <td>
                    <button id={bids.bid_id} className="btn btn-primary" onClick={() => this.onSendBid(bids)}>update</button>
                  </td>
                </tr>
              )
            )}
          </table>
        </div>


        <div id="deleteBidModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title">Delete Bid</h4>
                  <h5>This Cannot Be Undone</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                </div>
                <div className="modal-footer">
                  <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                  <input type="submit" className="btn btn-success" value="Delete" onClick={() => this.props.deleteBid(this.state.checkedId)} />
                </div>
              </form>
            </div>
          </div>
        </div>
        <NewBidForm
          addNewBid={this.props.addBid()}
        />

      </div>




    );
  }
}
const mapStateToProps = state => ({
  bids: state.bidReducer
})

const mapPropsToDispatch = dispatch => ({
  getBids: () => dispatch(getBids()),
  deleteBid: (id) => dispatch(deleteBid(id)),
  addBid: (bid) => dispatch(addBid(bid)),
  storeBid: (bid) => dispatch(storeBid(bid))
})
export default connect(mapStateToProps, mapPropsToDispatch)(Bids);