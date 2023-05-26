import React from "react";

import { Navbar, Footer, Hero2, Work } from "../components";


const Project = () => {
  return (
    <>
      <Navbar />
      <Hero2 heading="Projects" text="Some of my most recent work." img="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"/>
      <Work/>
      <Footer/>
    </>
  );
};

export default Project;
