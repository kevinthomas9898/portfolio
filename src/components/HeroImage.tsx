import React from 'react';
import { Link } from 'react-router-dom';
import IntroImage from '../assets/intro-bg.jpg';

const HeroImage: React.FC = () => (
  <div className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-background">
    {/* Background */}
    <div className="absolute inset-0 z-0">
      <img src={IntroImage} alt="background" className="w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
    </div>

    {/* Content */}
    <div className="relative z-10 px-6 max-w-5xl mx-auto">
      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-black tracking-widest uppercase mb-10">
        Frontend Developer · React Specialist
      </div>

      <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none text-foreground mb-8">
        HI, I'M{' '}
        <span className="text-accent hover:opacity-80 transition-opacity cursor-default">KEVIN</span>
        {' '}THOMAS.
      </h1>

      <p className="text-xl md:text-2xl text-muted font-light leading-relaxed max-w-2xl mx-auto mb-14">
        Crafting{' '}
        <span className="text-foreground font-bold underline decoration-accent decoration-2 underline-offset-4">high-performance</span>
        , pixel-perfect web apps with React, Next.js & precision UI craft.
      </p>

      <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
        <Link to="/project" className="btn btn-primary min-w-[200px]">Explore Work</Link>
        <Link to="/contact" className="btn btn-outline min-w-[200px]">Let's Collaborate</Link>
      </div>
    </div>

    {/* Scroll hint */}
    <div className="absolute bottom-10 right-10 hidden lg:flex flex-col items-center gap-2">
      <div className="w-6 h-11 border-2 border-foreground/10 rounded-full flex justify-center pt-2">
        <div className="w-1.5 h-3 bg-accent rounded-full animate-bounce" />
      </div>
    </div>

    {/* Glow orbs */}
    <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
  </div>
);

export default HeroImage;
