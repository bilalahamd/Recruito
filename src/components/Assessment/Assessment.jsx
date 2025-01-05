import React from "react";
import AssessmentImage from "../images/Assessment.png";

import style from "./Assessment.module.css";

const Assessment = () => {
  return (
    <div className={style.Assessment}>
      <img src={AssessmentImage} alt="" />
    </div>
  );
};

export default Assessment;
