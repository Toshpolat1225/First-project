import React from "react";
import classes from "./MenuToggle.module.css";

const MenuToggle = (props) => {
    const addClass = [classes.MenuToggle, "fa"];
    if (props.isOpen) {
        addClass.push("fa-times");
        addClass.push(classes.open);
    } else {
        addClass.push("fa-bars");
    }
    return <i className = { addClass.join(" ") }
    onClick = { props.onToggle }
    />;
};

export default MenuToggle;