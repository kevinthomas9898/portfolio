import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';

const WorkCardData = [
  {
    imgsrc: project1,
    title: "Learnient LMS",
    description: "Multi-tenant B2B Learning Management System featuring a custom-built drag-and-drop course builder for seamless content creation.",
    demo: "https://color-code-tools.vercel.app/",
    download: "https://github.com/kevinthomas9898",
    tags: ["React", "Redux", "Dnd-kit", "B2B"],
    featured: true
  },
  {
    imgsrc: project2,
    title: "Color Code Tools",
    description: "A premium developer utility web app supporting HEX, RGB, HSL conversions. Built with Next.js and deployed on Vercel.",
    demo: "https://color-code-tools.vercel.app/",
    download: "https://github.com/kevinthomas9898/color-code-tools",
    tags: ["Next.js", "Vercel", "Tailwind"],
    featured: true
  },
  {
    imgsrc: project3,
    title: "CompareQuick",
    description: "College project: A cross-platform mobile phone comparison website using Python Flask and MySQL. High-performance data filtering.",
    demo: "https://github.com/kevinthomas9898",
    download: "https://github.com/kevinthomas9898",
    tags: ["Python", "Flask", "MySQL"],
    featured: false
  },
  {
    imgsrc: project4,
    title: "One Stop Pet Shop",
    description: "Diploma project: E-commerce platform built with .NET and MySQL, featuring secure checkout and user-friendly interface.",
    demo: "https://github.com/kevinthomas9898",
    download: "https://github.com/kevinthomas9898",
    tags: [".NET", "MySQL", "E-commerce"],
    featured: false
  }
];

export default WorkCardData;
