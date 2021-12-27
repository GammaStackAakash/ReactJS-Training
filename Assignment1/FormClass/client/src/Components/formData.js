import React, { Component } from "react";
import "./componentsCSS/comp.css";

class FormData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputData: this.props.entryData,
      errors: {},
    };
  }

  handleInput = (event) => {
    console.log(event.target);
    const tempValue = { ...this.state };
    tempValue.inputData[event.target.name] = event.target.value;
    this.setState(tempValue);
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const errors = this.validation();
    if (this.isValid(errors)) {
      this.props.onSubmit(this.state.inputData);
    } else {
      const tempValue = { ...this.state };
      tempValue.errors = errors;
      this.setState(tempValue);
      console.log("Custom Errors", this.state.errors);
    }

    console.log("Handle Submit", this.state.inputData);
  };
  handleData = () => {
    console.log("Handle Data");
  };
  validation = () => {
    const errors = {};
    function phoneNumber(value) {
      var phoneRegExp = /^\d{10}$/;
      if (value.match(phoneRegExp)) {
        return true;
      } else {
        return false;
      }
    }

    const { name, address, contact, college } = this.state.inputData;
    if (!name) {
      console.log(" Empty");
      errors.name = "Name must not be Empty";
    }
    if (!address) {
      console.log(" Empty");
      errors.address = "Address must not be Empty";
    }
    if (!contact) {
      console.log(" Empty");
      errors.contact = "Contact must not be Empty";
    } else if (phoneNumber(contact) === false) {
      console.log("Invalid");
      errors.contact = "Contact No. must not be Invalid";
    }
    if (!college) {
      console.log(" Empty");
      errors.college = "College Field Must Be  Entered";
    }

    return errors;
  };
  isValid = (errors) => {
    const keys = Object.keys(errors);
    const count = keys.reduce((acc, curr) => (errors[curr] ? acc + 1 : acc), 0);
    return count === 0;
  };
  render() {
    const { name, address, contact, college } = this.state.inputData;
    return (
      <div className="container">
        <h2 className="formTitle">
          {this.props.edit ? "Edit Data" : "User Data Form"}
        </h2>
        <div className="form-group">
          <div className="entry-cont">
            <label>Name-</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
              value={name}
              onChange={this.handleInput}
            />
            <div>
              {this.state.errors.name ? (
                <span className="error-data">{this.state.errors.name}</span>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="entry-cont">
            <label>Address-</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Enter Address"
              value={address}
              onChange={this.handleInput}
            />
            <div>
              {this.state.errors.address ? (
                <span className="error-data">{this.state.errors.address}</span>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="entry-cont">
            <label>Contact-</label>
            <input
              type="text"
              name="contact"
              id="contact"
              placeholder="Enter Phone No."
              value={contact}
              onChange={this.handleInput}
            />
            <div>
              {" "}
              {this.state.errors.contact ? (
                <span className="error-data">{this.state.errors.contact}</span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="entry-cont">
            <label>College-</label>
            <input
              type="text"
              name="college"
              id="college"
              placeholder="Enter College Name"
              value={college}
              onChange={this.handleInput}
            />
            <div>
              {this.state.errors.college ? (
                <span className="error-data">{this.state.errors.college}</span>
              ) : (
                ""
              )}
            </div>
          </div>
          <button
            className="btn"
            id="add"
            onClick={this.handleSubmit}
            type="submit"
          >
            {this.props.edit ? "UPDATE" : "ADD"}
          </button>
        </div>
      </div>
    );
  }
}

export default FormData;
