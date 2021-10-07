import React from "react";
import classes from "./FinishedQuiz.module.css";
import Button from "../UI/Button/Button";

const FinishedQuiz = (props) => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === "success") {
            total++;
        }
        return total;
    }, 0);
    return ( <
        div className = { classes.FinishedQuiz } >
        <
        ul > { " " } {
            props.quiz.map((quizItem, index) => {
                console.log(quizItem);
                const addClass = [
                    "fa",
                    props.results[quizItem.id] === "error" ? "fa-times" : "fa-check",
                    classes[props.results[quizItem.id]],
                ];
                return ( <
                    li className = { classes[props.results[quizItem.id]] }
                    key = { index } >
                    <
                    strong > { index + 1 } < /strong>.&nbsp; {quizItem.question}{" "} <
                    i className = { addClass.join(" ") } > < /i>{" "} < /
                    li >
                );
            })
        } { " " } <
        /ul>{" "} <
        div className = { classes.cardFlex } >
        <
        p > { " " }
        True { successCount } in { props.quiz.length } { " " } <
        /p>{" "} <
        div >
        <
        Button onClick = { props.onRetry }
        type = "primary" > { " " }
        Retry { " " } <
        /Button>{" "} <
        Button onClick = { props.onRetry }
        type = "success" > { " " }
        Continue { " " } <
        /Button>{" "} < /
        div > { " " } <
        /div>{" "} < /
        div >
    );
};

export default FinishedQuiz;