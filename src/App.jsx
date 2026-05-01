import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsMarquee from './components/SkillsMarquee';
import Journal from './components/Journal';
import CareerPlan from './components/CareerPlan';
import Certificates from './components/Certificates';
import CVSection from './components/CVSection';
import Contact from './components/Contact';

function App() {
  const [data, setData] = useState({ journal: [], careerPlan: [], certificates: [] });
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(scroll * 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const mockData = {
      journal: [
        {
          title: 'Professionalism & Ethics in IT',
          content: 'Learned the importance of maintaining professional standards, ethical considerations in software engineering, and effective communication strategies within diverse teams.',
          date: '2026-05-01T10:00:00.000Z'
        },
        {
          title: 'Project Management & Collaboration',
          content: 'Understood agile methodologies, the role of a project manager, and how to effectively track and deliver milestones in complex software projects like Aegis Life/Gaja Saviya.',
          date: '2026-04-15T10:00:00.000Z'
        }
      ],
      careerPlan: [
        {
          title: 'Immediate Objective: Internship',
          content: 'Secure an internship at a leading organization, specifically targeting opportunities at DIMO Lanka or Azend Technologies to gain industry exposure in SQA or Project Management.',
        },
        {
          title: 'Long-term Objective: Leadership Roles',
          content: 'Transition into IT roles that emphasize management and quality assurance over heavy coding, actively working toward becoming an IT Project Manager (ITPM), an SQA professional, or a Business Analyst.',
        }
      ],
      certificates: [
        {
          title: 'Agile Project Management Certificate',
          content: 'Completed an online certification to solidify my understanding of Agile frameworks and project delivery pipelines.',
          imageUrl: './certificate.png'
        }
      ]
    };

    setTimeout(() => {
      setData(mockData);
      setLoading(false);
    }, 800);
  }, []);

  if (loading) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="text-gradient" style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)' }}>Loading...</div>
      </div>
    );
  }

  return (
    <>
      {/* Scroll Progress Bar */}
      <div style={{ position: 'fixed', top: 0, left: 0, height: '4px', background: 'var(--gradient-text)', width: `${scrollProgress}%`, zIndex: 9999, transition: 'width 0.1s ease-out' }}></div>
      
      <div className="bg-glow"></div>
      <Navbar />
      <main>
        <Hero />
        <SkillsMarquee />
        <Journal entries={data.journal} />
        <CareerPlan plans={data.careerPlan} />
        <Certificates certificates={data.certificates} />
        <CVSection />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
        <p>© {new Date().getFullYear()} Geeth Lakshan. Built with MERN Stack.</p>
      </footer>
    </>
  );
}

export default App;
