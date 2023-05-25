import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero2Image from "../components/Hero2";
import Form from "../components/Form";

const Contact = (props) => {
  return (
    <>
      <Navbar />
      <Hero2Image heading="Contact" text="Lets have a CHAT" img="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"/>
      <Form />
      <Footer/>
    </>
  );
};

export default Contact;
