import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./QuizList.module.css"
import axios from "axios";

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
  componentDidMount(){
    
    axios.get("https://react-quiz-c90cc-default-rtdb.asia-southeast1.firebasedatabase.app/quiz.json").then(response =>{
      console.log(response)
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
