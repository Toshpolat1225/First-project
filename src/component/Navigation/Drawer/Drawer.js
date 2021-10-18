import React, { Component } from "react";
import classes from "./Drawer.module.css";
const links = [1, 2, 3, 4, 5];

class Drawer extends Component {
  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <a> Link {link} </a>
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
      <nav className={addClass.join(" ")}>
        <ul> {this.renderLinks()} </ul>
      </nav>
    );
  }
}

export default Drawer;
