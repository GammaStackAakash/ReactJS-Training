import React, { useState } from "react";
import "./componentsCSS/comp.css";
import "./componentsCSS/formData.css";

function FormData(props) {
  const [errorValues, setErrorValues] = useState({});
  const [inputValues, setInputValues] = useState(props.entryData);

  function handleInput(event) {
    console.log(event.target);
    let s1 = { ...inputValues };
    console.log(s1);
    const name = event.target.name;
    const value = event.target.value;
    setInputValues({ ...inputValues, [name]: value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let errors = validation();
    if (isValid(errors)) {
      props.onSubmit(inputValues);
    } else {
      setErrorValues(errors);
      console.log("Custom Errors", errors);
    }
    console.log("Handle Submit", inputValues);
  }

  function validation() {
    let errors = {};
    function phoneNumber(value) {
      var contactRegEx = /^\d{10}$/;
      if (value.match(contactRegEx)) {
        return true;
      } else {
        return false;
      }
    }

    let { name, address, contact, college } = inputValues;
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
  }
  function isValid(errors) {
    let keys = Object.keys(errors);
    let count = keys.reduce((acc, curr) => (errors[curr] ? acc + 1 : acc), 0);
    return count === 0;
  }
  let { name, address, contact, college } = inputValues;
  let tempError = { ...errorValues };
  return (
    // ...
    <div className="container">
      <div className="form-group">
        <h2 className="formTitle">
          {props.edit ? "EDIT DATA" : "USER DATA FORM"}
        </h2>
        <div className="entry-cont">
          <label>Name-</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Name"
            value={name}
            onChange={handleInput}
          />
          <div>
            {tempError.name ? (
              <span className="error-data">{tempError.name}</span>
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
            onChange={handleInput}
          />
          <div>
            {tempError.address ? (
              <span className="error-data">{tempError.address}</span>
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
            onChange={handleInput}
          />
          <div>
            {" "}
            {tempError.contact ? (
              <span className="error-data">{tempError.contact}</span>
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
            onChange={handleInput}
          />
          <div>
            {tempError.college ? (
              <span className="error-data">{tempError.college}</span>
            ) : (
              ""
            )}
          </div>
        </div>
        <button className="btn" id="add" onClick={handleSubmit} type="submit">
          {props.edit ? "UPDATE" : "ADD"}
        </button>
      </div>
    </div>
  );
}
export default FormData;
