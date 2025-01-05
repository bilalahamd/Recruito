import React from "react";
import style from "./Footer.module.css";
import Button from "../Button/Button";
import Linkedin from "../images/flinkedin.png";
import Facebook from "../images/facebook.png";
import X from "../images/x.png";
import Instagram from "../images/instagram.png";
import Circle from "../images/circle.png";
import Search from "../images/search.png";
import ButtonVecotr from "../images/Buttonvector.png";

const Footer = () => {
  return (
    <section>
      <div className={style.footer}>
        <header className={style.Footerheader}>
          <div className={style.searchicondiv}>
            <img src={Circle} alt="" className={style.circleImage} />
            <img src={Search} alt="" className={style.searchImage} />
          </div>
          <h2 className={style.footerheading}>
            Ready to enhance your hiring process ?
          </h2>

          <Button
            buttonText="Request A Demo"
            buttonStyle="btn--primary"
            ImageSrc={ButtonVecotr}
          />
        </header>
        <div className={style.footerCompanySection}>
          <div className={style.FooterBodyContainer}>
            <div className={style.footerbody}>
              <div className={style.footerLogoSection}>
                <div className={style.footerlogo}>
                  <img
                    src="/Logo.jpg"
                    alt=""
                    className={style["footer-logo"]}
                  />
                </div>
                <div>
                  <p>© 2024 Recruito AI . All rights reserved.</p>
                </div>
              </div>
              <div className={style.footerSocaillinks}>
                <div className={style.footermedia}>
                  <img src={X} alt="" />
                  <img src={Instagram} alt="" />
                  <img src={Linkedin} alt="" />
                  <img src={Facebook} alt="" />
                </div>
                <div className={style.Terms}>
                  <a href="">Term</a>
                  <a href="">Privacy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
