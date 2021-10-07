import React from "react";
import classes from './AnswerItem.module.css'

const AnswerItem = (props) => {
    const addClass =[classes.AnswerItem]
    if(props.state){
        addClass.push(classes[props.state])
    }
    return (
        <li className={addClass.join(' ')}
            onClick={() => { props.onClickAnswer(props.answer.id) }}
        >
            {props.answer.text}
        </li>
    )
}

export default AnswerItem