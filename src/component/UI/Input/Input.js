import React from 'react'
import classes from './Input.module.css'
function isInvalid({valid, touched, shouldValidate}){
    return !valid &&  shouldValidate && touched
}
const Input = props => {
    const inputType = props.type || 'text'
    const addClass = [classes.Input]
    const htmlFor =`${inputType}-${Math.floor(Math.random()*11)}-${Date.now()}`
    if(isInvalid(props)){
        addClass.push(classes.invalid)
    }
    return (
        <div className={addClass.join(" ")}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input type={inputType} id={htmlFor} value={props.value} onChange={props.onChange}/>
            { isInvalid(props) ?  <span>{props.errorMessage || "Error message"}</span> : null }
        </div>
    )
}

export default Input
