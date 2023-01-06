import React from "react";
import classes from "./ProjectSection.module.css";
import ProjectView from "./ProjectView";

export default function ProjectSection() {
  return (
    <div className={classes.projectSection}>
      <div className={classes.projectHeader}>
        <div className={classes.title}>
          <span className={classes.dot}></span>
          <div>
            <h1>BlazeX</h1>
            <h2>version 0.1.25</h2>
          </div>
        </div>
        <div className={classes.about}>
          <p>AOT compiled object oriented programming language </p>
          <div>
            <h1>View Project </h1>
            <a href="www.google.com">--{">"}</a>
          </div>
        </div>
      </div>
      <div className={classes.projectView}>
        <ProjectView path="https://play-lh.googleusercontent.com/S1dMTqvysB-31RezOng7Rj-9X-3dseboYAZ2E50CqZG0jbYxuseP3EaDJ4BGk76jEg=h800" />
        <ProjectView path="https://play-lh.googleusercontent.com/S1dMTqvysB-31RezOng7Rj-9X-3dseboYAZ2E50CqZG0jbYxuseP3EaDJ4BGk76jEg=h800" />
        <ProjectView path="https://play-lh.googleusercontent.com/S1dMTqvysB-31RezOng7Rj-9X-3dseboYAZ2E50CqZG0jbYxuseP3EaDJ4BGk76jEg=h800" />
      </div>
    </div>
  );
}
