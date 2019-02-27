import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import { Route } from "react-router-dom";

export default class User extends Component {
  render() {
    return (
      <div className="container my-4">
        <NavBar unauthorise= {this.props.unauthorise} />
        <div className="jumbotron">
          <Route 
            exact 
            path="/user"
            render={() => <h2>Hello {this.props.userName}</h2>} />
          <Route
            path="/user/dashboard"
            render={() => <h2>Dashboard page</h2>}
          />
          <Route 
            path="/user/friends"
            render={() => <h2>Social page</h2>} />
        </div>
      </div>
    );
  }
}
