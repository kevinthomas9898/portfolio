import React from 'react';
import WorkCard from './WorkCard';
import WorkCardData from './WorkCardData';

interface ProjectData {
  title: string; description: string; demo: string;
  download: string; tags: string[]; featured: boolean; imgsrc: string;
}

const Work: React.FC = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <p className="section-label">Creative Showcases</p>
    <h1 className="section-title">PROJECTS<span className="text-accent">.</span></h1>
    <p className="section-desc">
      From enterprise LMS platforms to developer utilities — a curated collection of my best work.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
      {(WorkCardData as ProjectData[]).map((val, i) => (
        <WorkCard imgsrc={val.imgsrc} key={i} title={val.title} description={val.description}
          demo={val.demo} download={val.download} tags={val.tags} featured={val.featured} />
      ))}
    </div>
  </section>
);

export default Work;
