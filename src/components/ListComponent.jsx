import React, { Component } from 'react';
import DepartureService from '../services/DepartureService';

class ListDepartureComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                departures: []
        }
        this.addDeparture = this.addDeparture.bind(this);
        this.editDeparture = this.editDeparture.bind(this);
        this.deleteDeparture = this.deleteDeparture.bind(this);
    }

    deleteDeparture(departureId){
        DepartureService.deleteDeparture(departureId).then( res => {
            this.setState({departures: this.state.departures.filter(departure => departure.departureId !== departureId)});
        });
    }
    viewDeparture(departureId){
        this.props.history.push(`/view-departure/${departureId}`);
    }
    editDeparture(departureId){
        this.props.history.push(`/update-departure/${departureId}`);
    }

    componentDidMount(){
        DepartureService.getDepartures().then((res) => {
            this.setState({ departures: res.data});
        });
    }

    addDeparture(){
        this.props.history.push('/add-departure');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Departure List</h2>
                 <div className = "">
                    <button className="btn btn-primary" onClick={this.addDeparture}> Add Departure</button>
                 </div>
                 <br></br>
                 <div className = "row" style={{textAlign:"center"}}>
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>Departure Id</th>
                                    <th> IMU Number</th>
                                    <th> Full Name</th>
                                    <th> Phone</th>
                                    <th> Email</th>
                                    <th> Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.departures.map(
                                        departure => 
                                        <tr key = {departure.departureId}>
                                            <td> { departure.departureId} </td>
                                             <td> { departure.imulNumber} </td>   
                                             <td> {departure.fullName}</td>
                                             <td> {departure.phone}</td>
                                             <td> {departure.email}</td>
                                             <td>
                                                 <button onClick = { () =>this.editDeparture(departure.departureId)} className="btn btn-info">Update</button>
                                                 <button style={{marginLeft:"10px"}}onClick = { () =>this.deleteDeparture(departure.departureId)} className="btn btn-danger">Delete</button>
                                                 <button style={{marginLeft:"10px"}}onClick = { () =>this.viewDeparture(departure.departureId)} className="btn btn-info">View</button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListDepartureComponent
