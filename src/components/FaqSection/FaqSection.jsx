import React from "react";

import style from "./FaqSection.module.css";
import Toggle from "../Toggle";
import Button from "../Button/Button";

const FaqSection = () => {
  return (
    <section>
      <div className={style.wrapper}>
        <div className="">
          <header className={style.header}>
            <div className={style.buttondiv}>
              <Button buttonText="FAQs" buttonStyle="btn--accent" />
            </div>
          </header>
          <div className={style.container}>
            <div className={style.contentWrapper}>
              <Toggle Title="What is an AI Agent?">
                <p className={style.answer}>
                  An AI agent is a software system that understands language,
                  learns from data, and takes actions automatically to achieve
                  specific goals. In the hiring world, an AI agent can review
                  resumes, interact with candidates, and provide
                  recommendations, all without manual oversight. Key
                  capabilities include: - Natural Language Processing to
                  interpret resumes and candidate responses - Adaptive Learning
                  to improve accuracy and efficiency over time - Task Automation
                  to handle repetitive or time-consuming steps - Data-Driven
                  Insights for better predictions and decisions
                </p>
              </Toggle>
              <Toggle Title="What are the Benefits of Using Recruito’s AI Agent?">
                <p className={style.answer}>
                  An AI agent is a software system that understands language,
                  learns from data, and takes actions automatically to achieve
                  specific goals. In the hiring world, an AI agent can review
                  resumes, interact with candidates, and provide
                  recommendations, all without manual oversight. Key
                  capabilities include: - Natural Language Processing to
                  interpret resumes and candidate responses - Adaptive Learning
                  to improve accuracy and efficiency over time - Task Automation
                  to handle repetitive or time-consuming steps - Data-Driven
                  Insights for better predictions and decisions
                </p>
              </Toggle>
              <Toggle Title="Next Steps?">
                <p className={style.answer}>
                  An AI agent is a software system that understands language,
                  learns from data, and takes actions automatically to achieve
                  specific goals. In the hiring world, an AI agent can review
                  resumes, interact with candidates, and provide
                  recommendations, all without manual oversight. Key
                  capabilities include: - Natural Language Processing to
                  interpret resumes and candidate responses - Adaptive Learning
                  to improve accuracy and efficiency over time - Task Automation
                  to handle repetitive or time-consuming steps - Data-Driven
                  Insights for better predictions and decisions
                </p>
              </Toggle>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
