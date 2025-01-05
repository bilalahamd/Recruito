import React from "react";
import Group1 from "../images/Group 11.png";
import Group2 from "../images/Group 12.png";
import Group3 from "../images/Group 13.png";
import style from "./Resume.module.css";
import { fade } from "../Animation";
import useScroll from "../useScroll";
import { motion } from "framer-motion";

const Resume = () => {
  const { ref, controls } = useScroll(0.2);
  return (
    <motion.div ref={ref} variants={fade} animate={controls} initial="hidden">
      <div className={style.Resume}>
        <img src={Group1} alt="" className={style.Image1} />
        <img src={Group2} alt="" className={style.Image2} />
        <img src={Group3} alt="" className={style.Image3} />
      </div>
    </motion.div>
  );
};

export default Resume;
