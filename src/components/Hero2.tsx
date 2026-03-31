import React from 'react';

interface Hero2Props {
  heading: string;
  text: string;
  img: string;
}

const Hero2: React.FC<Hero2Props> = ({ heading, text, img }) => (
  <div className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden bg-background">
    <div className="absolute inset-0">
      <img src={img} alt={heading} className="w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/85 to-background" />
    </div>
    <div className="relative z-10 px-6 pt-24">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none text-foreground mb-4">
        {heading}<span className="text-accent">.</span>
      </h1>
      <p className="text-lg md:text-xl text-muted font-light max-w-xl mx-auto">{text}</p>
      <div className="w-16 h-1.5 bg-accent rounded-full mx-auto mt-8 animate-pulse" />
    </div>
    <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-accent/8 rounded-full blur-3xl pointer-events-none" />
  </div>
);

export default Hero2;
