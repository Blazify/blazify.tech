import React from "react";
import classes from "./ProjectSection.module.css";
import ProjectViewMobile from "./ProjectViewMobile";
import ProjectViewLaptop from "./ProjectViewLaptop";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export default function ProjectSection(props) {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className={classes.projectSection}>
      <div className={classes.projectHeader}>
        <div className={classes.title}>
          <span className={classes.dot}></span>
          <div>
            <h1>{props.ProjectData.title}</h1>
            <h2>{props.ProjectData.version}</h2>
          </div>
        </div>
        <div className={classes.about}>
          <p>{props.ProjectData.about}</p>
          <div>
            <h1>View Project </h1>
            <button
              className={classes.arrow}
              onClick={() => openInNewTab(props.ProjectData.link)}
            >
              <HiOutlineArrowLongRight className={classes.arrowIcon} />
            </button>
            {/* <a href={props.ProjectData.link}>--{">"}</a> */}
          </div>
        </div>
      </div>
      {props.ProjectData.type === "Laptop" && (
        <div className={classes.projectViewLaptop}>
          <ProjectViewLaptop path={props.ProjectData.URLlink} />
        </div>
      )}
      {props.ProjectData.type === "Mobile" && (
        <div className={classes.projectViewMobile}>
          <ProjectViewMobile path={props.ProjectData.URLlink} />
          <ProjectViewMobile path={props.ProjectData.URLlink} />
          <ProjectViewMobile path={props.ProjectData.URLlink} />
        </div>
      )}{" "}
      {props.ProjectData.type === "Laptop & Mobile" && (
        <div className={classes.projectViewLaptopAndMobile}>
          <ProjectViewLaptop
            className={classes.LaptopOverflow}
            path={props.ProjectData.URLlinkLaptop}
          />
          <ProjectViewMobile
            className={classes.MobileOverflow}
            path={props.ProjectData.URLlinkMobile}
          />
        </div>
      )}
    </div>
  );
}
