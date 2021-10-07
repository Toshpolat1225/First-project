import React from "react";
import classes from './QuestionList.module.css'
import AnswerItem from "./AnswerItem/AnswerItem";

const QuestionList = (props) => {
    return (
        <ul className={classes.QuestionList}>
            {props.answers.map((answer, index) => {
                return (
                    <AnswerItem
                        answer={answer}
                        key={index}
                        onClickAnswer={props.onClickAnswer}
                        state={props.state ? props.state[answer.id] : null}
                    />
                )
            })}
        </ul>
    )
}

export default QuestionList