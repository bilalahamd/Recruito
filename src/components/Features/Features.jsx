import React from "react";
import style from "./Feature.module.css";

const Features = ({ Heading, Description, classname = "" }) => {
  return (
    <div className={`${style.Features} ${classname}`}>
      <h2>{Heading}</h2>
      <p>{Description}</p>
    </div>
  );
};

export default Features;
