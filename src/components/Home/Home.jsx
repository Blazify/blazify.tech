import React from "react";
import classes from "./Home.module.css";
export default function Home() {
  return (
    <div className={classes.container}>
      <div className={classes.marketingMessag}>
        <h1>Blazify Private Limited</h1>
        <p>
          {" "}
          Blazify is a organization led by young entrepreneurs to make the lives
          of people easier by digitalizing them.
        </p>
      </div>
      <div className={classes.illustratorImg}>
        <img
          src={require("../../assets/image/6217503.jpg")}
          alt="illustratorImg"
        />
      </div>
    </div>
  );
}
