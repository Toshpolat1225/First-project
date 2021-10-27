import React, { Component } from "react";
import classes from "./QuizCreator.module.css"
import Button from "../../component/UI/Button/Button"

export default class QuizCreator extends Component {

  submitHandler= event => {
    event.preventDefault();
  }
  addQuestionHandler = () => {

  }
  createQuizHandler = () => {

  }

  render() {
    return (
      <div className={classes.QuizCreator}>
        <div><h1> Quiz Creator </h1>
        <form onSubmit={this.submitHandler}>
          <input type="text" />
          <hr />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />



          <select></select>
          <Button type="primary" onClick={this.addQuestionHandler}>Creator question</Button>
          <Button type="success" onClick={this.createQuizHandler}>Creator quiz</Button>
        </form>
        </div>
      </div>
    );
  }
}
