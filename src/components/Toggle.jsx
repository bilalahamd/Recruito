import React, { Children, useState } from "react";
import style from "../components/FaqSection/FaqSection.module.css";
import Chevron from "../components/images/chevron.png";

const Toggle = ({ children, Title }) => {
  const [Toggle, setToggle] = useState(true);
  return (
    <div onClick={() => setToggle(!Toggle)}>
      <div className={style.question}>
        <h3>{Title}</h3>
        <img
          src={Chevron}
          alt=""
          className={`${style.chevron} ${Toggle ? style.chevronActive : ""}`}
        />
      </div>
      {Toggle ? children : ""}
    </div>
  );
};

export default Toggle;
