import React, { Component } from "react";
import Is from '@flk/supportive-is';
import http from './../endpoints'
import user from './../component/User';


export default class Login extends Component {

  state = {
    validation: {
      email: null,
      password: null,
      valid: null
    },
  }

  validateEmail = e => {

    let validation = this.state.validation;
    validation.email = null;
    validation.valid = null;
    if (Is.empty(e.target.value) && e.target.required) {
      validation.email = 'Email address is required'
    }
    if (!Is.email(e.target.value) && !Is.empty(e.target.value)) {
      validation.email = 'Invalid Email Address'
    }

    this.setState({
      validation,
    })
  };

  validatePassword = e => {

    let validation = this.state.validation;
    validation.valid = null;
    validation.password = null;
    if (Is.empty(e.target.value) && e.target.required) {
      validation.password = 'Password is required'
    }
    if ((e.target.value.length) < 8 && !Is.empty(e.target.value)) {
      validation.password = 'Min 8 numbers'
    }
    this.setState({
      validation,
    })

  };

  submit = async (e) => {

    e.preventDefault();// to prevent loading

    try {
      //console.log(e.target)
      let { data } = await http.post('/login', e.target);
      this.setState({
        validation: {
          valid: "valid data ....!"
        }
      });

      user.login(data.user)
      this.props.history.push('/users');

    } catch (error) {
      let errors = error.response.data.errors;
      this.setState({
        validation: {
          valid: errors
        }
      })
    }
  };

  render() {
    return (
      <div className="container" id="login-page">
        <div className="text-center">
          <h2 className="my-5">Login Form</h2>
        </div>
        <form className="d-flex flex-column" onSubmit={this.submit} >
          <div className="form-group align-self-center">
            <input type="email"
              className="form-control"
              placeholder="Email address"
              required={false}
              name="email"
              onInput={this.validateEmail}
            />
            {this.state.validation.email !== null &&
              this.state.validation.valid === null &&
              <label className="pt-3">{this.state.validation.email}</label>}
          </div>
          <div className="form-group align-self-center">
            <input type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              required
              onInput={this.validatePassword}
            />
            {this.state.validation.password !== null &&
              this.state.validation.valid === null &&
              <label className="pt-3">{this.state.validation.password}</label>}
          </div>
          <div>

            <button className="btn btn-primary" id="btn-login" type="submit">Login </button>
          </div>
          {this.state.validation.valid !== null &&
            <label className="pt-3">{this.state.validation.valid}</label>}
        </form>

      </div>

    );
  }
}
      //
