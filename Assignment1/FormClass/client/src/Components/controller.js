import React, { Component } from "react";
import "./componentsCSS/comp.css";
import FormData from "./formData";
import ShowData from "./showData";

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{ name: "", address: "", contact: "", college: "" }],
      view: 1,
      editDataIndex: -1,
    };
  }
  handleData = (inputData) => {
    console.log(" We Handled Person", inputData);
    const tempValue = { ...this.state };
    tempValue.editDataIndex >= 0
      ? (tempValue.data[tempValue.editDataIndex] = inputData)
      : tempValue.data.push(inputData);
    tempValue.view = 0;
    tempValue.editDataIndex = -1;
    this.setState(tempValue);
  };
  showForm = () => {
    const tempValue = { ...this.state };
    tempValue.view = 1;
    this.setState(tempValue);
  };
  handleUpdate = (index) => {
    const tempValue = { ...this.state };
    tempValue.view = 1;
    tempValue.editDataIndex = index;
    this.setState(tempValue);
  };
  componentWillMount = () => {
    console.log("Component Will Mount");
    console.log("---------------------");
  };

  componentDidMount() {
    console.log("Component Did Mount");
    console.log("---------------------");
  }
  shouldComponentUpdate = () => {
    console.log("Should Component Update");
    console.log("---------------------");
    return true;
  };
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component Did Update");
    console.log("---------------------");
  }

  componentWillUnmount() {
    console.log("Component will Unmount");
  }

  render() {
    const entryData = { name: "", address: "", contact: "", college: "" };
    const { data, view, editDataIndex } = this.state;
    return view === 0 ? (
      <ShowData
        onSubmit={this.handleUpdate}
        onClick={this.showForm}
        data={data}
      />
    ) : (
      <FormData
        entryData={editDataIndex >= 0 ? data[editDataIndex] : entryData}
        onSubmit={this.handleData}
        edit={editDataIndex >= 0}
      />
    );
  }
}

export default MainComponent;
