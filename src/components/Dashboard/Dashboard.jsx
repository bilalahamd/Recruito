import React from "react";
import DashboardImage from "../images/Dashboard.png";
import Featured from "../images/Featured.png";
import Customer from "../images/Customer.png";
import style from "./Dashboar.module.css";
import classNames from "classnames";

const Dashboard = () => {
  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <div className={style.smallDiv}>
          <p className={style.dashboarheader}>
            See how we create an autonomous ai agent
          </p>
          <img
            src={DashboardImage}
            alt="Dashboard"
            className={style.DashboardImage}
          />
          <img src={Featured} alt="" className={style.left} />
          <img src={Customer} alt="" className={style.right} />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
