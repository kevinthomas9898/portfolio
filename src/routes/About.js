import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero2Image from "../components/Hero2";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero2Image heading="About" text="Some things about myself"/>
      <Footer/>
    </>
  );
};

export default About;
