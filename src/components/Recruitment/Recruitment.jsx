import React from "react";
import Features from "../Features/Features";
import CardGroup from "../CardGroup/CardGroup";
import style from "./Recruitment.module.css";
import Resume from "../Resume/Resume";
import Button from "../Button/Button";
import Assessment from "../Assessment/Assessment";
import Interview from "../Interview/Interview";
import ShortListed from "../ShortListed/ShortListed";

const Recruitment = () => {
  return (
    <section>
      <div className={style.wrapper}>
        <header className={style.header}>
          <Button buttonText="Features" buttonStyle="btn--accent" />
          <h2 className={style.headingText}>
            Streamline your recruitment with our advanced features
          </h2>
        </header>
        <div className="block container Grid grid--1x2">
          <Features
            Heading={`
                Candidate Sourcing & Job Posting`}
            Description="Recruito automatically posts your position or actively hunts top candidates across multiple platforms. No human intervention needed."
          />

          <CardGroup />

          <Resume />
          <Features
            classname={style.modefier}
            Heading="Automated Resume Screening & Filtering"
            Description="Our AI instantly sorts and prioritizes resumes, highlighting only the strongest matches and discarding unqualified applicants."
          />
          <Features
            Heading="Online Assessment"
            Description="Recruito automatically posts your position or actively hunts top candidates across multiple platforms. No human intervention needed."
          />
          <Assessment />
          <Interview />
          <Features
            classname={style.modefier}
            Heading="AI Video Interviews"
            Description="An AI-driven virtual interviewer conducts dynamic, adaptive interviews, capturing both technical insights and soft skills. Everything is entirely hands-free."
          />
          <Features
            Heading="Final Shortlist for the Line Manager"
            Description="Recruito presents a curated list of the top performers, complete with interview recordings and evaluations, so you can make a swift, confident hiring decision."
          />
          <ShortListed />
        </div>
      </div>
    </section>
  );
};

export default Recruitment;
