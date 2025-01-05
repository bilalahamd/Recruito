import React, { useState } from "react";
import style from "./Navbar.module.css";
import Hamburger from "../Hamburger/Hamburger";
import Button from "../Button/Button";
import Vector from "../images/Vector.png";

const ExampleNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  return (
    <div className={style.wrapper}>
      <nav className={style.nav}>
        <div className={style.logo}>
          <img src="/Logo.jpg" alt="" className={style["navbar-logo"]} />
        </div>
        <Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div
          className={`${style["nav__list"]} ${
            isMenuOpen ? style["active"] : ""
          }`}
        >
          <ul className={style.list}>
            <li className={style["nav__items"]}>
              <a href="">
                Home
                <img src={Vector} alt="" className={style.vectorimg} />
              </a>
            </li>
            <li className={style["nav__items"]}>
              <a href="">Features</a>
            </li>
            <li className={style["nav__items"]}>
              <a href="">Pricing</a>
            </li>
            <li className={style["nav__items"]}>
              <a href="">Resource</a>
            </li>
          </ul>
          <Button buttonText="Contact Us" buttonStyle="btn--primary" />
        </div>
      </nav>
    </div>
  );
};

export default ExampleNavbar;
