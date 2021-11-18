import React, { Component } from 'react';
import DepartureService from '../services/DepartureService';

class CreateComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            // departureId:'',
            imulNumber:'',
            fullName:'',
            phone:'',
            email:''
        }
        // this.changeDepartureIdHandler = this.changeDepartureIdHandler.bind(this);
        this.changeImulNumberHandler = this.changeImulNumberHandler.bind(this);
        this.changeFullNameHandler = this.changeFullNameHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveDeparture = this.saveDeparture.bind(this);



    }

    saveDeparture = (e) => {
            e.preventDefault();
            let departure = {departureId: this.state.departureId, imulNumber: this.state.imulNumber , fullName: this.state.fullName,phone: this.state.phone , email: this.state.email};
            // console.log('departure => ' +JSON.stringify(departure));

            DepartureService.createDeparture(departure).then(res => {
                this.props.history.push("/departures");
            });
    }
    changeDepartureIdHandler = (event) => {
        this.setState({departureId:event.target.value});
    }
    changeImulNumberHandler = (event) => {
        this.setState({imulNumber:event.target.value});
    }
    changeFullNameHandler = (event) => {
        this.setState({fullName:event.target.value});
    }
    changePhoneHandler = (event) => {
        this.setState({phone:event.target.value});
    }
    changeEmailHandler = (event) => {
        this.setState({email:event.target.value});
    }
    cancel(){
        this.props.history.push("/departures");
    }

    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card  col-md-6 offset-md-3 offset-md-3">
                            <h3 className ="text-center">Add New Departure</h3>
                            <div className = "card-body">
                                <form>
                                    {/* <div className = "form-group">
                                        <label>Departure Id :</label>
                                        <input placeholder="Departure Id" name="departureId" className="form-control"
                                        value={this.state.departureId} onChange={this.changeDepartureIdHandler}/>
                                    </div> */}
                                    <br/>
                                    <div className = "form-group">
                                        <label>IMU Number :</label>
                                        <input placeholder="IMU Number" name="imulNumber" className="form-control"
                                        value={this.state.imulNumber} onChange={this.changeImulNumberHandler}/>
                                    </div>
                                    <br/>
                                    <div className = "form-group">
                                        <label>Full Name:</label>
                                        <input placeholder="Full Name" name="fullName" className="form-control"
                                        value={this.state.fullName} onChange={this.changeFullNameHandler}/>
                                    </div>
                                    <br/>
                                    <div className = "form-group">
                                        <label>Phone Number:</label>
                                        <input placeholder="Phone Number" name="phone" className="form-control"
                                        value={this.state.phone} onChange={this.changePhoneHandler}/>
                                    </div>
                                    <br/>
                                    <div className = "form-group">
                                        <label>Email Address:</label>
                                        <input placeholder="Email Address" name="email" className="form-control"
                                        value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <br/><br/>
                                    <button className="btn btn-success" onClick={this.saveDeparture}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                             </form>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateComponent;