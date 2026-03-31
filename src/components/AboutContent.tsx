import React from 'react';
import { Link } from 'react-router-dom';

const skills = ['React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'GraphQL', 'REST APIs', 'WCAG 2.2', 'Agile/Scrum'];

const AboutContent: React.FC = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* Left */}
      <div>
        <p className="section-label">The Developer Journey</p>
        <h1 className="section-title">
          WHO AM I<span className="text-accent">?</span>
        </h1>
        <p className="text-foreground/65 text-lg leading-relaxed font-light mb-5">
          I'm a <strong className="text-foreground italic">Frontend Developer</strong> with 2+ years of
          experience in React.js, Redux, and modern UI development. I specialize in building responsive,
          accessible, and high-performance web apps.
        </p>
        <p className="text-foreground/65 text-lg leading-relaxed font-light mb-10">
          I've integrated APIs, built drag-and-drop UIs with dnd-kit, handled Stripe payments, and thrive
          in <span className="text-accent font-semibold">Agile/Scrum</span> environments.
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-3 mb-10">
          {skills.map(s => (
            <span key={s} className="glass px-4 py-1.5 rounded-full text-sm font-semibold text-foreground/80">{s}</span>
          ))}
        </div>

        <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
      </div>

      {/* Right — stat cards */}
      <div className="flex justify-center lg:justify-end">
        <div className="relative w-72 h-96">
          {/* Main card */}
          <div className="glass-card absolute inset-0 flex flex-col items-center justify-center rounded-3xl overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-accent/25 to-background" />
          </div>
          {/* Exp stat */}
          <div className="glass-card absolute -bottom-6 -left-6 w-40 h-32 flex flex-col justify-center">
            <p className="text-4xl font-black text-accent leading-none">2+</p>
            <p className="text-sm text-muted font-semibold mt-1">Years Experience</p>
          </div>
          {/* Projects stat */}
          <div className="glass-card absolute -top-4 -right-4 w-36 h-24 flex flex-col justify-center">
            <p className="text-3xl font-black text-accent leading-none">4+</p>
            <p className="text-xs text-muted font-semibold mt-1">Projects Shipped</p>
          </div>
          {/* Glow */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>
    </div>
  </section>
);

export default AboutContent;
