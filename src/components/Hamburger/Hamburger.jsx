import React from "react";
import style from "./Hamburger.module.css";

const Hamburger = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div
      className={`${style.hamburger} ${
        isMenuOpen ? style.hamburgerActive : ""
      }`}
      onClick={() => {
        setIsMenuOpen(!isMenuOpen);
      }}
    >
      <div className={style.hamburgerline}></div>
      <div className={style.hamburgerline}></div>
      <div className={style.hamburgerline}></div>
    </div>
  );
};

export default Hamburger;
