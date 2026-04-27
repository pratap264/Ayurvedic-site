import React from 'react';
import kaphaImg from '../assets/main/kapha.jpg';
import pittaImg from '../assets/main/pitta.jpg';
import vataImg from '../assets/main/vata.jpg';

const doshas = [
  { img: kaphaImg, name: 'Kapha', subtitle: 'Earth & Water', color: '#2F6F5E', bg: '#EDF7F4',
    qualities: ['Heavy', 'Slow', 'Steady', 'Cold', 'Oily'],
    desc: 'You are naturally calm, thoughtful, and loving. Kapha provides stability, strength, and the foundation for all life.' },
  { img: pittaImg, name: 'Pitta', subtitle: 'Fire & Energy', color: '#C94C3D', bg: '#FDF2F1',
    qualities: ['Hot', 'Light', 'Intense', 'Sharp', 'Acidic'],
    desc: 'Pitta governs transformation and metabolism. Sharp intellect, strong digestion, and passionate drive define this dosha.' },
  { img: vataImg, name: 'Vata', subtitle: 'Air & Ether', color: '#6FA3A8', bg: '#EFF6F7',
    qualities: ['Light', 'Cold', 'Dry', 'Mobile', 'Subtle'],
    desc: 'Vata is the energy of movement — creative, quick, enthusiastic, and full of vitality when in balance.' },
];

const Doshas = () => (
  <section id="doshas" style={{ backgroundColor: '#F5EBDD', padding: '6rem 0' }}>
    <div className="resp-px" style={{ maxWidth: '82rem', margin: '0 auto', padding: '0 2.5rem' }}>
      {/* Header — 2 col layout */}
      <div className="resp-grid resp-gap" style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '3rem', alignItems: 'center', marginBottom: '4rem',
      }}>

        {/* Left: Text */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <span style={{ width: '2rem', height: '1px', backgroundColor: 'rgb(47, 111, 94)', display: 'inline-block' }} />
            <span style={{ fontFamily: 'Outfit, system-ui, sans-serif', fontSize: '0.7rem', letterSpacing: '0.22em', color: 'rgb(47, 111, 94)', fontWeight: 600, textTransform: 'uppercase' }}>KNOW YOUR CONSTITUTION</span>
          </div>
          <h2 style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)',
            color: 'rgb(30, 63, 51)',
            fontWeight: 300,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '1.4rem',
          }}>
            The three <em style={{ color: 'rgb(47, 111, 94)', fontStyle: 'italic' }}>doshas</em> — the elemental rhythms that shape how you live, eat, sleep and heal.
          </h2>
          <p style={{
            fontFamily: 'Outfit, system-ui, sans-serif',
            fontSize: '1.02rem',
            color: 'rgb(74, 107, 96)',
            lineHeight: 1.625,
          }}>
            Every body is a unique blend of Vata, Pitta and Kapha. Understanding yours is the first step toward a routine that actually feels natural.
          </p>
        </div>

        {/* Right: CTA Card */}
        <div style={{
          backgroundColor: 'rgb(47, 111, 94)',
          borderRadius: '1.5rem',
          padding: '2.2rem 2rem',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Decorative circle */}
          <div style={{
            position: 'absolute', top: '-2rem', right: '-2rem',
            width: '140px', height: '140px', borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.06)',
          }} />
          <div style={{
            position: 'absolute', bottom: '-1rem', left: '-1rem',
            width: '80px', height: '80px', borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.05)',
          }} />


          <h3 style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '1.9rem', fontWeight: 400,
            lineHeight: 1.2, marginBottom: '1rem',
            color: '#fff',
          }}>
            Which dosha is running your life right now?
          </h3>

          <p style={{
            fontFamily: 'Outfit, system-ui, sans-serif',
            fontSize: '0.92rem', color: 'rgba(245,235,221,0.85)',
            lineHeight: 1.6, marginBottom: '1.6rem',
          }}>
            Discover your dominant dosha — understand why you feel drained, inflamed, or scattered — and get personalised tips to restore balance.
          </p>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {['Skin', 'Gut', 'Sleep', 'Hormones', 'Energy'].map(tag => (
              <span key={tag} style={{
                backgroundColor: 'rgba(255,255,255,0.12)',
                borderRadius: '9999px',
                padding: '0.25rem 0.85rem',
                fontSize: '0.78rem',
                fontFamily: 'Outfit, system-ui, sans-serif',
                color: 'rgba(245,235,221,0.9)',
              }}>{tag}</span>
            ))}
          </div>

          <button
            style={{
              marginTop: '1.8rem',
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              backgroundColor: 'rgb(245, 235, 221)',
              color: 'rgb(30, 63, 51)',
              border: 'none', borderRadius: '9999px',
              padding: '0.8rem 1.8rem',
              fontFamily: 'Outfit, system-ui, sans-serif',
              fontWeight: 600, fontSize: '0.875rem',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgb(245, 235, 221)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Book Consultation ↗
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="resp-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
        {doshas.map(({ img, name, subtitle, color, bg, qualities, desc }) => (
          <div key={name} style={{ backgroundColor: '#fff', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 8px 30px rgba(44,53,49,0.07)', transition: 'transform 0.3s, box-shadow 0.3s', cursor: 'default' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(44,53,49,0.12)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(44,53,49,0.07)'; }}
          >
            {/* Circle image */}
            <div style={{ padding: '2rem 2rem 1rem', display: 'flex', justifyContent: 'center', backgroundColor: bg }}>
              <div style={{ width: 160, height: 160, borderRadius: '50%', overflow: 'hidden', boxShadow: `0 8px 24px ${color}30` }}>
                <img src={img} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center' }} />
              </div>
            </div>
            {/* Content */}
            <div style={{ padding: '1.5rem 2rem 2rem' }}>
              <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.6rem', color, fontWeight: 600, marginBottom: '0.2rem' }}>{name}</h3>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', letterSpacing: '0.15em', color: '#4A5550', textTransform: 'uppercase', marginBottom: '1rem' }}>{subtitle}</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#4A5550', lineHeight: 1.7, marginBottom: '1.2rem' }}>{desc}</p>
              {/* Qualities */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {qualities.map(q => (
                  <span key={q} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', backgroundColor: `${color}15`, color, fontWeight: 500 }}>{q}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Doshas;
