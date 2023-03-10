import React, { Component } from "react";
import axios from "axios";
import './Table.css';
import './Create.css';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reference_Id:"",
            customer_Name: "",
            from_Address: "",
            to_Address: "",
            product: "",
            contact_Number: "",
            cost:"",
            shippingdata: [],
                };
    }

    componentDidMount() {
        // Fetch fuel data from server when component mounts
        axios.get("http://localhost:2023/get").then((response) => {
            this.setState({ shippingdata: response.data });
        });
    }

    handlereference_IdChange = (event) => {
        this.setState({ reference_Id:event.target.value });
    };
    handlecustomer_Name = (event) => {
        this.setState({ customer_Name: event.target.value });
    };
    handlefrom_Address = (event) => {
        this.setState({ from_Address: event.target.value });
    };
    handleto_Address = (event) => {
        this.setState({ to_Address: event.target.value });
    };
    handleproduct = (event) => {
        this.setState({ product: event.target.value });
    };
    handlecontact_Number = (event) => {
        this.setState({ contact_Number: event.target.value });
    };
    handlecost = (event) => {
        this.setState({ cost: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            reference_Id:this.state.reference_Id,
            customer_Name: this.state.customer_Name,
            from_Address: this.state.from_Address,
            to_Address: this.state.to_Address,
            product: this.state.product,
            contact_Number: this.state.contact_Number,
            cost:this.state.cost,
        };
        console.log(data);
        axios.post("http://localhost:2023/add", data).then((response) => {
            // Add new fuel data to the state and clear the form
            this.setState({
                shippingdata: [...this.state.shippingdata, response.data],
                reference_Id:"",
                customer_Name: "",
                from_Address: "",
                to_Address: "",
                product: "",
                contact_Number: "",
                cost:"",
            });
        });
    };

    handleUpdate = (reference_Id, data) => {
        // Send PUT request to update fuel data with the given ID
        axios.put(`http://localhost:2023/update/${reference_Id}`, data).then((response) => {
            // Update the state to reflect the updated fuel data
            const updatedshippingdata = this.state.shippingdata.map((Address) => {
                if (Address.reference_Id === response.data.reference_Id) {
                    return response.data;
                } else {
                    return Address;
                }
            });
            this.setState({ shippingdata: updatedshippingdata });
        });
    };

    handleDelete = (reference_Id) => {
        // Send DELETE request to remove fuel data with the given ID
        axios.delete(`http://localhost:2023/delete/${reference_Id}`).then((response) => {
            // Update the state to remove the deleted fuel data
            const updatedshippingdata = this.state.shippingdata.filter(
                (Address) => Address.reference_Id !== reference_Id
            );
            this.setState({ shippingdata: updatedshippingdata });
        });
    };

    handleEdit = (data) => {
        this.setState({
            reference_Id:data.reference_Id,
            customer_Name: data.customer_Name,
            from_Address: data.from_Address,
            to_Address: data.to_Address,
            product: data.product,
            contact_Number: data.contact_Number,
            cost:data.cost,
            isEdit: true,
        });
        // console.log(this.state.reference_Id);
    };

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value,
        });
    };


    handleUpdate = (event) => {
        event.preventDefault();
        const data = {
            reference_Id:this.state.reference_Id,
            customer_Name: this.state.customer_Name,
            from_Address: this.state.from_Address,
            to_Address: this.state.to_Address,
            product:this.state.product,
            contact_Number:this.state.contact_Number,
            cost:this.state.cost,
        };
        const reference_Id = this.state.reference_Id;
        axios
            .put(`http://localhost:2023/update/${reference_Id}`, data)
            .then((res) => {
                
                console.log(res.data);
                this.setState({
                    reference_Id:"",
                    customer_Name: "",
                    from_Address: "",
                    to_Address: "",
                    product:"",
                    contact_Number:"",
                    cost:"",
                    

                });
                this.props.history.push("/");
            })
            .catch((err) => console.log(err));
    };
    render() {
        return (

            <div>
                <form onSubmit={this.handleSubmit} className="fuel">
                    <label className="login-label">Reference-Id:</label>
                    <input
                        className="fuel"
                        type="number"
                        value={this.state.reference_Id}
                        onChange={this.handlereference_IdChange}
                    />
                    <br /><br />
                    <label className="login-label">Customer-Name:</label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.customer_Name}
                        onChange={this.handlecustomer_Name}
                    />
                    <br /><br />

                    <label className="login-label">From-Address:</label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.from_Address}
                        onChange={this.handlefrom_Address}
                    />
                    <br /><br />

                    <label className="login-label">To-Address:</label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.to_Address}
                        onChange={this.handleto_Address}
                    />
                    <br /><br />

                    <label className="login-label">Product:</label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.product}
                        onChange={this.handleproduct}
                    />
                    <br /><br />

                    <label className="login-label">Contact-Number</label>
                    <input
                        className="fuel"
                        type="number"
                        value={this.state.contact_Number}
                        onChange={this.handlecontact_Number}
                    />
                    <br /><br />
                    <label className="login-label">Price:</label>
                    <input
                        className="fuel"
                        type="number"
                        value={this.state.cost}
                        onChange={this.handlecost}
                    />
                    <br /><br />

                    <button className="submitt" type="submit" id="asd">
                        Submit
                    </button>
                    <br /><br />
                </form>

                <table className="output">
                    <thead>
                        <tr>
                            <th>reference_Id</th>
                            <th>customer_Name</th>
                            <th>from_Address</th>
                            <th>to_Address</th>
                            <th>product</th>
                            <th>contact_Number</th>
                            <th>cost</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.shippingdata.map((data) => (
                            <tr key={data.reference_Id}>
                                <td>{data.reference_Id}</td>
                                <td>{data.customer_Name}</td>
                                <td>{data.from_Address}</td>
                                <td>{data.to_Address}</td>
                                <td>{data.product}</td>
                                <td>{data.contact_Number}</td>
                                <td>{data.cost}</td>
                                <td>
                                    <button onClick={() => this.handleEdit(data)}>Edit</button>
                                </td>

                                <td>
                                    <button
                                        onClick={() => this.handleDelete(data.reference_Id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br></br><br></br>
                <form onSubmit={this.handleUpdate}>
                    
                    <label>reference_Id:</label>
                    <input
                        type="number"
                        name="reference_Id"
                        value={this.state.reference_Id}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>customer_Name:</label>
                    <input
                        type="text"
                        name="customer_Name"
                        value={this.state.customer_Name}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>from_Address:</label>
                    <input
                        type="text"
                        name="from_Address"
                        value={this.state.from_Address}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>to_Address:</label>
                    <input
                        type="text"
                        name="to_Address"
                        value={this.state.to_Address}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>product:</label>
                    <input
                        type="text"
                        name="product"
                        value={this.state.product}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>contact_Number:</label>
                    <input
                        type="number"
                        name="contact_Number"
                        value={this.state.contact_Number}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>cost:</label>
                    <input
                        type="number"
                        name="cost"
                        value={this.state.cost}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <br />
                    <button type="submit">Save</button>
                    <button onClick={this.handleCancel}>Cancel</button>
                </form>      
                </div>

        );
    }
}
export default Table;