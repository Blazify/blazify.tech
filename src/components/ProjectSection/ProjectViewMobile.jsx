import React from "react";
import classes from "./ProjectViewMobile.module.css";
export default function ProjectViewMobile(props) {
  return (
    <div className={classes.container}>
      <img src={require("../../assets/image/mobileFrame2.png")} alt="" />
      <div className={classes.inner}>
        <img
          className={classes.innerImage}
          src={`${props.path}`}
          //   src={require("../../assets/image/61421b8c90255677b63e7b9d_phone .png")}
          alt=""
        />
      </div>
    </div>
  );
}
