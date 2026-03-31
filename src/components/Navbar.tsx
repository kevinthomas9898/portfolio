import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/project' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevY, setPrevY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setVisible(y < prevY || y < 10);
      setPrevY(y);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [prevY]);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'} ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-2xl font-black tracking-tighter text-foreground hover:text-accent transition-colors">
            KEVIN<span className="text-accent">.</span>
          </Link>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {navLinks.map(l => (
              <li key={l.name}>
                <Link to={l.path} className="text-foreground/80 hover:text-accent font-medium transition-colors relative group text-sm">
                  {l.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
            <li><ThemeToggle /></li>
          </ul>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle />
            <button onClick={() => setOpen(!open)} className="text-2xl text-foreground bg-transparent border-none cursor-pointer">
              {open ? <FaTimes /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10 transition-transform duration-500 md:hidden ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={() => setOpen(false)} className="absolute top-8 right-6 text-3xl text-foreground bg-transparent border-none cursor-pointer">
          <FaTimes />
        </button>
        {navLinks.map(l => (
          <Link key={l.name} to={l.path} onClick={() => setOpen(false)}
            className="text-4xl font-black text-foreground hover:text-accent transition-colors">
            {l.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
