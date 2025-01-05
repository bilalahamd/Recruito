import React from "react";
import Rayn from "../images/Ryan.png";
import Alex from "../images/Alex.png";
import Emma from "../images/Emma.png";
import style from "./ShortListed.module.css";
import Eclips from "../Eclips/Eclips";
import Member1 from "../images/member1.jpg";

const ShortListed = () => {
  return (
    <div className={style.ShortListed}>
      <Eclips
        primaryText="Alex Martin"
        secondaryText="#1"
        Image={Member1}
        rotation="-2deg"
      />
      <Eclips
        primaryText="Emma Rivera"
        secondaryText="#2"
        Image={Member1}
        rotation="0.61deg"
      />
      <Eclips
        primaryText="Ryan Lee"
        secondaryText="#3"
        Image={Member1}
        rotation="1.65deg"
      />
    </div>
  );
};

export default ShortListed;
