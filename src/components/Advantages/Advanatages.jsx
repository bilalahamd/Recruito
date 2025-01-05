import React from "react";
import Button from "../Button/Button";
import style from "./Advantages.module.css";
import AdvantageCard from "../AdvantageCard/AdvantageCard";
import Streamline from "../images/streamline.png";
import Streamline2 from "../images/streamline2.png";
import Streamline3 from "../images/streamline3.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fade } from "../Animation";
import useScroll from "../useScroll";

const Advanatages = () => {
  const { ref, controls } = useScroll(0.2);

  return (
    <motion.div
      ref={ref}
      variants={fade}
      animate={controls}
      initial="hidden"
      className={`${style.advantagesBlock} block block--dark`}
    >
      <header className={style.header}>
        <Button buttonText="Benefits " buttonStyle="btn--hero" />
        <h2 className="block__heading">
          Unlock the advantages of using Recruito AI for your hiring needs.
        </h2>
      </header>

      <div className="block container">
        <div className="Grid grid--1x3 ">
          <AdvantageCard
            Image={Streamline}
            Heading="Automate Processes"
            Text="Let Recruito handle resume screening, scheduling, and interviews so you can focus on strategic decisions."
          />
          <AdvantageCard
            Image={Streamline2}
            Heading="Provide Instant Information"
            Text="Quickly access relevant candidate data, ensuring no talent is overlooked in your search."
          />
          <AdvantageCard
            Image={Streamline3}
            Heading="Make Data-Driven Decisions"
            Text="Utilize analytics to rank candidates based on key metrics, providing unbiased recommendations for your hiring team."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Advanatages;
