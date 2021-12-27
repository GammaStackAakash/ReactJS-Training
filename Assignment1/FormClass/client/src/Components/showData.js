import React, { Component } from "react";
import "./componentsCSS/comp.css";

class ShowData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }
  render() {
    return (
      <div className="form-group">
        {this.state.data.map((user, index) => {
          if (index === 0) {
            return null;
          } else {
            return (
              <div>
                <p className="elem">
                  {user.name ? <span>Name : {user.name} </span> : ""}
                </p>
                <p className="elem">
                  {user.address ? <span>Address : {user.address} </span> : ""}
                </p>
                <p className="elem">
                  {user.contact ? <span>Contact : {user.contact} </span> : ""}
                </p>
                <p className="elem">
                  {user.college ? <span>College : {user.college} </span> : ""}
                </p>
                <button onClick={() => this.props.onSubmit(index)}>Edit</button>
              </div>
            );
          }
        })}
        <button className="btn" onClick={() => this.props.onClick()}>
          ADD NEW DATA
        </button>
      </div>
    );
  }
}

export default ShowData;
