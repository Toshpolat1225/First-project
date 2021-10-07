import React from 'react'
import classes from './Button.module.css'
const Button = (props) => {
    const addClass = [
        classes.Button,
        classes[props.type],
    ]
    return (
        <div>
            <button 
            onClick={props.onClick} 
            className={addClass.join(' ')}
            disabled={props.disabled}
            >
               {props.children} 
            </button>
        </div>
    )
}

export default Button
