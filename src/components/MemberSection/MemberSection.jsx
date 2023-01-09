import React from "react";
import classes from "./MemberSection.module.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Member from "../Member card/Member";
import memberData from "../../assets/MemberData";

export default function MemberSection() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className={classes.memberSection}>
      <div className={classes.title}>
        <div>
          <span className={classes.dot}></span>

          <h1>Members</h1>
        </div>
      </div>
      <div className={classes.container}>
        <motion.div
          ref={carousel}
          className={classes.carousel}
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className={classes.innerCarousel}
          >
            {memberData.map((data, index) => (
              <motion.div key={index} className={classes.item}>
                <Member
                  className={classes.member}
                  key={index}
                  memberData={data}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
