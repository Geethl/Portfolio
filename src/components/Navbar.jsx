import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      padding: '1.5rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'rgba(10, 10, 15, 0.8)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      borderBottom: '1px solid var(--glass-border)'
    }}>
      <div style={{ fontWeight: '700', fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>
        <span className="text-gradient">GL</span>
      </div>
      <div style={{ display: 'flex', gap: '2rem', fontWeight: '500' }}>
        <a href="#about" style={{ color: 'var(--text-secondary)' }} onMouseOver={e => e.target.style.color = 'var(--text-primary)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>About</a>
        <a href="#journal" style={{ color: 'var(--text-secondary)' }} onMouseOver={e => e.target.style.color = 'var(--text-primary)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>Journal</a>
        <a href="#career" style={{ color: 'var(--text-secondary)' }} onMouseOver={e => e.target.style.color = 'var(--text-primary)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>Career Plan</a>
        <a href="#cv" style={{ color: 'var(--text-secondary)' }} onMouseOver={e => e.target.style.color = 'var(--text-primary)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>CV</a>
      </div>
    </nav>
  );
};

export default Navbar;
