import { isValid } from "ipaddr.js";
import React,{useState,Component} from "react";
import '../App.css';


class FormData extends Component {

    state = {
        inputData :this.props.entryData,
        errors : {},
    }
    handleInput=(e)=>{
        console.log(e.target);
        let s1 = {...this.state};
        s1.inputData[e.target.name] = e.target.value;
        this.setState(s1);
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        let errors = this.validation();
        if(this.isValid(errors)){
            this.props.onSubmit(this.state.inputData)
        }else{
            let s1 = {...this.state};
            s1.errors = errors
            this.setState(s1);
            console.log("Coustom Erros",this.state.errors)
        }

        console.log("Handle Submit",this.state.inputData);
        // this.props.onSubmit(this.state.inputData)
        
    }
    handleData = ()=>{
        console.log("Handle Data")
    }
    validation = ()=>{
        let errors = {}
        function phonenumber(inputtxt)
      {
        var phoneno = /^\d{10}$/;
        if((inputtxt.match(phoneno)))
              {
            return true;
              }
            else
              {
              return false;
              }
      }
        
        let {name,address,contact,college} = this.state.inputData
        if(!name){
            console.log(" Empty")
            errors.name = "Name must not be Empty";
        }
        if(!address){
            console.log(" Empty")
            errors.address = "Address must not be Empty";
        }if(!contact){
            console.log(" Empty")
            errors.contact = "Contact must not be Empty";
        }else if(phonenumber(contact)===false){
            console.log("Invalid")
            errors.contact = "Contact No. must not be Invalid";
        }if(!college){
            console.log(" Empty")
            errors.college = "College Feild Must Be  Entered"
        }

        return errors

    }
    isValid = (errors)=>{
        let keys = Object.keys(errors);
        let count = keys.reduce((acc,curr)=>errors[curr] ? acc+1 : acc,0);
        return count ===0;
      }
    handleUpdate = (e)=>{
        var btn =document.getElementById("add");
        btn.value = 'my value'; 
        btn.innerHTML = 'UPDATE';
        // btn.setAttribute( "onClick", "handleFormUpdate()" );
        // document.getElementById("add").onclick = handleFormUpdate;
        
        // console.log(s1)  
        // this.setState(s1);
      }
    render() {

        let {name,address,contact,college}=this.state.inputData;
        let data = this.state.inputData;

        return(
      // ...
      <>
      <div className="container">
          <h2 className="formTitle">{this.props.edit ? "Edit Data" : "User Data Form"}</h2>
          <div className="form-group">
            <div className="entry-cont">
            <label >Name-</label>
              <input 
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
              value={name}
              onChange={this.handleInput}
               />
               <div>{this.state.errors.name ? (<span className="error-data">{this.state.errors.name}</span>) : ("")}</div>
               </div>

            <div className="entry-cont">
            <label >Address-</label>
              <input 
              type="text"
              name="address"
              id="address"
              placeholder="Enter Address"
              value={address}
              onChange={this.handleInput}
               />
               <div>{this.state.errors.address ? (<span className="error-data">{this.state.errors.address}</span> ): ("")}</div>
               </div>

            <div className="entry-cont">
            <label >Contact-</label>
              <input 
              type="text"
              name="contact"
              id="contact"
              placeholder="Enter Phone No."
              value={contact}
              onChange={this.handleInput}
              
               />
              <div> {this.state.errors.contact ? (<span className="error-data">{this.state.errors.contact}</span> ): ("")}</div>
               </div>
               <div className="entry-cont">
            <label >College-</label>
              <input 
              type="text"
              name="college"
              id="college"
              placeholder="Enter College Name"
              value={college}
              onChange={this.handleInput}
               />
               <div>{this.state.errors.college ? (<span className="error-data">{this.state.errors.college}</span> ):("")}</div>
               </div>
               <button 
               className="btn"
               id ="add" 
               onClick={this.handleSubmit} 
               type="submit">{this.props.edit ?"UPDATE" : "ADD"}
                </button>
          </div>

      </div>
      </>
        )
    }
  }


  export default FormData;  