import React, { Component } from "react";
import Login from "./components/Login/Login";
import User from "./components/User/User";
import Logout from "./components/Logout/Logout";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      hasFailed: false,
      isAuth: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.unauthorise = this.unauthorise.bind(this);
    this.resetFields = this.resetFields.bind(this);
  }

  handleChange(ev) {
    // eslint-disable-next-line
    switch (ev.target.getAttribute("ident")) {
      case "usr":
        this.setState({ userName: ev.target.value });
        break;
      case "pwd":
        this.setState({ password: ev.target.value });
        break;
    }
  }

  handleSubmit(ev) {
    ev.preventDefault();
    if (
      this.state.userName === "mauro" &&
      this.state.password === "latercera"
    ) {
      this.setState({ hasFailed: false, isAuth: true });
    } else {
      console.log("Login failed");
      this.setState({
        hasFailed: true
      });
    }
  }


  unauthorise(ev) {
    this.setState({
      isAuth: false
    })
  }

  resetFields(ev) {
    this.setState({
      userName: "",
      password: ""
    })
  }

  render() {
    const formProps = {
      userName: this.state.name,
      password: this.state.password,
      hasFailed: this.state.hasFailed,
      handleSubmit: this.handleSubmit,
      handleChange: this.handleChange
    };
    return (
      <BrowserRouter>
        <>
          <Route
            exact
            path="/"
            render={() => <Login formProps={formProps} />}
          />
          <Switch>
            <Route 
              path="/logout" 
              render={() => <Logout resetFields={this.resetFields} />} />
            <Route
              path="/user"
              render={() => <User unauthorise={this.unauthorise} userName={this.state.userName} />}
            />
            {this.state.isAuth && <Redirect to="/user" />}
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}
