import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';

const products = [
  {
    title: 'Triphala Churna',
    subtitle: 'Digestive detox · 100 g',
    gradient: 'linear-gradient(135deg, #6B4C3B 0%, #3D2B1F 100%)',
  },
  {
    title: 'Ashwagandha Churna',
    subtitle: 'Adaptogen · Stress & vitality · 100 g',
    gradient: 'linear-gradient(135deg, #8C6E4B 0%, #5A3E28 100%)',
  },
  {
    title: 'Kumkumadi Cream',
    subtitle: 'Herbal face cream · All skin types · 50 ml',
    gradient: 'linear-gradient(135deg, #A84B3D 0%, #643228 100%)',
  },
  {
    title: 'Sarvanga Prakshaalan',
    subtitle: 'Full body herbal cleanser · 200 ml',
    gradient: 'linear-gradient(135deg, #4A7C72 0%, #2F6F5E 100%)',
  },
  {
    title: 'Neem & Turmeric Cream',
    subtitle: 'Skin healing · Anti-inflammatory · 50 ml',
    gradient: 'linear-gradient(135deg, #7A9B4A 0%, #4A6A2A 100%)',
  },
  {
    title: 'Brahmi Churna',
    subtitle: 'Memory & mind · Cognitive support · 100 g',
    gradient: 'linear-gradient(135deg, #5B7FA6 0%, #2F4F6E 100%)',
  },
];

const Products = () => (
  <section id="products" style={{ backgroundColor: '#F5EBDD', padding: '6rem 0' }}>
    <div style={{ maxWidth: '82rem', margin: '0 auto', padding: '0 2.5rem' }}>

      {/* Top row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', gap: '2rem', flexWrap: 'wrap' }}>
        <div style={{ maxWidth: '560px' }}>
          {/* Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
            <span style={{ width: '2rem', height: '1px', backgroundColor: 'rgb(47, 111, 94)', display: 'inline-block' }} />
            <span style={{ fontFamily: 'Outfit, system-ui, sans-serif', fontSize: '0.7rem', letterSpacing: '0.22em', color: 'rgb(47, 111, 94)', fontWeight: 600, textTransform: 'uppercase' }}>SUVARNA PRAKSHAALAN</span>
          </div>
          {/* Heading */}
          <h2 style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(2.25rem, 3.5vw, 3rem)',
            color: 'rgb(30, 63, 51)',
            fontWeight: 300,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}>
            Healing formulas, made with intention.
          </h2>
          <p style={{
            fontFamily: 'Outfit, system-ui, sans-serif',
            fontSize: '1rem',
            color: 'rgb(74, 107, 96)',
            lineHeight: 1.7,
          }}>
            Classical churnas, herbal creams and cleansers — prepared from traditional recipes, prescribed to your constitution.
          </p>
        </div>

        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          padding: '0.55rem 1.1rem',
          border: '1px solid rgba(47, 111, 94, 0.25)',
          borderRadius: '9999px',
          backgroundColor: '#fff',
          boxShadow: '0 2px 12px rgba(47,111,94,0.07)',
        }}>
          <Sparkles size={13} color="rgb(47, 111, 94)" />
          <span style={{ fontFamily: 'Outfit, system-ui, sans-serif', fontSize: '0.78rem', color: 'rgb(47, 111, 94)', fontWeight: 500 }}>
            Available on consultation
          </span>
        </div>
      </div>

      {/* Banner */}
      <div style={{
        width: '100%', height: '280px', borderRadius: '1.5rem', overflow: 'hidden',
        marginBottom: '3rem', position: 'relative',
        background: 'linear-gradient(135deg, rgb(47,111,94) 0%, rgb(30,63,51) 100%)',
        display: 'flex', alignItems: 'flex-end',
      }}>
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: '-3rem', right: '-3rem', width: '280px', height: '280px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)' }} />
        <div style={{ position: 'absolute', top: '2rem', right: '8rem', width: '160px', height: '160px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.04)' }} />
        <div style={{ position: 'absolute', bottom: '-2rem', right: '3rem', width: '200px', height: '200px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.04)' }} />

        {/* Text overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%)',
        }} />
        <div style={{ padding: '2.5rem', position: 'relative', zIndex: 2 }}>
          <h3 style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '2.2rem', fontWeight: 300,
            color: '#fff', marginBottom: '0.4rem',
          }}>The Suvarna Prakshaalan Range</h3>
          <p style={{
            fontFamily: 'Outfit, system-ui, sans-serif',
            fontSize: '0.9rem', color: 'rgba(245,235,221,0.85)',
          }}>Constitution-specific. Classical recipes. Slow-prepared.</p>
        </div>
      </div>

      {/* Product cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
        {products.map(({ title, subtitle, gradient }) => (
          <div
            key={title}
            style={{
              backgroundColor: '#fff',
              borderRadius: '1.5rem',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(44,53,49,0.06)',
              transition: 'all 0.3s',
              cursor: 'default',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(44,53,49,0.12)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(44,53,49,0.06)'; }}
          >
            {/* Gradient image area */}
            <div style={{
              height: '200px',
              background: gradient,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.4rem', fontWeight: 400,
                color: 'rgba(255,255,255,0.9)',
                textAlign: 'center',
                padding: '0 1rem',
              }}>{title}</span>
            </div>

            {/* Info */}
            <div style={{ padding: '1.2rem 1.4rem 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{
                    fontFamily: 'Outfit, system-ui, sans-serif',
                    fontWeight: 600, fontSize: '0.95rem',
                    color: 'rgb(30, 63, 51)', marginBottom: '0.2rem',
                  }}>{title}</div>
                  <div style={{
                    fontFamily: 'Outfit, system-ui, sans-serif',
                    fontSize: '0.78rem', color: 'rgb(74, 107, 96)',
                  }}>{subtitle}</div>
                </div>
                <button
                  style={{
                    width: 36, height: 36, borderRadius: '50%',
                    backgroundColor: '#25D366', border: 'none',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', flexShrink: 0,
                    boxShadow: '0 2px 8px rgba(37,211,102,0.3)',
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <MessageCircle size={16} color="#fff" strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* Enquire link */}
            <a
              href="#contact"
              style={{
                display: 'block',
                padding: '0.8rem 1.4rem 1.2rem',
                fontFamily: 'Outfit, system-ui, sans-serif',
                fontSize: '0.75rem', fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'rgb(47, 111, 94)', textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              ENQUIRE ON WHATSAPP →
            </a>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Products;
