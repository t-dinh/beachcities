import React, { Component } from 'react';


class DataTable extends Component {
    state = {
        employees: [],
        projects: []
    }

    // grabData = employees => {
    //     axios.get()
    //     .then(res => {
    //         this.setState({
    //             employees: res.data,
    //             projects: res.data
    //         })
    //     })
    // }
    // componentDidMount() {
    //     this.grabData();
    // }


    render() {
        return (
            <div className="container">
                <div className="nav"><button className="btn btn-link">Employees</button></div>
                <div className="tableBox">
                    {/* what gets rendered in this table will come from the database */}
                    <table className="table">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Phone</th>
                        </tr>
                        <tr className="hoverButton">
                            <td>Example1id</td>
                            <td>example1name</td>
                            <td>(714)123-4567</td>
                            <button className="btn btn-danger" id="showButtons">x</button>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default DataTable;
