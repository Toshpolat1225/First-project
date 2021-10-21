import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./QuizList.module.css"

export default class QuizList extends Component {
  renderQuizes(){      // Bacekenddan testlar keladi
    return [1,2,3].map((quiz, index)=>{
      return(
        <li key={index} className={classes.li}>
          <NavLink to={"/quiz/" + quiz}>
            Test {quiz}
          </NavLink>
        </li>
      )
    })
  }
  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1 className={classes.h1}> Quiz List </h1>
          <ul className={classes.ul}>
            {this.renderQuizes()}
          </ul>
        </div>
      </div>
    );
  }
}
