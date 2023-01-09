import React from "react";
import classes from "./ProjectViewLaptop.module.css";
export default function ProjectViewLaptop(props) {
  return (
    <div className={classes.LaptopContainer}>
      <img src={require("../../assets/image/laptopView2.png")} alt="" />
      <div className={classes.LapInner}>
        <img
          className={classes.LapInnerImage}
          src={`${props.path}`}
          //   src={require("../../assets/image/61421b8c90255677b63e7b9d_phone .png")}
          alt=""
        />
      </div>
    </div>
  );
}
