import React from "react";
import style from "./MenuButton.module.css";

const MenuButton = () => {
  return (
    <ul className={style.list}>
      <li>Home</li>
      <li>Features</li>
      <li>Pricing</li>
      <li>Links</li>
    </ul>
  );
};

export default MenuButton;
