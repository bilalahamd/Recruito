import React from "react";
import style from "./AdvantageCard.module.css";
import Streamline from "../images/streamline.png";

const AdvantageCard = ({ Image, Heading, Text }) => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <img src={Image} alt="" className={style.StreamlineImage} />
      </div>
      <h3 className={style.AdvantageCardheading}>{Heading}</h3>
      <p className={style.AdvantageCardbody}>{Text}</p>
    </div>
  );
};

export default AdvantageCard;
