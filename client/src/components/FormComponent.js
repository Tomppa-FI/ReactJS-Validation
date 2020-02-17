import React from "react";
import "./css/FormComponent.css";
import validateInput from "../utils/validateInput";
import {withRouter} from "react-router-dom";

class FormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: {},
      validity: {},
      statusMsg: ""
    }
  }

  render() {
    return (
      <div className="Form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="text-center">
            {this.state.statusMsg && <span className="text-success">{this.state.statusMsg}</span>}
          </div>
          <div className="form-group">
            <label>Username</label>
            <input 
              type="text" 
              className={"form-control" + (typeof this.state.validity.username === "undefined" ? "" : this.state.validity.username ? " is-valid" : " is-invalid")}
              name="username"
              onBlur={this.handleBlur}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              className={"form-control" + (typeof this.state.validity.email === "undefined" ? "" : this.state.validity.email ? " is-valid" : " is-invalid")}
              name="email"
              onBlur={this.handleBlur}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              className={"form-control" + (typeof this.state.validity.password === "undefined" ? "" : this.state.validity.password ? " is-valid" : " is-invalid")}
              name="password"
              onBlur={this.handleBlur}
              required
            />
          </div>
          <div className="form-group">
            <label>Repeat Password</label>
            <input 
              type="password" 
              className={"form-control" + (typeof this.state.validity.confirmPassword === "undefined" ? "" : this.state.validity.confirmPassword ? " is-valid" : " is-invalid")}
              name="confirmPassword"
              onBlur={this.handleBlur}
              required
            />
          </div>
          <input className="btn btn-primary rounded-pill submitBtn" type="submit" />
        </form>
      </div>
    )
  }

  handleBlur = event => {
    const name = event.target.name;
    const val = event.target.value;
    const [isValid, msg] = validateInput(name, val, this.state.userData);
    if (isValid) {
      event.target.setCustomValidity("");
    } else {
      event.target.setCustomValidity(msg);
    }
    this.setState((prevState, prevProps) => {
      return {
        userData: {
          ...prevState.userData,
          [name]: val
        },
        validity: {
          ...prevState.validity,
          [name]: isValid
        }
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addUserData(this.state.userData);
    this.setState({
      statusMsg: "Registration successful. You will be redirected in 5 seconds"
    }, () => {
      setTimeout(() => {
        this.props.history.push("/");
      }, 5000)
    })
  }
}

export default withRouter(FormComponent);