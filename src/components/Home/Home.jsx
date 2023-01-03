import React from "react";
import classes from "./Home.module.css";
export default function Home() {
  return (
    <div className={classes.container}>
      <div className={classes.marketingMessag}>
        <h1>Blazify Organization</h1>
        <p>Youth powered open source organization based in India & Sweden</p>
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
