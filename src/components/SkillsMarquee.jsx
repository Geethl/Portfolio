import React from 'react';
import { Layers, Database, Code, Smartphone, Palette, GitBranch, PenTool, Globe } from 'lucide-react';

const SkillsMarquee = () => {
  const skills = [
    { name: "MERN Stack", icon: <Database size={20} /> },
    { name: "React Native", icon: <Smartphone size={20} /> },
    { name: "Java", icon: <Code size={20} /> },
    { name: "C & C++", icon: <Code size={20} /> },
    { name: "Kotlin", icon: <Smartphone size={20} /> },
    { name: "HTML, CSS & JS", icon: <Globe size={20} /> },
    { name: "Android Studio", icon: <Layers size={20} /> },
    { name: "Git", icon: <GitBranch size={20} /> },
    { name: "Postman", icon: <Layers size={20} /> },
    { name: "Figma", icon: <Palette size={20} /> },
    { name: "Canva", icon: <PenTool size={20} /> },
    { name: "Adobe Photoshop", icon: <PenTool size={20} /> },
    { name: "Adobe After Effects", icon: <PenTool size={20} /> },
    { name: "Adobe Premiere Pro", icon: <PenTool size={20} /> },
  ];

  return (
    <section id="skills" className="section container" style={{ padding: '2rem 0' }}>
      <h2 className="section-title" style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>
        Technical <span className="text-gradient">Arsenal</span>
      </h2>
      
      <div className="marquee-container animate-fade-in delay-2">
        <div className="marquee-content">
          {/* First set of skills */}
          {skills.map((skill, idx) => (
            <div key={idx} className="skill-pill">
              {skill.icon} {skill.name}
            </div>
          ))}
          {/* Duplicate set for infinite scroll effect */}
          {skills.map((skill, idx) => (
            <div key={`dup-${idx}`} className="skill-pill">
              {skill.icon} {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;
