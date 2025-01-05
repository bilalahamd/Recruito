import React from "react";

import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Dashboard from "./components/Dashboard/Dashboard";
import Organizations from "./components/Organizations/Organizations";
import Card from "./components/Cards/Card";
import Badge from "./components/Badge/Badge";
import Features from "./components/Features/Features";
import CardGroup from "./components/CardGroup/CardGroup";
import Recruitment from "./components/Recruitment/Recruitment";
import Resume from "./components/Resume/Resume";

import Assessment from "./components/Assessment/Assessment";
import Interview from "./components/Interview/Interview";
import ShortListed from "./components/ShortListed/ShortListed";
import Eclips from "./components/Eclips/Eclips";
import Advanatages from "./components/Advantages/Advanatages";

import FaqSection from "./components/FaqSection/FaqSection";
import Testimonial from "./components/Testimonial/Testimonial";

import Footer from "./components/Footer/Footer";
import Design from "./components/Design/Design";

const App = () => {
  return (
    <>
      <Main />
      <Organizations />
      <Recruitment />
      <Advanatages />
      <FaqSection />
      <Testimonial />
      <Design />
      <Footer />
    </>
  );
};

export default App;
