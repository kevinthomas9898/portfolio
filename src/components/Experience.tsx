import React from 'react';

interface Job { company: string; role: string; duration: string; location: string; points: string[]; }
const jobs: Job[] = [
  { company: 'Av Devs', role: 'Frontend Developer (ReactJS)', duration: '07/2024 — Present', location: 'Vadodara, Gujarat', points: ['Building ReactJS apps with GraphQL, Redux, and API integrations for dynamic data.', 'Implementing drag-and-drop features (dnd-kit) and Stripe payment gateway integration.', 'Improving usability, accessibility (WCAG 2.2), and SEO performance.'] },
  { company: 'Av Devs', role: 'Frontend Developer Training', duration: '05/2024 — 07/2024', location: 'Vadodara, Gujarat', points: ['Trained in ReactJS and responsive design, developing mini-projects and reusable components.', 'Practiced code reviews and cross-browser/device compatibility.'] },
  { company: 'ClickNConnect', role: 'Frontend ReactJS Developer', duration: '01/2024 — 02/2024', location: 'Vadodara, Gujarat', points: ['Researched emerging web technologies and updated layouts for usability and performance.', 'Developed responsive websites using HTML, CSS, and JavaScript.'] },
  { company: 'ClickNConnect', role: 'ReactJS Intern', duration: '06/2023 — 12/2023', location: 'Vadodara, Gujarat', points: ['Built ReactJS frontends integrated with PHP Laravel backends.', 'Assisted with code optimization and MySQL data handling.'] },
];

const Experience: React.FC = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <p className="section-label">Professional Journey</p>
    <h1 className="section-title">EXPERIENCE<span className="text-accent">.</span></h1>
    <p className="section-desc">My career roadmap specializing in React and high-performance web UIs.</p>

    <div className="relative border-l-2 border-accent/20 ml-4 pl-8 flex flex-col gap-10">
      {jobs.map((job, i) => (
        <div key={i} className="relative group">
          {/* Dot */}
          <div className="absolute -left-[2.65rem] top-2 w-4 h-4 rounded-full bg-accent shadow-[0_0_14px_hsl(var(--ac)/0.5)] group-hover:scale-125 transition-transform duration-300" />

          <div className="glass-card group-hover:border-accent/40 transition-all duration-300">
            <div className="flex flex-wrap gap-4 justify-between items-start mb-5">
              <div>
                <h3 className="text-xl font-black text-foreground group-hover:text-accent transition-colors">{job.role}</h3>
                <p className="text-xs font-bold text-accent/80 uppercase tracking-wider mt-1">{job.company} · {job.location}</p>
              </div>
              <span className="px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-[11px] font-black uppercase tracking-wider whitespace-nowrap">
                {job.duration}
              </span>
            </div>
            <ul className="flex flex-col gap-3">
              {job.points.map((p, idx) => (
                <li key={idx} className="flex items-start gap-3 text-foreground/65 text-sm leading-relaxed font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
