import React from "react";
import Member from "../images/Member3.png";
import Captcha from "../images/Captcha.png";
import style from "./Interview.module.css";

const Interview = () => {
  return (
    <div className={style.Interview}>
      <img src={Member} alt="" className={style.InterviewerImage1} />
      <img src={Captcha} alt="" className={style.InterviewerImage2} />
    </div>
  );
};

export default Interview;
