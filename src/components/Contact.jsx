import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus('Sending...');

    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      
      if (data.success) {
        setStatus('Message sent successfully!');
        form.reset();
      } else {
        setStatus('Error sending message. Please try again.');
      }
    } catch (error) {
      setStatus('Error sending message. Please try again.');
    }
  };

  return (
    <section id="contact" className="section container">
      <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Contact Information */}
        <div style={{ flex: '1 1 300px' }} className="animate-fade-in delay-1">
          <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Let's Connect</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            I'm always open to discussing new opportunities, creative projects, or collaborations. Feel free to reach out using the form or through my direct contacts.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <a href="tel:+94761157679" className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
              <div style={{ padding: '0.75rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '12px', color: 'var(--accent-primary)' }}>
                <Phone size={24} />
              </div>
              <div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Phone / WhatsApp</p>
                <p style={{ fontWeight: '600' }}>+94761157679</p>
              </div>
            </a>
            
            <a href="mailto:lakshang614@gmail.com" className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
              <div style={{ padding: '0.75rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '12px', color: 'var(--accent-primary)' }}>
                <Mail size={24} />
              </div>
              <div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Email</p>
                <p style={{ fontWeight: '600' }}>lakshang614@gmail.com</p>
              </div>
            </a>
            
            <a href="https://www.linkedin.com/in/geeth-lakshan-a075b5297" target="_blank" rel="noreferrer" className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
              <div style={{ padding: '0.75rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '12px', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
              <div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>LinkedIn</p>
                <p style={{ fontWeight: '600' }}>Geeth Lakshan</p>
              </div>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div style={{ flex: '2 1 400px' }} className="animate-fade-in delay-2">
          <div className="glass-panel" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              {/* NOTE: Replace the value below with your actual Web3Forms Access Key */}
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              
              <div className="form-group">
                <input type="text" name="name" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" className="form-control" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea name="message" className="form-control" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                <Send size={18} /> Send Message
              </button>
              
              {status && (
                <p style={{ marginTop: '1rem', textAlign: 'center', color: status.includes('Error') ? '#ef4444' : '#10b981' }}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
