import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero2Image from "../components/Hero2";

const Project = (props) => {
  return (
    <>
      <Navbar />
      <Hero2Image heading="Projects" text="Some of my most recent work."/>
      <Footer/>
    </>
  );
};

export default Project;
