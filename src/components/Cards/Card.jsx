import React from "react";
import Member1 from "../images/member1.jpg";
import style from "./Card.module.css";
import Badge from "../Badge/Badge";
import classNames from "classnames";

const Card = ({ spacialCard, Name, Designation, Image }) => {
  return (
    <div className={classNames(style.card, style["card--icon"], spacialCard)}>
      <header className={style["card--header"]}>
        <img src={Image} alt="" className={style.cardHeaderImage} />
        <h2 className={style.name}>{Name}</h2>
        <p className={style.designation}>{Designation}</p>
      </header>
      <div className={style["card__body"]}>
        <Badge Text="Adobe Creative Suite" />
        <Badge Text="Figma" />
        <Badge Text="Typography" />
        <Badge Text="After Effects" />
      </div>
    </div>
  );
};

export default Card;
