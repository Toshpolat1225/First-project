import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./QuizList.module.css"
import axios from "../../axios/axios-quiz";

export default class QuizList extends Component {
  state = {
    quizes: []
  }
  renderQuizes(){      // Bacekenddan testlar keladi
    return this.state.quizes.map(quiz =>{
      return(
        <li key={quiz.id} className={classes.li}>
          <NavLink to={"/quiz/" + quiz.id}>
             {quiz.name}
          </NavLink>
        </li>
      )
    })
  }


  
  async componentDidMount(){
    try {
      const response =await axios.get("/quizes.json")
      const quizes =[]
      Object.keys(response.data).forEach((key, index)=>{
        quizes.push({
          id: key,
          name: `Test №${index+1}` 
        })
      })
      this.setState({
        quizes
      })
    } catch (error) {
      console.log(error)
    }
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
