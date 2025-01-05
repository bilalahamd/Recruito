import React from "react";
import Navbar from "../NavBar/Navbar";
import Hero from "../Hero/Hero";

import style from "./Main.module.css";
import classNames from "classnames";
import Dashboard from "../Dashboard/Dashboard";

const Main = () => {
  return (
    <>
      <div className={style.wrapper}>
        <div className={classNames(style.components, "container")}>
          <Navbar />
          <Hero />
        </div>
        <div>
          <Dashboard />
        </div>
      </div>
    </>
  );
};

export default Main;
