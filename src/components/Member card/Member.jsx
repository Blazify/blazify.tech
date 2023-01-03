import React from "react";
import classes from "./Member.module.css";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

export default function Member(props) {
  const data = props.memberData;

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={classes.container}>
      <div className={classes.rectangle2}>
        <img
          className={classes.profile}
          src={`${data.profileURL}`}
          // src={require("../../assets/image/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg")}
          alt="profile"
        />
      </div>

      <h3>{data.name}</h3>
      <p>{data.about}</p>

      <div className={classes.skills}>
        <ul>
          {data.tags.map((item, index) => (
            <li key={index}> {item} </li>
          ))}
        </ul>
      </div>

      <div className="actions">
        <button onClick={() => openInNewTab(data.social.github)}>
          <AiFillGithub />
        </button>
        <button onClick={() => openInNewTab(data.social.linkdin)}>
          <AiFillLinkedin />
        </button>
        <button onClick={() => openInNewTab(data.social.twitter)}>
          <AiFillTwitterCircle />
        </button>
      </div>
    </div>
  );
}
