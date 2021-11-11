import React, { Component } from "react";
import classes from "./QuizCreator.module.css"
import Button from "../../component/UI/Button/Button"
import Input from "../../component/UI/Input/Input"
import Select from "../../component/UI/Select/Select"
import {createControl, validate, validateForm} from "../../form/formFramework"
import Auxiliary from "../../hoc/Auxiliary/Auxiliary"

function createOptionControl(Variant){
  return createControl({label: `Variant ${Variant}`, errorMessage: "Variant A empty", id: Variant}, {required: true})
}
function createFormControl(){
  return {
    question: createControl({label: "Write question", errorMessage: "Question empty"}, {required: true}),
    option1: createOptionControl("A"),
    option2: createOptionControl("B"),
    option3: createOptionControl("C"),
    option4: createOptionControl("D"),
  }
}

export default class QuizCreator extends Component {
  state = {
    quiz: [],
    isFormValid: false,
    rightAnswerId: 1,
    formControls: createFormControl()
  }

  submitHandler= event => {
    event.preventDefault();
  }
  addQuestionHandler = event => {
    event.preventDefault();
  }
  createQuizHandler = () => {

  }
  changeHandler = (value, controlName) => {
    const formControls = {...this.state.formControls}
    const control = {...formControls[controlName]}
    control.touched= true
    control.value = value
    control.valid = validate(control.value, control.validation)

    formControls[controlName] = control
    this.setState({
      formControls,
      isFormValid:  validateForm(formControls)
    })
  }
  renderControls(){
      return Object.keys(this.state.formControls).map((controlName, index) => {
        const control = this.state.formControls[controlName];
        return (
          <Auxiliary key={controlName + index}>
          <Input
              label={control.label}
              value={control.value}
              valid={control.valid}
              shouldValidate={!!control.shouldValidate}
              touched={control.touched}
              errorMessage={control.errorMessage}
              onChange={ event => this.changeHandler(event.target.value, controlName)}
           />
           {index === 0 ? <hr/> : null}
           </Auxiliary>
        )
      })
  }
  selectChangeHandler = event => {
    console.log(event.target.value)
    this.setState({
      rightAnswerId: +event.target.value
    })
  }
  render() {
    const select = <Select
    label="Write true answer"
    value={this.state.rightAnswerId}
    onChange={this.selectChangeHandler}
    options={[
      {text: 1, value: 1},
      {text: 2, value: 2},
      {text: 3, value: 3},
      {text: 4, value: 4}
    ]}
    />
    return (
      <div className={classes.QuizCreator}>
        <div><h1> Quiz Creator </h1>
        <form onSubmit={this.submitHandler}>


          {this.renderControls()}
         
         
         {/* 
          <input type="text" />
          <hr />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" /> */}



          {select}
          <Button type="primary" onClick={this.addQuestionHandler} disabled={!this.state.isFormValid}>Creator question</Button>
          <Button type="success" onClick={this.createQuizHandler} disabled={!this.state.quiz.length === 0}>Creator quiz</Button>
        </form>
        </div>
      </div>
    );
  }
}
