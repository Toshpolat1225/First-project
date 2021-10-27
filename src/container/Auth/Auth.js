import React, { Component } from "react";
import classes from "./Auth.module.css"
import Button from "../../component/UI/Button/Button"
import Input from "../../component/UI/Input/Input"
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
export default class Auth extends Component {
  state = {
    isFormValid: false,
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
    if(validation.required){
      isValid = value.trim() !== "" && isValid
    }
    if(validation.email){
     isValid = validateEmail(value) && isValid
    }
    if(validation.minLength){
      isValid = value.trim().length >= validation.minLength && isValid
    }
    return isValid
  }
  onChangeHandler = (event, controlName) => {
    console.log(`${controlName}:`, event.target.value)
    const formControls = {...this.state.formControls}
    const control = {...formControls[controlName]}
    control.value = event.target.value
    control.touched = true
    control.valid = this.validateControl(control.value, control.validation)
    formControls[controlName] = control
    let isFormValid = true
    Object.keys(formControls).forEach(name=>{
      isFormValid = formControls[name].valid && isFormValid
    })
    this.setState({formControls, isFormValid})
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
            <Button type="success" onClick={this.loginHandler} disabled={!this.state.isFormValid}>Log in</Button>
            <Button type="primary" onClick={this.registerHandler} disabled={!this.state.isFormValid}>Register</Button>
          </form>
        </div>
      </div>
    );
  }
}