import React, { useState } from 'react';
import './MixingMastering.css';

const MixingMastering = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    { id: 'stereo', name: 'Stereo Mastering', price: '$40', sub: '/ track', desc: 'Perfect for finished mixes.' },
    { id: 'mixing', name: 'Full Mixing', price: '$150', sub: '/ track', desc: 'Includes Mastering.' },
    { id: 'stem', name: 'Stem Mastering', price: '$80', sub: '/ track', desc: 'Up to 5 stems.' }
  ];

  const getMailtoLink = () => {
    const email = "contact@example.com"; // Replace with your actual email
    const subject = selectedPlan 
      ? `Inquiry for ${plans.find(p => p.id === selectedPlan).name}` 
      : "Inquiry for Mixing & Mastering Services";
    
    const body = `Hello Matej,\n\nI'm interested in your ${selectedPlan ? plans.find(p => p.id === selectedPlan).name : "audio"} services. \n\nProject Details:\n- Artist/Band Name: \n- Number of Tracks: \n- Links to Demos/Rough Mixes: \n- Deadline: \n\nLooking forward to hearing from you!`;
    
    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="mixing-mastering-page">
      <section className="mm-hero">
        <div className="mm-hero-content">
          <h1>Sonic Clarity & Depth</h1>
          <p>Professional Mixing & Mastering services tailored to elevate your sound. Experience industry-standard quality with a personal touch.</p>
          <a href="#packages" className="cta-button">View Packages</a>
        </div>
      </section>

      <section className="mm-intro">
        <h2>Why Professional Audio?</h2>
        <p>
          Your music deserves to be heard exactly as you imagined it. 
          Whether it's the punch of a kick drum or the air in a vocal, 
          we ensure every element sits perfectly in the mix.
        </p>
      </section>
      
      <section className="mm-services">
        <div className="service-card">
          <h3>Mixing</h3>
          <p>Transforming raw recordings into a balanced, emotive, and powerful track. We handle EQ, compression, effects, and automation.</p>
          <ul className="service-features">
            <li>Unlimited Stems</li>
            <li>Vocal Tuning</li>
            <li>Creative FX</li>
          </ul>
        </div>
        <div className="service-card">
          <h3>Mastering</h3>
          <p>The final step. We ensure your track translates perfectly across all playback systems, achieving competitive loudness and tonal balance.</p>
          <ul className="service-features">
            <li>Analog & Digital Chain</li>
            <li>Loudness Optimization</li>
            <li>Metadata Encoding</li>
          </ul>
        </div>
        <div className="service-card">
          <h3>Stem Mastering</h3>
          <p>A hybrid approach. More control than standard mastering, allowing for finer adjustments to groups of instruments.</p>
          <ul className="service-features">
            <li>Group Balance Control</li>
            <li>Targeted Enhancements</li>
            <li>Best for Complex Mixes</li>
          </ul>
        </div>
      </section>

      <section className="mm-pricing" id="packages">
        <h2>Simple Pricing</h2>
        <p>Select a package to get started</p>
        <div className="pricing-grid">
            {plans.map((plan) => (
                <div 
                    key={plan.id}
                    className={`price-item ${selectedPlan === plan.id ? 'selected' : ''} ${plan.id === 'mixing' ? 'featured' : ''}`}
                    onClick={() => setSelectedPlan(plan.id)}
                >
                    <h4>{plan.name}</h4>
                    <p className="price">{plan.price} <span>{plan.sub}</span></p>
                    <p>{plan.desc}</p>
                </div>
            ))}
        </div>
        {selectedPlan && (
            <div className="selection-actions">
                <a href={getMailtoLink()} className="cta-button">
                    Proceed with {plans.find(p => p.id === selectedPlan).name}
                </a>
            </div>
        )}
      </section>

      <section id="contact-mm" className="mm-contact">
        <h2>Ready to work?</h2>
        <p>Send me a message to discuss your project.</p>
        <a href={getMailtoLink()} className="cta-button-outline">Get in Touch</a>
      </section>
    </div>
  );
};

export default MixingMastering;
