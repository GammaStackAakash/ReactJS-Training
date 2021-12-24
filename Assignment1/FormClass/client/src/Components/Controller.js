import React,{useState,Component} from "react";
import '../App.css';
import FormData from "./formdata";

class MainComponent extends Component {
    state ={
        data: [{name:"",address:"",contact:"",college:""}],
        view :1,
        editDataIndex:-1,
    }
    handleData = (inputData)=>{
      console.log(" We Handled Person",inputData)
      let s1= {...this.state}
      s1.editDataIndex >=0 ? (s1.data[s1.editDataIndex] = inputData) : (s1.data.push(inputData));
      s1.view=0;
      s1.editDataIndex = -1;
      this.setState(s1);
    }
    showForm=()=>{
      let s1= {...this.state}
      s1.view=1
      this.setState(s1)
    }
    handleUpdate = (index)=>{
      let s1= {...this.state}
      s1.view=1
      s1.editDataIndex = index
      this.setState(s1)

    }

    render(){
      let entryData = {name:"",address:"",contact:"",college:""};
      let {data, view, editDataIndex} = this.state;
      return view ===0 ? (<div className="form-group">
        {
                data.map((curElem,index)=>{
                  if(index===0){return null}
                  else{
                  return(
                  <div>
                    <p className="elem">{curElem.name ? (<span>Name : {curElem.name} </span>) :("")}</p>
                    <p className="elem">{curElem.address ? (<span>Address : {curElem.address } </span>):("")}</p>
                    <p className="elem">{curElem.contact ? (<span>Contact : {curElem.contact } </span>):("")}</p> 
                    <p className="elem">{curElem.college ? (<span>College : {curElem.college } </span>) :("")}</p>
                    <button onClick={()=>this.handleUpdate(index)}>Edit</button>
                  </div>
                  )
                  }
                }
                )
              }
              <button className="btn" onClick={()=>this.showForm()}>ADD NEW DATA</button>

      </div>
      ):(<>
      <FormData entryData={editDataIndex >= 0 ? data[editDataIndex] : entryData}
       onSubmit = {this.handleData}
       edit = {editDataIndex >= 0}/>  
      </> 
        
      )
}
}

export default MainComponent; 