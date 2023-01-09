import React from "react";
import classes from "./NavBar.module.css";

export default function NavBar(props) {
  const [section1, section2, section3, section4] = props.sections;
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <li
          className={classes.actionLi}
          onClick={() => props.scrollHandler(section1)}
        >
          LOGO
        </li>
      </div>
      <ul className={classes.action}>
        <li
          className={classes.actionLi}
          onClick={() => props.scrollHandler(section1)}
        >
          Home
        </li>
        <li
          className={classes.actionLi}
          onClick={() => props.scrollHandler(section2)}
        >
          Projects
        </li>
        <li
          className={classes.actionLi}
          onClick={() => props.scrollHandler(section3)}
        >
          Members
        </li>
        <li
          className={classes.actionLi}
          onClick={() => props.scrollHandler(section4)}
        >
          About
        </li>
      </ul>
    </div>
  );
}
