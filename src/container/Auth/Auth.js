import React, { Component } from "react";
import classes from "./Auth.module.css"
import Button from "../../component/UI/Button/Button"
import Input from "../../component/UI/Input/Input"
export default class Auth extends Component {
  state = {
    formControls:{
      email:{
        value: "",
        type: "email",
        label: "Email",
        errorMessage: "Error message email",
        valid: false,
        touched: false,
        validation:{
          required: true,
          email: true,
        }
      },
      password:{
        value: "",
        type: "password",
        label: "Password",
        errorMessage: "Error message password",
        valid: false,
        touched: false,
        validation:{
          required: true,
          minLength: 6
        }
      },
    }
  }
  loginHandler = () =>{
  }
  registerHandler = () =>{
  }
  submitHandler = event =>{
    event.preventDefault();
  }
  validateControl(value, validation) {
    if(!validation){
      return true
    }
    let isValid = true;
  }
  onChangeHandler = (event, controlName) => {
    console.log("111")
    const formControls = {...this.state.formControls}
    const control = {...formControls[controlName]}
    control.value = event.target.value
    control.touched = true
    control.valid = this.validateControl(control.value, control.validation)
    formControls[controlName] = control
    this.setState({formControls})
  }
  renderInputs(){
    const inputs = Object.keys(this.state.formControls).map((controlName, index)=>{
      const control = this.state.formControls[controlName];
      return(
        <Input 
        key={controlName + index}  type={control.type}  value={control.value}  valid={control.valid}  touched={control.touched} label={control.label}  shouldValidate={!!control.validation} errorMessage={control.errorMessage} onChange={event => this.onChangeHandler(event, controlName)}/>
      )
    }
    )
    return inputs
  }
  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Auth</h1>
          <form onSubmit={this.submitHandler} className={classes.AuthForm}>
            {/* <Input label="Email"/>
            <Input label="Password" errorMessage={"Test"}/> */}
            {this.renderInputs()}
            <Button type="success" onClick={this.loginHandler}>Log in</Button>
            <Button type="primary" onClick={this.registerHandler}>Register</Button>
          </form>
        </div>
      </div>
    );
  }
}