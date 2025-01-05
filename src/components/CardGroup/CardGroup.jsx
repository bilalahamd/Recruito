import React from "react";
import style from "./CardGroup.module.css";
import Card from "../Cards/Card";
import Rivera from "../images/RyanRivera.jpg";
import Emma from "../images/Emma.jpg";
import Alex from "../images/member1.jpg";
import { slideFromBottom } from "../Animation";
import useScroll from "../useScroll";
import { motion } from "framer-motion";

const CardGroup = () => {
  const { ref, controls } = useScroll(0.2);
  return (
    <motion.div
      ref={ref}
      variants={slideFromBottom}
      animate={controls}
      initial="hidden"
    >
      <div className={style.CardGrid}>
        <Card
          Name="Emma Rivera"
          Designation=" Graphic Designer"
          Image={Rivera}
        />
        <Card Name="Emma Rivera" Designation=" Graphic Designer" Image={Emma} />
        <div className={style.topcard}>
          <Card
            spacialCard={style.spacialcard}
            Name="Alex Martin"
            Designation="Senior Graphic Designer"
            Image={Alex}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default CardGroup;
