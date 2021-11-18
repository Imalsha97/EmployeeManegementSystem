import React, { Component } from 'react';
import DepartureService from '../services/DepartureService';

class ViewComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            departureId: this.props.match.params.departureId,
            departure : {}
            
        }
        

    }
    componentDidMount(){
        DepartureService.getDepartureById(this.state.departureId).then((res) => {
            
            this.setState({
                departure: res.data

            });
        });
    }

    

    render() {
        return (
            <div>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className="text-center">View Departure Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Departure ID:</label>
                            <div>{ this.state.departure.departureId }</div>
                        </div>
                        <div className="row">
                            <label>IMUL Number:</label>
                            <div>{ this.state.departure.imulNumber }</div>
                        </div>
                        <div className="row">
                            <label>Full Name:</label>
                            <div>{ this.state.departure.fullName }</div>
                        </div>
                        <div className="row">
                            <label>Phone Number:</label>
                            <div>{ this.state.departure.phone }</div>
                        </div>
                        <div className="row">
                            <label>Email Address:</label>
                            <div>{ this.state.departure.email }</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default ViewComponent;