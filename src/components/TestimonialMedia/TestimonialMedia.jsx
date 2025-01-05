import React from "react";
import style from "./TestimonialMedia.module.css";

const TestimonialMedia = ({ Image, Heading, Company, Description }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.TestimonilaMedia}>
        <div className={style.container}>
          <div className={style.imageContainer}>
            <img src={Image} alt="" className={style.Image} />
          </div>
          <div className={style.namecontainer}>
            <h3>{Heading}</h3>
            <p>{Company} </p>
          </div>
        </div>
        <p className={style.description}>{Description}</p>
      </div>
    </div>
  );
};

export default TestimonialMedia;
