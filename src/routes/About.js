import React from "react";
import { Navbar, Footer, Hero2, AboutContent } from "../components";


const About = () => {
  return (
    <>
      <Navbar />
      <Hero2 heading="About" text="Some things about myself" img="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"/>
      <AboutContent/>
      <Footer/>
    </>
  );
};

export default About;
