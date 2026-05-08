import React from 'react';
import { useI18n } from '../i18n';

const testimonials = [
  {
    initials: 'AR',
    name: 'Aishwarya R.',
    label: 'Skin & Gut · Pune',
    quote: '"Six months on Dr. Prajakta\'s plan and my acne is barely a memory. She actually listens — that\'s rare."',
    avatarBg: 'rgba(255,255,255,0.15)',
  },
  {
    initials: 'SM',
    name: 'Sneha M.',
    label: 'Chronic Pain · Mumbai',
    quote: '"I came in for back pain and stayed for the lifestyle reset. Kati Basti was magic. The Ritucharya advice keeps me steady year-round."',
    avatarBg: 'rgba(255,255,255,0.15)',
  },
  {
    initials: 'PK',
    name: 'Priya K.',
    label: 'PCOS · Online Consult',
    quote: '"PCOS had me on five medications. After the Panchakarma course my cycle came back regular for the first time in years."',
    avatarBg: 'rgba(255,255,255,0.15)',
  },
];

const Testimonials = () => {
  const { t } = useI18n();
  const translatedTestimonials = testimonials.map((testimonial, index) => ({
    ...testimonial,
    ...t.testimonials.items[index],
  }));

  return (
  <section id="testimonials" style={{ backgroundColor: 'rgb(30, 63, 51)', padding: '6rem 0' }}>
    <div className="resp-px" style={{ maxWidth: '82rem', margin: '0 auto', padding: '0 2.5rem' }}>

      {/* Header */}
      <div style={{ marginBottom: '3.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.4rem' }}>
          <span style={{ width: '2rem', height: '1px', backgroundColor: 'rgba(245,235,221,0.4)', display: 'inline-block' }} />
          <span style={{
            fontFamily: 'Outfit, system-ui, sans-serif',
            fontSize: '0.7rem', letterSpacing: '0.22em',
            color: 'rgba(245,235,221,0.7)', fontWeight: 600, textTransform: 'uppercase',
          }}>{t.testimonials.label}</span>
        </div>
        <h2 style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 'clamp(2.25rem, 3.5vw, 3rem)',
          color: '#fff',
          fontWeight: 300,
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
        }}>
          {t.testimonials.headingStart} <em style={{ fontStyle: 'italic', color: 'rgba(245,235,221,0.85)' }}>{t.testimonials.headingEm}</em>
        </h2>
      </div>

      {/* Cards */}
      <div className="resp-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
        {translatedTestimonials.map(({ initials, name, label, quote, avatarBg }) => (
          <div
            key={name}
            style={{
              backgroundColor: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '1.5rem',
              padding: '2rem',
              display: 'flex', flexDirection: 'column',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; }}
          >
            {/* Quote mark */}
            <div style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '3rem', lineHeight: 1,
              color: 'rgb(201, 76, 61)',
              marginBottom: '1.2rem',
              opacity: 0.9,
            }}>"</div>

            {/* Quote text */}
            <p style={{
              fontFamily: 'Outfit, system-ui, sans-serif',
              fontSize: '0.97rem',
              color: 'rgba(255,255,255,0.88)',
              lineHeight: 1.7,
              flex: 1,
              marginBottom: '1.8rem',
            }}>{quote}</p>

            {/* Author */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.9rem',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: '1.2rem',
            }}>
              {/* Avatar */}
              <div style={{
                width: 44, height: 44, borderRadius: '50%',
                backgroundColor: avatarBg,
                border: '1px solid rgba(255,255,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Outfit, system-ui, sans-serif',
                fontSize: '0.78rem', fontWeight: 700, color: '#fff',
                flexShrink: 0,
              }}>{initials}</div>

              <div style={{ flex: 1 }}>
                <div style={{
                  fontFamily: 'Outfit, system-ui, sans-serif',
                  fontSize: '0.92rem', fontWeight: 600,
                  color: '#fff', marginBottom: '0.2rem',
                }}>{name}</div>
                <div style={{
                  fontFamily: 'Outfit, system-ui, sans-serif',
                  fontSize: '0.62rem', letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)',
                }}>{label}</div>
              </div>

              {/* Stars */}
              <div style={{
                color: 'rgb(201, 76, 61)',
                fontSize: '0.72rem', letterSpacing: '2px',
              }}>*****</div>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
  );
};

export default Testimonials;
