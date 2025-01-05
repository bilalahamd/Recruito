import React from "react";
import EclipsImage from "../images/Ellipse.png";
import style from "./Eclips.module.css";

const Eclips = ({ primaryText, secondaryText, Image, rotation }) => {
  return (
    <div className={style.Ellipse}>
      <img src={Image} alt="" className={style.memberImage} />
      <div
        className={style.container}
        style={{ transform: `rotate(${rotation})` }}
      >
        <div className={style.wrapper}>
          <h2 className={style.primaryName}>{primaryText}</h2>
          <div className={style.contentWrapper}>
            <h2 className={style.primaryName}>{secondaryText}</h2>
            <div className={style.ellipseContainer}>
              <img src={EclipsImage} alt="" className={style.ellipseImage} />
              <p className={style.percentageText}>98%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eclips;
