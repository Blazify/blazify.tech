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
            Blazify is a organization led by young entrepreneurs to make the
            lives of people easier by digitalizing them.
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
          {/* <h1>LOGO</h1> */}

          <div>
            <button
              className={classes.btn}
              onClick={() => openInNewTab("https://github.com/Blazify")}
            >
              <AiFillGithub />
            </button>
            <button
              className={classes.btn}
              onClick={() =>
                openInNewTab("https://www.linkedin.com/company/blazify/")
              }
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
              C/O Runa Laila, Netaji Park, Islampur, Murshidabad, West Bengal -
              742304
            </p>
          </div>
          <div className={classes.callUsOn}>
            <h2>CALL US ON</h2>
            <p> +91 8250739628</p>

            <h1>DM Us:</h1>
            <a href="www.google.com">admin@blazify.tech</a>
          </div>
          <div className={classes.ourPolicies}>
            <h2>OUR POLICIES</h2>
            <a href="/privacypolicy">Privacy Policy</a>
            <a href="/termsofservice">Terms of Use</a>
            <a href="/disclamer">Disclamer</a>
          </div>
        </div>
      </div>
    </div>
  );
}
