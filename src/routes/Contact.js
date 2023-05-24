import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero2Image from "../components/Hero2";

const Contact = (props) => {
  return (
    <>
      <Navbar />
      <Hero2Image heading="Contact" text="If any queries then contact me using form. I will get back to you within 24 hours"/>
      <Footer/>
    </>
  );
};

export default Contact;
