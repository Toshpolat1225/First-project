import React, { Component } from "react";
import classes from "./Auth.module.css"
import Button from "../../component/UI/Button/Button"
import Input from "../../component/UI/Input/Input"
export default class Auth extends Component {
  loginHandler = () =>{
  
  }
  registerHandler = () =>{
  
  }
  submitHandler = event =>{
    event.preventDefault();
  }
  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Auth</h1>
          <form onSubmit={this.submitHandler} className={classes.AuthForm}>
            <Input label="Email"/>
            <Input label="Password" errorMessage={"Test"}/>
            <Button type="success" onClick={this.loginHandler}>Log in</Button>
            <Button type="primary" onClick={this.registerHandler}>Register</Button>
          </form>
        </div>
      </div>
    );
  }
}