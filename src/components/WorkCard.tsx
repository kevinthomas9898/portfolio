import React from 'react';
import defaultImage from '../assets/project4.png';

interface WorkCardProps {
  title: string;
  description: string;
  demo: string;
  download: string;
  tags: string[];
  featured: boolean;
  imgsrc: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ title, description, demo, download, tags, featured, imgsrc }) => (
  <div className="glass-card flex flex-col h-full overflow-hidden p-0">
    {/* Image */}
    <div className="relative h-52 overflow-hidden rounded-t-2xl rounded-b-none">
      <img src={imgsrc} alt={title}
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
      <div className="absolute inset-0 bg-linear-to-t from-background/90 to-transparent" />
      {featured && (
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full border border-accent/40 bg-accent/15 text-accent text-[10px] font-black uppercase tracking-wider">
          Featured
        </span>
      )}
    </div>

    {/* Body */}
    <div className="flex flex-col flex-1 p-6 gap-4">
      <h2 className="text-xl font-black tracking-tight text-foreground">{title}</h2>
      <p className="text-foreground/60 text-sm leading-relaxed font-light flex-1">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>

      <div className="flex gap-3 pt-1">
        <a href={demo} target="_blank" rel="noopener noreferrer"
          className="btn btn-primary flex-1 text-[10px] py-2.5">Live Site</a>
        <a href={download} target="_blank" rel="noopener noreferrer"
          className="btn btn-outline flex-1 text-[10px] py-2.5">GitHub</a>
      </div>
    </div>
  </div>
);

export default WorkCard;
