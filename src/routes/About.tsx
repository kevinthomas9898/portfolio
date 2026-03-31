import React from "react";
import { Navbar, Footer, Hero2, AboutContent } from "../components";

const About: React.FC = () => {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero2 
        heading="ABOUT" 
        text="A dedicated Frontend Developer with a focus on React and modern UI." 
        img="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?auto=format&fit=crop&w=1200&q=80"
      />
      <AboutContent />
      <Footer />
    </main>
  );
};

export default About;
