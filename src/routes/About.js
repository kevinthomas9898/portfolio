import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero2Image from "../components/Hero2";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero2Image heading="About" text="Some things about myself" img="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"/>
      <AboutContent/>
      <Footer/>
    </>
  );
};

export default About;
