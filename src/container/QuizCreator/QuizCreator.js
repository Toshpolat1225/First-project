import React, { Component } from "react";
import classes from "./QuizCreator.module.css"
import Button from "../../component/UI/Button/Button"
import Input from "../../component/UI/Input/Input"
import {createControl} from "../../form/formFramework"
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
    formControls: createFormControl()
  }

  submitHandler= event => {
    event.preventDefault();
  }
  addQuestionHandler = () => {

  }
  createQuizHandler = () => {

  }
  changeHandler = (value, controlName) => {

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
  render() {
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



          <select></select>
          <Button type="primary" onClick={this.addQuestionHandler}>Creator question</Button>
          <Button type="success" onClick={this.createQuizHandler}>Creator quiz</Button>
        </form>
        </div>
      </div>
    );
  }
}
