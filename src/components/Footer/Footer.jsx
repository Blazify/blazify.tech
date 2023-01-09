import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

import { HiOutlineArrowLongRight } from "react-icons/hi2";

import classes from "./Footer.module.css";

export default function Footer() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={classes.container}>
      <div className={classes.about}>
        <div className={classes.slogan}>
          <h1>Let work</h1>
          <h1 className={classes.together}> together</h1>
        </div>

        <div className={classes.letsTalk}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="www.google.com"> LET'S TALK </a>
          <button
            className={classes.arrow}
            onClick={() => openInNewTab("www.google.com")}
          >
            <HiOutlineArrowLongRight className={classes.arrowIcon} />
          </button>
        </div>
      </div>
      <div className={classes.secondSection}>
        <div className={classes.logo}>
          <h1>LOGO</h1>

          <div>
            <button
              className={classes.btn}
              onClick={() => openInNewTab("www.google.com")}
            >
              <AiFillGithub />
            </button>
            <button
              className={classes.btn}
              onClick={() => openInNewTab("www.google.com")}
            >
              <AiFillLinkedin />
            </button>
            <button
              className={classes.btn}
              onClick={() => openInNewTab("www.google.com")}
            >
              <AiFillTwitterCircle />
            </button>
          </div>
        </div>

        <div className={classes.linkes}>
          <div className={classes.address}>
            <h2>ADDRESS</h2>
            <p>
              C/O Runa Laila, Netaji Park, Islampur Murshidabad, West Bengal,
              India- 742304
            </p>
          </div>
          <div className={classes.callUsOn}>
            <h2>CALL US ON</h2>
            <p>+91 123456789</p>
            <p>+91 123456789</p>
            <h1>DM Us:</h1>
            <a href="www.google.com">info@xyz.com</a>
          </div>
          <div className={classes.ourPolicies}>
            <h2>OUR POLICIES</h2>
            <a href="www.google.com">Privacy Policy</a>
            <a href="www.google.com">Terms of Use</a>
            <a href="www.google.com">Refund Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}
