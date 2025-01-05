import React from "react";
import style from "./Badge.module.css";

const Badge = ({ Text }) => {
  return <span className={style.badge}>{Text}</span>;
};

export default Badge;
