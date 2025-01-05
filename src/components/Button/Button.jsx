import React from "react";
import style from "./Button.module.css";
import classNames from "classnames";

const Button = ({ buttonText, buttonStyle, ImageSrc }) => {
  return (
    <button className={classNames(style.btn, style[buttonStyle])}>
      {ImageSrc && <img src={ImageSrc} className={style.ButtonImage} />}
      {buttonText}
    </button>
  );
};

export default Button;
