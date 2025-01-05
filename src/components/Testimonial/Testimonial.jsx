import React from "react";
import style from "./Testimonial.module.css";
import Button from "../Button/Button";
import Member1 from "../images/member1.jpg";
import TestimonialMedia from "../TestimonialMedia/TestimonialMedia";

const Testimonial = () => {
  return (
    <section className={style.testimonial}>
      <header className={style.Testimonialheader}>
        <Button buttonText="Testimonials" buttonStyle="btn--accent" />
        <h2 className={style.testimonialheading}>
          Don’t just take our word for it—see what our clients say about
          Recruito AI.
        </h2>
      </header>
      <div style={{ padding: "6rem 0rem" }}>
        <div className={`${style.testimonialGrid} `}>
          <TestimonialMedia
            Image={Member1}
            Heading="Alex Martin"
            Description="Recruito has transformed our hiring process! We save countless hours each week The quality of candidates has significantly improved since we started using Recruito"
            Company="Company, HR "
          />

          <TestimonialMedia
            Image={Member1}
            Heading="Alex Martin"
            Description="Recruito has transformed our hiring process! We save countless hours each week The quality of candidates has significantly improved since we started using Recruito"
            Company="Company, HR "
          />

          <TestimonialMedia
            Image={Member1}
            Heading="Alex Martin"
            Description="Recruito has transformed our hiring process! We save countless hours each week The quality of candidates has significantly improved since we started using Recruito"
            Company="Company, HR "
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
