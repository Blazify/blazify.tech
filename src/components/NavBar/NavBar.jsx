import React from "react";
import classes from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <a href="#logo"> LOGO</a>
      </div>
      <div className={classes.action}>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#members">Members</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
}
