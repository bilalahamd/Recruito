import React from "react";
import style from "./Hero.module.css";
import ButtonVecotr from "../images/Buttonvector.png";
import TextVector from "../images/textvector.png";
import { titleAnimation, slideFromBottom } from "../Animation";
import useScroll from "../useScroll";
import { motion } from "framer-motion";
import Button from "../Button/Button";

const Hero = () => {
  const { ref, controls } = useScroll(0.2);
  return (
    <motion.section
      initial="hidden"
      ref={ref}
      variants={slideFromBottom}
      animate={controls}
      className="block container"
    >
      <header className="block__header">
        <h1 className="block__heading">
          Revolutionize Your Hiring<br></br> Process with{" "}
          <span className={style["highlighted-text"]}>Recruito AI</span>
          <img src={TextVector} alt="" className={style.vectorimage} />
        </h1>
        <p className={style.heroDescription}>
          Your fully automated hiring assistant that sources, screens,<br></br>
          and interviews candidates effortlessly
        </p>
        <div className={style.HeroButtons}>
          <Button
            buttonText="Start Your Free Trial"
            buttonStyle="btn--secondary"
          />
          <Button
            buttonText="Request A Demo"
            buttonStyle="btn--primary"
            ImageSrc={ButtonVecotr}
          />
        </div>
      </header>
    </motion.section>
  );
};

export default Hero;
