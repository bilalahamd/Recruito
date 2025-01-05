import React from "react";
import Ogilvy from "../images/Ogilvy.png";
import Intys from "../images/intys.png";
import Linkedin from "../images/linkedin.png";
import Gsk from "../images/Gsk.png";
import style from "./Organization.module.css";

const Organizations = () => {
  return (
    <section className="block container">
      <p className={style["organization__heading"]}>
        Trusted by the world leading organisations
      </p>
      <div className={style.organization}>
        <img src={Gsk} alt="Gsk" className={style.gsk} />
        <img src={Ogilvy} alt="Ogilvy" className={style.ogilvy} />
        <img src={Intys} alt="Intys" className={style.intys} />

        <img src={Linkedin} alt="Linked In" className={style.linkedin} />
        <img src={Ogilvy} alt="" className={style.ogilvy} />

        <img src={Gsk} alt="Gsk" className={style.gsk} />
      </div>
    </section>
  );
};

export default Organizations;
