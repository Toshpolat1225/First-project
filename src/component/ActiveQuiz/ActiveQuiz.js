import React from "react";
import classes from './ActiveQuiz.module.css'
import QuestionList from "./QuestionList/QuestionList";

const ActiveQuiz = (props) => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                <strong>{props.answerNumber}.</strong>
                {props.question}
            </span>

            <small>{props.answerNumber} in {props.quizLength}</small>
        </p>

        <QuestionList
            onClickAnswer={props.onClickAnswer}
            answers={props.answers}
            state={props.state}
        />
    </div>
)

export default ActiveQuiz