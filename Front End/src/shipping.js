import React,{Component} from "react";
import axios from "axios";
import "./shipping.css";

class shipping extends Component{
    constructor(props)
    {
        super(props);
        this.state={
        vehicleName:"",
        fuelType:'',
        fuelConsumption:'',
        fuelPrice:'',
        fuelAmount:'',
        dateee:'',
    };
    }

    handlevehicleNameChange = (event) =>{
        this.setState({ vehicleName : event.target.value});
    };
    handlefuelType = (event) =>{
        this.setState({ fuelType : event.target.value});
    };
    handlefuelConsumption = (event) =>{
        this.setState({ fuelConsumption : event.target.value});
    };
    handlefuelPrice = (event) =>{
        this.setState({ fuelPrice : event.target.value});
    };
    handlefuelAmount = (event) =>{
        this.setState({ fuelAmount: event.target.value});
    };
    handledateee = (event) =>{
        this.setState({ dateee : event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data ={
            vehicleName: this.state.vehicleName,
            fuelType: this.state.fuelType,
            fuelConsumption: this.state.fuelConsumption,
            fuelPrice: this.state.fuelPrice,
            fuelAmount: this.state.fuelAmount,
            dateee: this.state.dateee,
        };
        console.log(data);
        axios.post('http://localhost:8080/fuel',data)
    };

    render()
    {
        return(
            <form onSubmit={this.handleSubmit} className="fuel" >
               <label className="login-label">Vehicle Name</label>

               <input
               className="fuel"
               type="text"
               value={this.state.vehicleName}
               onChange={this.handlevehicleNameChange}
               />

               <br></br><br></br>

               <label className="login-label">Fuel Type</label>
               <input
               className="fuel"
               type="text"
               value={this.state.fuelType}
               onChange={this.handlefuelType}
               />
                
                <br></br><br></br>

               <label className="login-label">Fuel Consumption</label>
               <input
               className="fuel"
               type="number"
               value={this.state.fuelConsumption}
               onChange={this.handlefuelConsumption}
               />

<br></br><br></br>

               <label className="login-label">Fuel Price</label>
               <input
               className="fuel"
               type="number"
               value={this.state.fuelPrice}
               onChange={this.handlefuelPrice}
               />

<br></br><br></br>

               <label className="login-label">Fuel Amount</label>
               <input
               className="fuel"
               type="number"
               value={this.state.fuelAmount}
               onChange={this.handlefuelAmount}
               />

<br></br><br></br>

               <label className="login-label">Datee</label>
               <input
               className="fuel"
               type="date"
               value={this.state.dateee}
               onChange={this.handledateee}
               />

<br></br><br></br>

               <button className="submitt" type="submit" id="asd">
Submit
               </button>
               <br></br><br></br>
               </form>
               );
               
    }
}
export default shipping;