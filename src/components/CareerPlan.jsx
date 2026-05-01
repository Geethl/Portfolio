import React from 'react';
import { Target, TrendingUp } from 'lucide-react';

const CareerPlan = ({ plans }) => {
  if (!plans || plans.length === 0) return null;

  return (
    <section id="career" className="section container">
      <h2 className="section-title">Career Development <span className="text-gradient">Plan</span></h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
        {/* Vertical Line for timeline */}
        <div style={{ position: 'absolute', left: '24px', top: '24px', bottom: '24px', width: '2px', background: 'var(--glass-border)', zIndex: 0 }}></div>
        
        {plans.map((plan, idx) => (
          <div key={idx} className="glass-panel animate-fade-in" style={{ animationDelay: `${idx * 0.3}s`, position: 'relative', zIndex: 1, display: 'flex', gap: '2rem' }}>
            <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '50%', background: 'var(--bg-color)', border: '2px solid var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)' }}>
              {idx === 0 ? <Target size={24} /> : <TrendingUp size={24} />}
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{plan.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: '1.8' }}>
                {plan.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerPlan;
