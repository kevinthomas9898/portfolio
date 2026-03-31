import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => (
  <footer className="glass border-t border-accent/10 mt-16 pt-16 pb-8 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

      {/* Contact */}
      <div>
        <h3 className="text-base font-black tracking-tight mb-7">
          GET IN TOUCH<span className="text-accent">.</span>
        </h3>
        <div className="flex flex-col gap-5">
          {[
            { icon: <FaHome className="text-accent mt-0.5 shrink-0" />, text: ['Vadodara', 'Gujarat, India'] },
            { icon: <FaPhone className="text-accent mt-0.5 shrink-0" />, text: ['8849270375'] },
            { icon: <FaMailBulk className="text-accent mt-0.5 shrink-0" />, text: ['kevinth1998@gmail.com'] },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              {item.icon}
              <div>{item.text.map(t => <p key={t} className="text-muted text-sm">{t}</p>)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div>
        <h3 className="text-base font-black tracking-tight mb-7">
          MISSION<span className="text-accent">.</span>
        </h3>
        <p className="text-muted text-sm leading-relaxed italic font-light max-w-xs">
          "Leveraging React and modern UI to build products that solve real-world problems with elegance and efficiency."
        </p>
      </div>

      {/* Social */}
      <div>
        <h3 className="text-base font-black tracking-tight mb-7">
          CONNECT<span className="text-accent">.</span>
        </h3>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/kevin-9898/" target="_blank" rel="noopener noreferrer"
            className="glass p-3 rounded-xl text-accent text-xl hover:scale-110 transition-transform" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/kevinthomas9898" target="_blank" rel="noopener noreferrer"
            className="glass p-3 rounded-xl text-accent text-xl hover:scale-110 transition-transform" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>
        <p className="text-[10px] font-black text-foreground/20 uppercase tracking-widest mt-10">Est. 2024 · Kevin Thomas</p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto border-t border-accent/5 mt-12 pt-6 flex flex-col md:flex-row justify-between gap-3">
      <p className="text-[10px] font-bold tracking-widest text-foreground/20 uppercase">
        Designed & Engineered by Kevin Thomas © 2024
      </p>
      <p className="text-[10px] font-black text-accent/40 uppercase tracking-widest">
        Built with React · Vite · Tailwind
      </p>
    </div>
  </footer>
);

export default Footer;
