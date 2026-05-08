import React from 'react';
import { Droplets, Sparkles, Activity, Sun } from 'lucide-react';
import service1 from '../assets/main/service-1.png';
import service2 from '../assets/main/service-2.png';
import service3 from '../assets/main/service-3.png';
import service4 from '../assets/main/service-4.png';
import { useI18n } from '../i18n';

const Services = () => {
  const { t } = useI18n();

  return (
  <section id="services" style={{ backgroundColor: '#FAF6F0', padding: '7rem 0' }}>
    <div className="resp-px" style={{ maxWidth: '82rem', margin: '0 auto', padding: '0 2.5rem' }}>

      {/* Top row: heading left, description right */}
      <div className="resp-grid resp-gap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'end', marginBottom: '4rem' }}>

        {/* Left heading */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.4rem' }}>
            <span style={{ width: '2rem', height: '1px', backgroundColor: 'rgb(47, 111, 94)', display: 'inline-block' }} />
            <span style={{ fontFamily: 'Outfit, system-ui, sans-serif', fontSize: '0.7rem', letterSpacing: '0.22em', color: 'rgb(47, 111, 94)', fontWeight: 600, textTransform: 'uppercase' }}>{t.services.label}</span>
          </div>
          <h2 style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(2.5rem, 3.8vw, 3.5rem)',
            color: 'rgb(30, 63, 51)',
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
          }}>
            {t.services.heading}
          </h2>
        </div>

        {/* Right description */}
        <div>
          <p style={{
            fontFamily: 'Outfit, system-ui, sans-serif',
            fontSize: '1.05rem',
            color: 'rgb(74, 107, 96)',
            lineHeight: 1.75,
            fontWeight: 300,
          }}>
            {t.services.description}
          </p>
        </div>
      </div>

      {/* Grid Layout */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        
        {/* ROW 1: PRIMARY FOCUS (Panchakarma & Chronic Pain) */}
        <div className="resp-flex-col" style={{ display: 'flex', gap: '1.5rem' }}>
          
          {/* Panchakarma */}
          <div
            style={{
              flex: 1,
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.75)), url(${service1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: '#2F6F5E', // Fallback
              borderRadius: '1.5rem',
              padding: '3rem 2.5rem',
              boxShadow: '0 8px 30px rgba(47, 111, 94, 0.15)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 15px 40px rgba(47, 111, 94, 0.25)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(47, 111, 94, 0.15)'; }}
          >
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{
                width: 64, height: 64, borderRadius: '1.2rem',
                backgroundColor: 'rgba(255,255,255,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem',
              }}>
                <Droplets size={32} color="#FFFFFF" strokeWidth={1.5} />
              </div>
              <h3 style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '2.2rem',
                fontWeight: 500,
                color: '#FFFFFF',
                marginBottom: '1rem',
                lineHeight: 1.1,
              }}>{t.services.cards[0].title}</h3>
              <p style={{
                fontFamily: 'Outfit, system-ui, sans-serif',
                fontSize: '1.05rem',
                color: 'rgba(255,255,255,0.85)',
                lineHeight: 1.65,
                fontWeight: 300,
                marginBottom: '1.5rem'
              }}>
                {t.services.cards[0].desc}
              </p>
              {/* Highlighted Treatments */}
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                {t.services.cards[0].tags.map(item => (
                  <span key={item} style={{
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    padding: '0.35rem 0.8rem',
                    borderRadius: '2rem',
                    fontSize: '0.85rem',
                    fontWeight: 400,
                    color: '#FFFFFF',
                    border: '1px solid rgba(255,255,255,0.3)'
                  }}>{item}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Chronic Pain */}
          <div
            style={{
              flex: 1,
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.75)), url(${service2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: '#C94C3D', // Fallback
              borderRadius: '1.5rem',
              padding: '3rem 2.5rem',
              boxShadow: '0 8px 30px rgba(201, 76, 61, 0.15)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 15px 40px rgba(201, 76, 61, 0.25)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(201, 76, 61, 0.15)'; }}
          >
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{
                width: 64, height: 64, borderRadius: '1.2rem',
                backgroundColor: 'rgba(255,255,255,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem',
              }}>
                <Activity size={32} color="#FFFFFF" strokeWidth={1.5} />
              </div>
              <h3 style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '2.2rem',
                fontWeight: 500,
                color: '#FFFFFF',
                marginBottom: '1rem',
                lineHeight: 1.1,
              }}>{t.services.cards[1].title}</h3>
              <p style={{
                fontFamily: 'Outfit, system-ui, sans-serif',
                fontSize: '1.05rem',
                color: 'rgba(255,255,255,0.85)',
                lineHeight: 1.65,
                fontWeight: 300,
                marginBottom: '1.5rem'
              }}>
                {t.services.cards[1].desc}
              </p>
              {/* Highlighted Treatments */}
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                {t.services.cards[1].tags.map(item => (
                  <span key={item} style={{
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    padding: '0.35rem 0.8rem',
                    borderRadius: '2rem',
                    fontSize: '0.85rem',
                    fontWeight: 400,
                    color: '#FFFFFF',
                    border: '1px solid rgba(255,255,255,0.3)'
                  }}>{item}</span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* ROW 2: SECONDARY FOCUS (Skin & Hair, Lifestyle) */}
        <div className="resp-flex-col" style={{ display: 'flex', gap: '1.5rem' }}>
          
          {/* Skin & Hair Care */}
          <div
            style={{
              flex: 1,
              backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${service3})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: '#C94C3D', // Fallback
              borderRadius: '1.2rem',
              padding: '2rem 2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(201, 76, 61, 0.2)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.8rem' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '1rem',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Sparkles size={24} color="#FFFFFF" strokeWidth={1.5} />
                </div>
                <h3 style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '1.6rem',
                  fontWeight: 500,
                  color: '#FFFFFF',
                }}>{t.services.cards[2].title}</h3>
              </div>
              <p style={{
                fontFamily: 'Outfit, system-ui, sans-serif',
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.85)',
                lineHeight: 1.6,
                fontWeight: 300,
                marginBottom: '1.2rem'
              }}>
                {t.services.cards[2].desc}
              </p>
              {/* Highlighted Treatments */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {t.services.cards[2].tags.map(item => (
                  <span key={item} style={{
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    padding: '0.25rem 0.7rem',
                    borderRadius: '2rem',
                    fontSize: '0.8rem',
                    fontWeight: 400,
                    color: '#FFFFFF',
                    border: '1px solid rgba(255,255,255,0.3)'
                  }}>{item}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Lifestyle Guidance */}
          <div
            style={{
              flex: 1,
              backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${service4})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: '#4A6B60', // Fallback
              borderRadius: '1.2rem',
              padding: '2rem 2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(74, 107, 96, 0.2)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.8rem' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '1rem',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Sun size={24} color="#FFFFFF" strokeWidth={1.5} />
                </div>
                <h3 style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '1.6rem',
                  fontWeight: 500,
                  color: '#FFFFFF',
                }}>{t.services.cards[3].title}</h3>
              </div>
              <p style={{
                fontFamily: 'Outfit, system-ui, sans-serif',
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.85)',
                lineHeight: 1.6,
                fontWeight: 300,
                marginBottom: '1.2rem'
              }}>
                {t.services.cards[3].desc}
              </p>
              {/* Highlighted Treatments */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {t.services.cards[3].tags.map(item => (
                  <span key={item} style={{
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    padding: '0.25rem 0.7rem',
                    borderRadius: '2rem',
                    fontSize: '0.8rem',
                    fontWeight: 400,
                    color: '#FFFFFF',
                    border: '1px solid rgba(255,255,255,0.3)'
                  }}>{item}</span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
  );
};

export default Services;
