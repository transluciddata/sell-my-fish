import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";

export default class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedirectSet: false,
      count: 5
    };
  }

  componentDidMount() {
    const timer = setInterval(() => {
      if (this.state.count === 0) {
        clearInterval(timer);
        setTimeout(() => this.setState({ isRedirectSet: true }), 0);
      } else {
        this.setState({ count: this.state.count - 1 });
      }
    }, 1000);
  }

  componentWillUnmount() {
    this.props.resetFields();
  }

  render() {
    return (
      <>
        <div className="container my-4">
          <div className="jumbotron">
            <h2 className="title">
              You just logged out! In <span style={{color:"red", fontWeight:"600", fontSize:"2rem"}}>{this.state.count}</span> secs you will be
              redirected to home page!
            </h2>
            <p className="lead">
              If not click <NavLink to="/">here</NavLink>
            </p>
          </div>
        </div>
        {this.state.isRedirectSet && <Redirect to="/" />}
      </>
    );
  }
}
