import React, { Component } from "react";
import classes from "./Drawer.module.css";
import {NavLink} from "react-router-dom"
import Backdrop from "../../UI/Backdrop/Backdrop"
const links = [
  {to: "/", label: "List", exact:true},
  {to: "/auth", label: "Auth", exact:false},
  {to: "/quiz-creator", label: "Quiz creator", exact:false},
];

class Drawer extends Component {
  clickHandler = () =>{
    this.props.onClose()
  } 
  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink to={link.to} exact={link.exact} activeClassName={classes.active} onClick={this.clickHandler}>{link.label}</NavLink>
        </li>
      );
    });
  }
  render() {
    const addClass = [classes.Drawer];

    if (!this.props.isOpen) {
      addClass.push(classes.close);
    }

    return (
      <React.Fragment>
          <nav className={addClass.join(" ")}>
            <ul> {this.renderLinks()} </ul>
          </nav>
          {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> :null}
      </React.Fragment>
    );
  }
}
export default Drawer;